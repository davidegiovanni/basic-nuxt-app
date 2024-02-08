import { useEffect } from "react";

export type MetadataProps = {
  applyTo: React.RefObject<any>;
  metadata: Record<string, string>;
};

function convertToCamelCase(property: string) {
  return property.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}

export default function Metadata({ applyTo, metadata }: MetadataProps) {
  useEffect(() => {
    const divElement = applyTo.current;
    if (!divElement) return;
    if (!metadata) return;
    if (metadata.hasOwnProperty("class")) {
      divElement.classList.add(metadata.class);
    }
    if (metadata.hasOwnProperty("style") && metadata["style"] !== "") {
      const styles = metadata["style"].split(";");

      styles.forEach((style) => {
        const [property, value] = style.split(":").map((part) => part.trim());
        if (property && value) {
          const camelCaseProperty = convertToCamelCase(property);
          divElement.style[camelCaseProperty] = value;
        }
      });
    }
  });

  return null;
}
