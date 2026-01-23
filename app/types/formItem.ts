// types/formItem.ts
import { Rule } from "antd/es/form";

export type FormItemType =
  | "input"
  | "email"
  | "password"
  | "checkbox"
  | "phone"
  | "select";

export interface FormItemConfig {
  name: string;
  label?: string;
  type: FormItemType;
  placeholder?: string;
  rules?: Rule[];
  colSpan?: 1 | 2; // for grid layout
  helperText?: string;
  itemClassname?: string;
  dependencies?: string[];

  phoneProps?: {
    country?: string;
  };

  options?: { label: string; value: string }[];
}
