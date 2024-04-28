import { ReactNode } from 'react';

export type ModalProps = {
  buttonText: string,
  modalHeader: string,
  modalBody: ReactNode,
  modalActionButtonText: string,
  buttonColor?: string,
};

export type SelectValue = {
  value: string,
  text: string,
};

export type ValuesType<T> = T[keyof T];
