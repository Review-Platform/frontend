import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  open?: boolean;
  setOpen: (boolean: boolean) => void;
  children: ReactNode;
}
