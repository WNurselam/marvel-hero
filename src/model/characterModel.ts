export default interface Character {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: {
      path: string;
      extension: string;
    };
}