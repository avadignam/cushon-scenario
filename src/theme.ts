import "styled-components";

interface CushonThemeModel {
  ACCENT: string;
  TRANSPARENT_ACCENT: string;
  TEXT: string;
  ACCENT_TEXT: string;
  BORDER_RADIUS: string;
  BACKGROUND_COLOUR: string;
  BORDER: string;
  ERROR: string;
  SUCCESS: string;
}

export const CushonTheme: CushonThemeModel = {
  ACCENT: "rgb(211, 66, 142)",
  TRANSPARENT_ACCENT: "rgba(211, 66, 142, 0.2)",
  TEXT: "rgb(72, 72, 72)",
  ACCENT_TEXT: "rgb(255, 255, 255)",
  BORDER_RADIUS: "10px",
  BACKGROUND_COLOUR: "rgb(255, 255, 255)",
  BORDER: "rgb(226, 226, 226)",
  ERROR: "rgb(255, 0, 0)",
  SUCCESS: "rgb(145, 179, 130)",
};

declare module "styled-components" {
  export interface DefaultTheme extends CushonThemeModel {}
}
