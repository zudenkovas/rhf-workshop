import { Control, useFormState } from "react-hook-form";

type CheckBoxFieldProps = {
  id: string;
  label: string;
  name: string;
  control: Control;
};

export const CheckboxField = ({
  id,
  name,
  label,
  control,
}: CheckBoxFieldProps) => {
  const { errors } = useFormState({ control, name, exact: true });

  return (
    <div>
      <label>
        <input {...control.register(name)} id={id} type="checkbox" />
        <span>{label}</span>
        {errors[name] && <span>{errors[name]}</span>}
      </label>
    </div>
  );
};
