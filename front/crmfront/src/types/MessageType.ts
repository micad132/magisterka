export type MessageType = {
  description: string,
  authorId: number,
  receiverId: number,
  date: string,
};

export type AddingMessageStateType = {
  description: string,
  receiver: string,
};

export const INITIAL_ADDING_MESSAGE_VALUE: AddingMessageStateType = {
  description: '',
  receiver: '',
};
