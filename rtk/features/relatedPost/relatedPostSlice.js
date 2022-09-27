const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// initial state
const initialState = {
  loading: false,
  posts: [],
  error: "",
};

// create async thunk
const fetchRelatedPosts = createAsyncThunk(
  "relatedPost/fetchRelatedPosts",
  async (title) => {
    const titles = title.split(" ");
    let newUrl = "https://jsonplaceholder.typicode.com/posts?";
    for (let i = 0; i < titles.length; i++) {
      if (i === titles.length - 1) {
        newUrl += "title_like=" + titles[i];
      } else {
        newUrl += "title_like=" + titles[i] + "&";
      }
    }
    const response = await fetch(newUrl);
    console.log("#New_URL: ", newUrl);
    const posts = await response.json();

    return posts;
  }
);

const relatedPostSlice = createSlice({
  name: "relatedPost",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRelatedPosts.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchRelatedPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.posts = action.payload;
    });

    builder.addCase(fetchRelatedPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.posts = [];
    });
  },
});

module.exports = relatedPostSlice.reducer;
module.exports.fetchRelatedPosts = fetchRelatedPosts;
