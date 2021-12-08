import { FormEventHandler, PropsWithChildren } from "react";

type FormProps = PropsWithChildren<{
  onSubmit: FormEventHandler<HTMLFormElement>;
}>;

export const Form = ({ children, onSubmit }: FormProps) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};
