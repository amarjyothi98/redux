import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        name: "amar",
        email: "initial@gmail.com",
    }, 
    reducers: {
        update: (state, action) => {
            //action.payload = {name, email} 
            state.name = action.payload.name;
            state.anything = action.payload.anything;
        }
    }
})

export const { update } = userSlice.actions;
export default userSlice.reducer;