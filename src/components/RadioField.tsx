import { Control } from "react-hook-form";

type RadioFieldProps = {
  id: string;
  name: string;
  label: string;
  control: Control;
  value?: string;
};

export const RadioField = ({
  id,
  name,
  control,
  value,
  label,
}: RadioFieldProps) => {
  return (
    <>
      <input {...control.register(name)} id={id} value={value} type="radio" />
      <label htmlFor={id}>{label}</label>
    </>
  );
};
