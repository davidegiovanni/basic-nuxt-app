import type { ReactNode } from "react";

export type DescriptionProps = {
  size: "1" | "2" | "3" | "4" | "5" | "6" | "";
  className: string;
  children: ReactNode;
};

export default function Description({
  size,
  className,
  children,
}: DescriptionProps) {
  if (size === "1") {
    return <h1 className={className}>{children}</h1>;
  }

  if (size === "2") {
    return <h2 className={className}>{children}</h2>;
  }

  if (size === "3") {
    return <h3 className={className}>{children}</h3>;
  }

  if (size === "4") {
    return <h4 className={className}>{children}</h4>;
  }

  if (size === "5") {
    return <h5 className={className}>{children}</h5>;
  }

  if (size === "6") {
    return <h6 className={className}>{children}</h6>;
  }

  return <p className={className}>{children}</p>;
}
