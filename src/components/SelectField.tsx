import Select, { Props as SelectProps } from "react-select";
import { useController, Control } from "react-hook-form";

type SelectFieldProps = Omit<SelectProps, "name"> & {
  control: Control;
  name: string;
};

export const SelectField = ({ name, control, ...rest }: SelectFieldProps) => {
  const { field } = useController({ name, control, defaultValue: "" });
  return <Select {...field} {...rest} />;
};
