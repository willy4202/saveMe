import { Fragment } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Dynamic({ children }: Props) {
  return <Fragment>{children}</Fragment>;
}
