import Select, { Props as SelectProps } from "react-select";
import { Control, Controller } from "react-hook-form";

type SelectFieldProps = Omit<SelectProps, "name"> & {
  control: Control;
  name: string;
};

export const SelectField = ({
  name,
  control,
  options,
  ...rest
}: SelectFieldProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ...restField } }) => (
        <Select
          {...restField}
          {...rest}
          onChange={(option: any) => {
            onChange(option.value);
          }}
          value={options?.find((o: any) => o?.value === value)}
          options={options}
        />
      )}
    />
  );
};
