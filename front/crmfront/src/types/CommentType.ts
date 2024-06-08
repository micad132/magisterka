import { RoleTypeType } from './UserType.ts';

export type CommentResponseDTO = {
  id: number,
  description: string,
  authorUsername: string,
  authorName: string,
  authorSurname: string,
  authorRole: RoleTypeType,
  createdTime: string,
  taskId: number,
};

export type AddingComment = {
  description: string,
  authorId: number,
  taskId: number,
};
