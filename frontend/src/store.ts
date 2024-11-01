import { configureStore, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { GetUser, Birthdays } from "./api.ts";
import { useDispatch, useSelector } from "react-redux";

// begin could be its own file
type User = { id: number; name: string; birthday: Date };

type UserState = { user: User | null };

const initialState: UserState = { user: null };

const userSlice = createSlice({
	name: "session",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload;
		},
	},
});

function mergeToUser(user: GetUser, bday: Birthdays): User {
	const birthday = new Date(bday.birthday);
	return {
		id: user.id,
		name: user.name,
		birthday,
	};
}

export const getUser = (id: number) => async (dispatch: AppDispatch) => {
	const users = await fetch(`/api/users/${id}`);

	const userData: GetUser = await users.json();

	const birthdays = await fetch(`/api/birthdays/${id}`);

	const birthdayData: Birthdays = await birthdays.json();

	dispatch(userSlice.actions.setUser(mergeToUser(userData, birthdayData)));
};

// end could be its own file

export const store = configureStore({
	reducer: {
		session: userSlice.reducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
