export type itemType = {
  id: Number;
  label: string;
  value: string;
};

export type User = {
  email: string;
  id: string;
  name: string;
  role: string;
  __typename: string;
};

export type inputText = string;
export type typeDefuser = User[] | undefined;
