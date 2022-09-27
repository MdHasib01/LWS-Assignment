import { putLikeUnlike } from "./likeUnlikeApi";
import { getVideo } from "./videoAPI";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = {
    video: {},
    isLoading: false,
    isError: false,
    error: "",
};
// Async Thunk for Likes and Unlikes
export const likeUnlikeAsync = createAsyncThunk("video/likeUnlike", async ({ type, id, count }) => {
    const video = await putLikeUnlike(type, id, count)
    return video;
})
// async thunk
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
    const video = await getVideo(id);
    return video;
});

const videoSlice = createSlice({
    name: "video",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchVideo.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(fetchVideo.fulfilled, (state, action) => {
                state.isLoading = false;
                state.video = action.payload;
            })
            .addCase(fetchVideo.rejected, (state, action) => {
                state.isLoading = false;
                state.video = {};
                state.isError = true;
                state.error = action.error?.message;
            });
            // Like Unlike Builder
        builder
        .addCase(likeUnlikeAsync.fulfilled, (state, action) => {
            state.isLoading = false;
            state.video.likes = action.payload.likes;
            state.video.unlikes = action.payload.unlikes;
        })
    },
});

export default videoSlice.reducer;
