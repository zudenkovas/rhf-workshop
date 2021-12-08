type CheckBoxFieldProps = {
  id: string;
  label: string;
  name: string;
};

export const CheckboxField = ({ id, name, label }: CheckBoxFieldProps) => {
  return (
    <div>
      <label>
        <input id={id} name={name} type="checkbox" />
        <span>{label}</span>
      </label>
    </div>
  );
};
