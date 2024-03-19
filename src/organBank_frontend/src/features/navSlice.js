import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'navSlice',
    initialState: {
        page: 'home'
    },
    reducers: {
        changePage(state, action) {
            state.page = action.payload.page;
        }
    }
})

export const { changePage } = navSlice.actions
export default navSlice.reducer