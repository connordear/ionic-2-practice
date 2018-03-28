
export class Lesson {
  title: string;
  chips: string[];
  date: Date;
  tags: string[];
  reviewScore: number;
  reviewCount: number;
  description: string[];

    constructor(title: string, chips: string[], date: Date, tags: string[], reviewScore: number, reviewCount: number, description: string[]) {
      this.title = title;
      this.chips = chips;
      this.date = date;
      this.tags = tags;
      this.reviewScore = reviewScore;
      this.reviewCount = reviewCount;
      this.description = description;
    }
}
