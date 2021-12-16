import { Form } from "./components/Form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
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

const isRequired = (value: any) => {
  return value ? "" : "Required";
};

const atLeastOneSelected = (value: any) => {
  return Object.values(value).some((value) => value)
    ? ""
    : "At least one must be selected";
};

const atLeastOneSelectedWithYupSchema = yup
  .object()
  .test("allergies", "At least one must be selected", (values) => {
    return Object.values(values).some((value) => value) ? true : false;
  });

const validationRules = {
  firstName: isRequired,
  secondName: isRequired,
  allergies: yupResolver(atLeastOneSelectedWithYupSchema),
};

const yupSchema = yup.object().shape({
  firstName: yup.string().required(),
  secondName: yup.string().required(),
});

const formValidator =
  (rules: Record<string, (value: any) => string>) =>
  (values: Record<string, any>) => {
    const errors = {} as Record<string, string>;

    Object.entries(rules).forEach(([key, rule]) => {
      const error = rule(values[key]);

      if (error) {
        errors[key] = error;
      }
    });

    console.log("🚀 ~ file: App.tsx ~ line 32 ~ errors", errors);

    return { values, errors };
  };

function App() {
  const { handleSubmit, control, formState } = useForm({
    resolver: yupResolver(yupSchema),
    reValidateMode: "onBlur",
    mode: "onBlur",
  });

  const onSubmit = (values: any) => {
    console.log(
      "🚀 ~ file: App.tsx ~ line 7 ~ onSubmit ~ values, formState",
      values,
      formState
    );
  };

  const onError = (errors: any) => {
    console.log(errors);
  };

  return (
    <div className="formWrapper">
      <h1>React Hook Form</h1>
      <Form onSubmit={handleSubmit(onSubmit, onError)}>
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
              control={control}
              name="allergies.milk"
              label="Milk"
            />
            <CheckboxField
              id="allergies.nuts"
              control={control}
              name="allergies.nuts"
              label="Nuts"
            />
            <CheckboxField
              id="allergies.seafood"
              control={control}
              name="allergies.seafood"
              label="Sea food"
            />
            {formState.errors?.allergies && (
              <p className="error">{formState.errors?.allergies}</p>
            )}
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
