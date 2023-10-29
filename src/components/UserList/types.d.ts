export type User = {
  email: string;
  id: string;
  name: string;
  role: string;
  __typename: string;
};

export type propTypes = {
  data: Array<User>;
  selected: string;
  isRefreshing: boolean;
  handleRefresh: () => void;
};
