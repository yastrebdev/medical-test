export interface Question {
  question: string;
  options: Option[];
}

export interface Option {
  text: string;
  img?: string;
  points: number;
}