export interface User {
  gender: string;
  name: Name;
  picture: {
    large: string,
  }
}

export interface Name {
  title: string;
  first: string;
  last: string;
}
