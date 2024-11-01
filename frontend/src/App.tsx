import './App.css'
import { getUser, useAppDispatch, useAppSelector } from './store';
import { useState } from 'react';

function BirthdayView({userId}: { userId: number }) {

	const [checked, setChecked] = useState(false);
	const dispatch = useAppDispatch();
	const user = useAppSelector((state) => state.session.user);

	if (!checked) {
		setChecked(true);

		dispatch(getUser(userId));
	}

	if (user) {
		return <h1>Birthday: {user.birthday.toDateString()}</h1>
	}

	return <h1>Loading...</h1>
	

}


function App() {

  return <BirthdayView userId={1} />
}

export default App
