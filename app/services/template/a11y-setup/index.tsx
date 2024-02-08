import { useEffect } from "react";

export type A11ySetupProps = {
  textBaseUnit: number;
  textLineBaseUnit: number;
  spacingBaseUnit: number;
};

export default function A11ySetup({ textBaseUnit, textLineBaseUnit, spacingBaseUnit }: A11ySetupProps) {
  useEffect(() => {
    const A11Y_VARIABLES: Record<string, any> = {
      "--text-base-unit": `${textBaseUnit}rem`,
      "--text-line-base-unit": `${textLineBaseUnit}rem`,
      "--spacing-base-unit": `${spacingBaseUnit}rem`,
      };
    
    for (const key in A11Y_VARIABLES) {
      if (A11Y_VARIABLES.hasOwnProperty(key)) {
        document.body.style.setProperty(key, A11Y_VARIABLES[key]);
      }
    }
  }, [spacingBaseUnit, textBaseUnit, textLineBaseUnit]);

  return null
}
