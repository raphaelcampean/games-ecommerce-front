import Select, { MultiValue, SingleValue } from "react-select";

interface SelectInputProps<T> {
  options: T[];
  value: T | T[] | null;
  getOptionValue: (option: T) => string;
  getOptionLabel: (option: T) => string;
  onChange: (value: T | T[] | null) => void;
  isMulti?: boolean;
  placeholder?: string;
}

export default function SelectOptions<T>({
  options,
  value,
  getOptionValue,
  getOptionLabel,
  onChange,
  isMulti = false,
  placeholder,
}: SelectInputProps<T>) {
  return (
    <Select
      options={options}
      value={value}
      isMulti={isMulti}
      getOptionValue={getOptionValue}
      getOptionLabel={getOptionLabel}
      onChange={(selected) => {
        onChange(selected as T | T[] | null);
      }}
      placeholder={placeholder}
    />
  );
}