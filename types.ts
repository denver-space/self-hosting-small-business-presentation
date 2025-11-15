
export interface Point {
  text: string;
  subPoints?: Point[];
}

export interface SlideData {
  title: string;
  points: Point[];
  imagePrompt?: string;
}