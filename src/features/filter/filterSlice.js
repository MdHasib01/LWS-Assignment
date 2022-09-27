const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  tags: [],
  search: "",
  author: null,
  currentPage:1
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    paginateAction: (state, action) => {
      state.currentPage = action.payload
  },
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
      state.currentPage = 1
    },
    tagRemoved: (state, action) => {
      const indexToRemove = state.tags.indexOf(action.payload);

      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
      state.currentPage = 1
    },
    searched: (state, action) => {
      state.search = action.payload;
      state.currentPage = 1
    },
    resetFilter: (state) => {
      state.tags = [];
      state.search = "";
      state.author = null;
      state.currentPage = 1
    },
    resetTags: (state) => {
      state.tags = [];
      state.search = "";
    },
    authorFilter: (state, action) => {
      state.author = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched, resetFilter,paginateAction, resetTags, authorFilter } =
  filterSlice.actions;
