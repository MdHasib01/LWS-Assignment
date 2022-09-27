const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    status: "all",
    colors: [],
}

const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        colorChanged: (state, action) => {
            const { color, changeType } = action.payload;
            switch (changeType) {
                case "added":
                    state.colors.push(color)
                    break;

                case "removed":
                    state.colors = state.colors.filter((existingColor) => existingColor !== color)
                    break;

                default:
                    break;
            }
        },
        statusChanged: (state, action) => {
            state.status = action.payload;
        },
        clearFilters: (state, action) => {
            state.status = "all"
            state.colors = []
        }
    },
});

export default filterSlice.reducer;
export const { colorChanged, clearFilters, statusChanged } = filterSlice.actions;