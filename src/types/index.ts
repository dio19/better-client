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
interface ITextfield {
  id: string;
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
  error: boolean;
  helperText: string;
  disabled?: boolean;
}

type CustomerContextType = {
  DataContext: Array<DataCustomer>;
  setDataContext: (value: Array<DataCustomer>) => void;
};

interface MouseEventTarget extends EventTarget {
  value: any;
  id: string;
}

interface MouseEvent extends React.ChangeEventHandler<HTMLInputElement> {
  target: MouseEventTarget;
}

export type {
  IInput,
  Order,
  Customers,
  DataCustomer,
  HeadCell,
  ITextfield,
  CustomerContextType,
  MouseEvent,
};
