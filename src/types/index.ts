interface IInput {
  label: string;
  type: string;
}

type Order = "asc" | "desc";

interface DataCustomer {
  id: number;
  email: string;
  first: string;
  last: string;
  company: string;
  country: string;
  created_at: string;
}

interface Customers {
  total_items: number;
  data: Array<DataCustomer>;
}

interface HeadCell {
  id: keyof DataCustomer;
  label: string;
  disableSorting: boolean;
}

interface MouseEventTarget extends EventTarget {
  id: string;
}

interface MouseEventButton extends React.MouseEvent<HTMLButtonElement> {
  target: MouseEventTarget;
}

interface ITextfield {
  id: string;
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  error: boolean;
  helperText: string;
}

export type {
  IInput,
  Order,
  Customers,
  DataCustomer,
  HeadCell,
  MouseEventButton,
  ITextfield,
};
