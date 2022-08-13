export type Actor = {
  id: number;
  url: string;
  name: string;
  birthday: string;
  deathday: null;
  gender: string;
  image: Image;
  updated: number;
  country: Country;
};

type Country = {
  name: string;
  code: string;
};

type Image = {
  medium: string;
  orignal: string;
};
