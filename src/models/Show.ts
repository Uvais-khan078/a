export type Show = {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  generes: string[];
  status: string;
  rating: {
    average: number;
  };
  image: {
    medium: string;
    orignal: string;
  };
  summary: string;
};
