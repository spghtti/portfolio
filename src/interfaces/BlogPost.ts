export interface BlogPost {
  title: string;
  body: string;
  preview: string;
  date: string;
  updated: string;
  _id: string;
  tags: string[];
  views: number;
  comments: object[];
}
