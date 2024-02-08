import { useEffect } from "react";
import type { Attributes } from "~/models";

export type AttributesProps = {
  applyTo: React.RefObject<any>;
  attributes: Attributes;
};

export default function Attributes({ applyTo, attributes }: AttributesProps) {
  useEffect(() => {
    const element = applyTo.current;
    if (!element) return;

    for (const key in attributes) {
      if (Object.prototype.hasOwnProperty.call(attributes, key)) {
        element.setAttribute(`data-${key}`, attributes[key].toString());
      }
    }
  });

  return null;
}
