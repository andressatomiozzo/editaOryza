import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL }));

// Limita a 5 envios por IP a cada 15 minutos (evita spam)
const limitador = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { erro: 'Muitas tentativas. Tente novamente mais tarde.' }
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Evita injeção de HTML no corpo do e-mail
const escapar = (texto) =>
  String(texto)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

app.post('/contato', limitador, async (req, res) => {
  const { name, institution, email, phone, message } = req.body;

  if (!name || !institution || !email || !message) {
    return res.status(400).json({ erro: 'Preencha os campos obrigatórios.' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ erro: 'E-mail inválido.' });
  }

  if (message.length > 500) {
    return res.status(400).json({ erro: 'Mensagem muito longa.' });
  }

  try {
    await transporter.sendMail({
      from: `"Site EditaOryza" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_DESTINO,
      replyTo: email,
      subject: `Nova mensagem de ${name}`,
      text: `Nome: ${name}\nInstituição: ${institution}\nE-mail: ${email}\nTelefone: ${phone || 'não informado'}\n\nMensagem:\n${message}`,
      html: `
        <h2>Nova mensagem pelo site</h2>
        <p><strong>Nome:</strong> ${escapar(name)}</p>
        <p><strong>Instituição:</strong> ${escapar(institution)}</p>
        <p><strong>E-mail:</strong> ${escapar(email)}</p>
        <p><strong>Telefone:</strong> ${escapar(phone || 'não informado')}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${escapar(message).replace(/\n/g, '<br>')}</p>
      `,
    });

    res.json({ ok: true });
  } catch (erro) {
    console.error('Erro ao enviar e-mail:', erro);
    res.status(500).json({ erro: 'Não foi possível enviar a mensagem.' });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT}`);
});