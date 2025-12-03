export interface Card {
  title: string;
  description?: string;
  link?: { label: string; url: string };
  group: string;
}
