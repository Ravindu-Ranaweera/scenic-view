import Link from "next/link";

import styles from "./Button.module.css";

type Variant = "gold" | "outlineInk" | "outlineLight" | "quiet";

type CommonProps = {
  variant?: Variant;
  block?: boolean;
  children: React.ReactNode;
  className?: string;
};

const classesFor = ({ variant = "gold", block, className }: CommonProps) =>
  [
    variant === "quiet" ? styles.quiet : styles.base,
    variant !== "quiet" && styles[variant],
    block && styles.block,
    className,
  ]
    .filter(Boolean)
    .join(" ");

/**
 * Renders an <a>. Internal paths go through next/link; anything off-site
 * opens in a new tab with rel="noopener noreferrer".
 */
export function ButtonLink({ href, ...props }: CommonProps & { href: string }) {
  if (/^https?:/.test(href)) {
    return (
      <a
        href={href}
        className={classesFor(props)}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    );
  }

  return (
    <Link href={href} className={classesFor(props)}>
      {props.children}
    </Link>
  );
}

/** Renders a <button>. Use for actions. */
export function Button({
  type = "button",
  onClick,
  ...props
}: CommonProps & {
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button type={type} className={classesFor(props)} onClick={onClick}>
      {props.children}
    </button>
  );
}
