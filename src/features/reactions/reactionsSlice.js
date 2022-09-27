import { updatedReaction } from "../video/videoAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
  likes: 0,
  unlikes: 0,
};

export const fetchUpdateReactions = createAsyncThunk(
  "reactions/fetchUpdateReactions",
  async (props) => {
    const video = await updatedReaction(
      props.video.id,
      
      props.likes,
      props.unlikes
    );
    return video;
  }
);
const reactionsSlice = createSlice({
  name: "reactions",
  initialState,
  reducers: {
    likeAdd: (state, action) => {
      state.likes = action.payload + 1;
    },
    unlikeAdd: (state, action) => {
      state.unlikes = action.payload + 1;
    },
  },
});

export default reactionsSlice.reducer;
export const { likeAdd, unlikeAdd } = reactionsSlice.actions;
