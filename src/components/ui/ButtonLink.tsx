import type { AnchorHTMLAttributes, PropsWithChildren } from "react";
import styles from "./Button.module.css";

type IButtonLink = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>> & {
  variant: "link1" | "link2" | "link3";
  href: string;
  color: string;
};

const ButtonLink = ({ variant, href, children, color, ...props }: IButtonLink) => {
  return (
    <a href={href} className={styles[variant]} style={{ "--dynamic-color": color } as React.CSSProperties} {...props}>
      {children}
    </a>
  );
};

export default ButtonLink;
