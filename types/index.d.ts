export type itemType = {
  id: number;
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

export type inputTextType = string;

export type searchBoxPropTypes = {
  searchTextHandler: (text: string) => void;
  searchText: string;
};

export type itemPropTypes = {
  getUserType: (item: itemType) => void;
  selected: itemType | undefined;
};

export type userPropTypes = {
  data: Array<User>;
  selected: string;
  isRefreshing: boolean;
  handleRefresh: () => void;
};

export type radioButtonPropTypes = {
  selected: boolean;
  id: number;
};

export type goBackButtonProps = {
  goBack: () => void;
};
