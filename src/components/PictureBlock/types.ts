import { TFunction } from "react-i18next";
export interface ContentBlockProps {
  icon: string;
  background: string;
  title: string;
  content: string;
  section?: {
    title: string;
    content: string;
    icon: string;
    background: string;
  }[];
  button?: (
    | {
        title: string;
        color?: undefined;
      }
    | {
        title: string;
        color: string;
      }
  )[];
  t: TFunction;
  id: string;
  direction: "left" | "right";
}
