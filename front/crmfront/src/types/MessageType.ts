export type MessageType = {
  id: number,
  text: string,
  authorName: string,
  authorSurname: string,
  authorUsername: string,
  receiverUsername: string,
  receiverSurname: string,
  receiverName: string,
  date: string,
};

export type AddingMessageStateType = {
  description: string,
  receiver: string,
  author: string,
};

export type AddingMessage = {
  text: string,
  authorId: number,
  receiverId: number,
};

export const INITIAL_ADDING_MESSAGE_VALUE: AddingMessageStateType = {
  description: '',
  receiver: '',
  author: '',
};
