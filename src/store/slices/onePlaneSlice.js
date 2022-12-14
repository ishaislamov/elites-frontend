import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import createPlaneService from "../services/createPlaneService";
import onePlaneService from "../services/onePlaneService";

export const getOnePlane = createAsyncThunk(
  "GET_ONE_PLANE",
  async (id, thunkAPI) => {
    try {
      return await onePlaneService.getOnePlane(id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
// CREATE PLANE
export const createPlane = createAsyncThunk(
  "CREATE_PLANE",
  async (planeData, thunkAPI) => {
    try {
      return await createPlaneService.createPlane(planeData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const onePlaneSlice = createSlice({
  name: "plane",
  initialState: {
    plane: null,
    isError: false,
    isLoading: false,
    message: "",
    errors: null,
  },
  reducers: {
    resetPlaneErrors: (state) => {
      state.errors = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getOnePlane.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getOnePlane.fulfilled, (state, action) => {
      state.isLoading = false;
      state.plane = action.payload[0];
    });
    builder.addCase(getOnePlane.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.plane = null;
    });
    builder.addCase(createPlane.pending, (state) => {
      state.isLoading = true;
      state.errors = null;
    });
    builder.addCase(createPlane.fulfilled, (state, action) => {
      state.isLoading = false;
      state.errors = null;
    });
    builder.addCase(createPlane.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.errors = action.payload;
    });
  },
});

export const {resetPlaneErrors} = onePlaneSlice.actions
export default onePlaneSlice.reducer;
