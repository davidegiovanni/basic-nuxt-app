import { useEffect } from "react";

export type ThemeProps = {
  primary: string;
  inverted: string;
  radius: number;
  fontFamily: string;
  fontFamilyUrl: string;
  faviconUrl: string;
};

export default function CustomTheme({ ...props }: ThemeProps) {
  const customTheme: Record<string, any> = {
    "--primary-color": props.primary,
    "--darker-primary-color": darkenColor(props.primary),
    "--primary-contrast-color": props.inverted,
    "--border-radius": `${props.radius}px`,
    "--border-radius-inner": `${props.radius / 2}px`,
    "--custom-font": props.fontFamily,
    "font-family": `${props.fontFamily}`,
  };

  useEffect(() => {
    // 1. Add styles variables
    for (const key in customTheme) {
      if (customTheme.hasOwnProperty(key)) {
        document.body.style.setProperty(key, customTheme[key]);
      }
    }

    const headMeta = document.head.getElementsByTagName('meta');

    const themeMetas = Array.from(headMeta).filter(meta => meta.name === "theme-color" )
    if (themeMetas.length === 0) {
      const metaTag = document.createElement('meta');
      metaTag.name = 'theme-color';
      metaTag.content = props.primary;
      document.head.appendChild(metaTag);
    }

    const headLinks = document.head.getElementsByTagName('link');
    const bodyLinks = document.body.getElementsByTagName('link');

    // 2. Change favicon with custom favicon
    const defaultIconsLinks = Array.from(headLinks).filter(link => link.type === "image/x-icon" && link.rel  === 'icon' && link.href.includes("/default-favicon.png"))
    const customIconsLinks = Array.from(headLinks).filter(link => link.type === "image/x-icon" && link.rel  === 'icon' && link.href === props.faviconUrl)

    if (defaultIconsLinks.length > 0 && customIconsLinks.length === 0) {
      const link = defaultIconsLinks[0];
      link.href = props.faviconUrl;
    }

    // 3. Change font family URL
    const defaultStylesheetsLinks = Array.from(bodyLinks).filter(link => link.rel  === 'stylesheet' && link.href === 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap')
    const customStylesheetsLinks = Array.from(bodyLinks).filter(link => link.rel  === 'stylesheet' && link.href === props.fontFamilyUrl)
    
    if (defaultStylesheetsLinks.length > 0 && customStylesheetsLinks.length === 0) {
      const link = defaultStylesheetsLinks[0];
      link.href = props.fontFamilyUrl;
    }
  });
  

  return null;
}

export const getContrastFrom = function (hexcolor: string) {
  // If a leading # is provided, remove it
  if (hexcolor.slice(0, 1) === "#") {
    hexcolor = hexcolor.slice(1);
  }

  // If a three-character hexcode, make six-character
  if (hexcolor.length === 3) {
    hexcolor = hexcolor
      .split("")
      .map(function (hex) {
        return hex + hex;
      })
      .join("");
  }

  // Convert to RGB value
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);

  // Get YIQ ratio
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;

  // Check contrast
  return yiq >= 150 ? "black" : "white";
};

function darkenColor(color: string): string {
  // Remove the leading '#' if it exists
  color = color.replace(/^#/, "");

  // Parse the hex color into its RGB components
  const red = parseInt(color.slice(0, 2), 16);
  const green = parseInt(color.slice(2, 4), 16);
  const blue = parseInt(color.slice(4, 6), 16);

  // Calculate the new RGB values for the darker color
  const darkerRed = Math.floor(red * 0.75);
  const darkerGreen = Math.floor(green * 0.75);
  const darkerBlue = Math.floor(blue * 0.75);

  // Convert the new RGB values back to hex
  const darkerHex =
    "#" +
    (darkerRed < 16 ? "0" : "") +
    darkerRed.toString(16) +
    (darkerGreen < 16 ? "0" : "") +
    darkerGreen.toString(16) +
    (darkerBlue < 16 ? "0" : "") +
    darkerBlue.toString(16);

  return darkerHex;
}
