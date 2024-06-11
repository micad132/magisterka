import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from '../services/UserService.ts';
import SupportRequestService from '../services/SupportRequestService.ts';
import { RootState } from '../types/StoreTypes.ts';
import { AddingComment, CommentResponseDTO } from '../types/CommentType.ts';
import CommentService from '../services/CommentService.ts';

interface CommentsSliceInitialState {
  comments: CommentResponseDTO[],
}

const initialState: CommentsSliceInitialState = {
  comments: [],
};

export const fetchCommentsThunk = createAsyncThunk(
  'commentsSlice/fetchComments',
  async (_, { rejectWithValue }) => {
    try {
      const data = await CommentService.getAllComments();
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const addCommentThunk = createAsyncThunk(
  'commentSlice/addComment',
  async (commentBody: AddingComment, { rejectWithValue }) => {
    try {
      await CommentService.addComment(commentBody);
      const data = await CommentService.getAllComments();
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const deleteCommentThunk = createAsyncThunk(
  'commentSlice/deleteComment',
  async (commentId: number) => {
    try {
      await CommentService.deleteComment(commentId);
      const data = await CommentService.getAllComments();
      return data;
    } catch (e: any) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw e.response.data;
    }
  },
);

export const getAllComments = (state: RootState): CommentResponseDTO[] => state.comment.comments;

const commentSlice = createSlice({
  name: 'commentSlice',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder.addCase(fetchCommentsThunk.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
    builder.addCase(addCommentThunk.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
    builder.addCase(deleteCommentThunk.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export default commentSlice.reducer;
