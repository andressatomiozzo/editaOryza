import React from "react";
import Button from "../ui/Button";
import { useLanguageContext } from "../../context/LanguageContext";

import styles from "./Contact.module.css";
import useScrollY from "../../hooks/useScrollY";

// ======================== TYPES ============================
type FormKeys = "name" | "institution" | "email" | "phone" | "message";

type FormField = {
  id: FormKeys;
  label: string;
  placeholder: string;
  type: "text" | "email" | "tel";
  required?: boolean;
};

type FormData = Record<FormKeys, string>;

type Status = "idle" | "sending" | "success" | "error";

// ======================== COMPONENT ============================
const Contact = () => {
  const { ref, passed } = useScrollY<HTMLDivElement>(250);

  const { t } = useLanguageContext();
  const fields = t.contact.form.fields as FormField[];
  const inputFields = fields.filter((field) => field.id !== "message");
  const messageField = fields.find((field) => field.id === "message")!;

  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    institution: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sendingStatus, setSendingStatus] = React.useState<Status>("idle");

  const handleFormEdit = (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
    name: "name" | "institution" | "email" | "phone" | "message",
  ) => {
    setFormData({ ...formData, [name]: event.target.value });
  };

  const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSendingStatus("sending");

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/contato`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error();

      setSendingStatus("success");
      setFormData({ name: "", institution: "", email: "", phone: "", message: "" });
    } catch {
      setSendingStatus("error");
    }
  };

  return (
    <section className={styles.bgContainer}>
      <div ref={ref} className={`${passed ? "animeLeft" : ""} container ${styles.container}`}>
        <h2 className={`title ${styles.title}`}>
          <span>{t.contact.title[0]}</span>
          <span>{t.contact.title[1]}</span>
        </h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          {inputFields.map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id}>
                {field.label}
                {field.required && " *"}
              </label>
              <input
                type={field.type}
                name={field.id}
                id={field.id}
                placeholder={field.placeholder}
                autoComplete="on"
                required={field.required}
                value={formData[field.id]}
                onChange={(e) => handleFormEdit(e, field.id)}
              />
            </div>
          ))}

          <div>
            <label htmlFor={messageField.id}>{messageField.label} *</label>
            <textarea
              name={messageField.id}
              id={messageField.id}
              placeholder={messageField.placeholder}
              maxLength={500}
              required
              value={formData.message}
              onChange={(e) => handleFormEdit(e, "message")}
            />
          </div>

          <Button
            variant="button1"
            color="var(--color-highlight1)"
            type="submit"
            disabled={sendingStatus === "sending"}
          >
            {sendingStatus === "sending" ? "..." : t.contact.form.submit_button}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
