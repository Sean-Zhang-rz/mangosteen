// interface FData {
//   [k: string]: string | number | null | undefined | FData;
// }
// export type Rules<T> = {
//   key: keyof T;
//   message: string;
// } & ({ type: 'required' } | { type: 'pattern'; regex: RegExp });

import FormDataProps, { Rules } from '@/api/types/form';

export const validate = <T extends FormDataProps>(formData: T, rules: Rules<T>[]) => {
  type Errors = {
    [k in keyof T]?: string[];
  };
  const errors: Errors = {};
  rules.map((rule) => {
    const { key, type, message } = rule;
    const value = formData[key]?.toString().trim();
    switch (type) {
      case 'required':
        if (isEmpty(value)) {
          errors[key] = errors[key] ?? [];
          errors[key]?.push(message);
        }
        break;
      case 'pattern':
        if (!isEmpty(value) && !rule.regex.test(value!.toString())) {
          errors[key] = errors[key] ?? [];
          errors[key]?.push(message);
        }
        break;
      default:
        return;
    }
  });
  return errors;
};
function isEmpty(value: null | undefined | string | number | FormDataProps) {
  return value == null || value === '';
}
