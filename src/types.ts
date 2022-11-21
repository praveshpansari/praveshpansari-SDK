export declare type Book = {
  _id: string;
  name: string;
};

export declare type Chapter = {
  _id: string;
  chapterName: string;
};

export declare type Character = {
  _id: string;
  height: string;
  race: string;
  gender: string;
  birth: string;
  spouse: string;
  death: string;
  realm: string;
  hair: string;
  name: string;
  wikiUrl: string;
};

export declare type Quote = {
  _id: string;
  dialog: string;
  movie: string;
  character: string;
  id: string;
};

export declare type Movie = {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
};
