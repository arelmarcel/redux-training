import { createSlice } from "@reduxjs/toolkit";

let lastId = 0;
const initialState = [];

const slice = createSlice({
    name: "users",
    initialState: initialState,
    reducers: {
        addNewUser: (users, action) => {
            users.push({
                id: ++lastId,
                userName: action.payload.userName,
                balance: action.payload.balance,
            });
        },
    }
});

export const { addNewUser } = slice.actions;
export default slice.reducer;