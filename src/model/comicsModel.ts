export default interface Comic {
  name: string;
  id: number ;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string
  modified: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}
