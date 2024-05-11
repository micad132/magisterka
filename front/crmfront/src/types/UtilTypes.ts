import { ReactNode } from 'react';

export type ModalProps = {
  buttonText: string,
  modalHeader: string,
  modalBody: ReactNode,
  modalActionButtonText: string,
  buttonColor?: string,
  buttonSize?: string,
  mainButtonAction: any,
};

export type SelectValue = {
  value: string,
  text: string,
};

export type ValuesType<T> = T[keyof T];
