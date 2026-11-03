import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Button.module.css";

type IButton = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> & {
  variant: "button1" | "button2" | "button3";
  color: string;
};

const Button = ({ variant, children, color, ...props }: IButton) => {
  return (
    <button className={styles[variant]} style={{ "--dynamic-color": color } as React.CSSProperties} {...props}>
      {children}
    </button>
  );
};

export default Button;
