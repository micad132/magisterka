import { ReactNode } from 'react';

export type ModalProps = {
  buttonText: string,
  modalHeader: string,
  modalBody: ReactNode,
  modalActionButtonText: string,
  buttonColor?: string,
  buttonSize?: string,
  mainButtonAction: any,
  modalIcon?: ReactNode,
};

export type SelectValue = {
  value: string | number,
  text: string,
};

export type ValuesType<T> = T[keyof T];
