export default interface Series {
  id: number;
  title: string;
  description: string;
  startYear: number;
  endYear: number;
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
