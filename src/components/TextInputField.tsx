import { Control, useFormState } from "react-hook-form";

type TextInputFieldProps = {
  placeholder?: string;
  name: string;
  id: string;
  control: Control;
};

export const TextInputField = ({
  placeholder,
  name,
  id,
  control,
}: TextInputFieldProps) => {
  const { errors } = useFormState({ control });
  console.log("🚀 ~ file: TextInputField.tsx ~ line 17 ~ errors", errors);

  return (
    <>
      <input
        id={id}
        placeholder={placeholder}
        {...control.register(name)}
        type="text"
      />
      {errors?.[name] && <p className="error">{errors?.[name]}</p>}
    </>
  );
};
