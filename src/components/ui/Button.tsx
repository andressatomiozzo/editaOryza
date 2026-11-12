import type { ComponentPropsWithRef } from "react";

import styles from "./Button.module.css";

type IButton = ComponentPropsWithRef<"button">  & {
  variant: "button1" | "button2" | "button3";
  color: string;
};

const Button = ({ variant, className = "", children, color, ...props }: IButton) => {
  return (
    <button
      className={`${styles[variant]} ${className}`}
      style={{ "--dynamic-color": color } as React.CSSProperties}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
