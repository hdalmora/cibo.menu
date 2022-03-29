export type FieldAreaSchema = {
  id: string;
  type: 'text' | 'number';
  placeholder: string;
  defaultValue: string | number | null;
  updateTitle?: (sectionIndex: number, id: string, title: string) => void;
  updatePrice?: (sectionIndex: number, id: string, price: number) => void;
};
