import { ILevel, ITag } from "./Card";

export interface CardPost {
  question: string | null;
  answer: string | null;
  level: ILevel | null;
  tag: ITag[];
  category: string[];
}
