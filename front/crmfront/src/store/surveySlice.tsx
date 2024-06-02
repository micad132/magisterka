import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import UserService from '../services/UserService.ts';
import SupportRequestService from '../services/SupportRequestService.ts';
import { AddSurvey, Survey } from '../types/SurveyType.ts';
import SurveyService from '../services/SurveyService.ts';
import { RootState } from '../types/StoreTypes.ts';

// interface ResponseType<T> {
//   success: boolean;
//   data: T;
// }

interface SurveySliceInitialState {
  surveys: Survey[],

}

const initialState: SurveySliceInitialState = {
  surveys: [],
};

export const fetchSurveysThunk = createAsyncThunk(
  'surveySlice/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await SurveyService.fetchSurveys();
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const addingSurveyThunk = createAsyncThunk(
  'surveySlice/add',
  async (surveyBody: AddSurvey, { rejectWithValue }) => {
    try {
      await SurveyService.addSurvey(surveyBody);
      const data = await SurveyService.fetchSurveys();
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);

export const deleteSurveyThunk = createAsyncThunk(
  'surveySlice/deleteSupport',
  async (surveyId: number) => {
    try {
      await SurveyService.deleteSurvey(surveyId);
      const data = await SurveyService.fetchSurveys();
      return data;
    } catch (e: any) {
      // eslint-disable-next-line @typescript-eslint/no-throw-literal
      throw e.response.data;
    }
  },
);

export const getAllSurveys = (state: RootState): Survey[] => state.survey.surveys;

const surveySlice = createSlice({
  name: 'surveySlice',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSurveysThunk.fulfilled, (state, action) => {
        state.surveys = action.payload;
      });
    builder.addCase(addingSurveyThunk.fulfilled, (state, action) => {
      state.surveys = action.payload;
    });
    builder.addCase(deleteSurveyThunk.fulfilled, (state, action) => {
      state.surveys = action.payload;
    });
  },
});

export default surveySlice.reducer;
