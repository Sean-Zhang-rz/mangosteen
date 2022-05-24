export default interface FormDataProps {
  [k: string]: string | number | null | undefined | FormDataProps;
}

export type Rules<T> = {
  key: keyof T;
  message: string;
} & ({ type: 'required' } | { type: 'pattern'; regex: RegExp });
