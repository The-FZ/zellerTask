export type itemType = {
  id: Number;
  label: string;
  value: string;
};

export type propTypes = {
  getUserType: (item: itemType) => void;
  selected: itemType | undefined;
};
