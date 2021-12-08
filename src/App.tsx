import { Form } from "./components/Form";
import { useForm } from "react-hook-form";
import { TextInputField } from "./components/TextInputField";
import { RadioField } from "./components/RadioField";
import { CheckboxField } from "./components/CheckboxField";
import { SelectField } from "./components/SelectField";
import { Button } from "./components/Button";

import "./App.css";

const selectOptions = [
  { value: "pizza", label: "Pizza" },
  { value: "burger", label: "Burger" },
  { value: "borsch", label: "Borsch" },
];

const validationRules = {
  firstName: "Required",
  secondName: "Required",
};

const formValidator =
  (rules: Record<string, string>) => (values: Record<string, any>) => {
    const errors = {} as Record<string, string>;

    Object.entries(rules).forEach(([key, value]) => {
      if (!values[key]) {
        errors[key] = value;
      }
    });

    console.log("🚀 ~ file: App.tsx ~ line 32 ~ errors", errors);

    return { values, errors };
  };

function App() {
  const { handleSubmit, control, formState } = useForm({
    resolver: formValidator(validationRules),
  });

  const onSubmit = (values: any) => {
    console.log(
      "🚀 ~ file: App.tsx ~ line 7 ~ onSubmit ~ values, formState",
      values,
      formState
    );
  };

  return (
    <div className="formWrapper">
      <h1>React Hook Form</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <div className="formFieldsWrapper">
          <div className="fieldGroup verticalAlign">
            <h2>Names:</h2>
            <TextInputField
              name="firstName"
              placeholder="First name"
              id="firstName"
              control={control}
            />
            <TextInputField
              name="secondName"
              placeholder="Second name"
              id="secondName"
              control={control}
            />
          </div>

          <div className="fieldGroup">
            <h2>Your sex:</h2>
            <RadioField
              id="sex"
              name="sex"
              value="male"
              label="Male"
              control={control}
            />
            <RadioField
              id="sex"
              name="sex"
              value="female"
              label="Female"
              control={control}
            />
            <RadioField
              id="sex"
              name="sex"
              value="other"
              label="Other"
              control={control}
            />
          </div>

          <div className="fieldGroup">
            <h2>Allergies:</h2>
            <CheckboxField
              id="allergies.milk"
              name="allergies.milk"
              label="Milk"
            />
            <CheckboxField
              id="allergies.nuts"
              name="allergies.nuts"
              label="Nuts"
            />
            <CheckboxField
              id="allergies.seafood"
              name="allergies.seafood"
              label="Sea food"
            />
          </div>

          <div className="fieldGroup">
            <SelectField
              control={control}
              name="favoriteFood"
              placeholder="Favorite food"
              options={selectOptions}
            />
          </div>
          <Button>Submit</Button>
        </div>
      </Form>
    </div>
  );
}

export default App;
