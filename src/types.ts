export interface User {
  gender: string;
  name: Name;
  picture: {
    large: string,
  }
}

interface Name {
  title: string;
  first: string;
  last: string;
}
