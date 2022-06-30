import { useEffect, useState } from 'preact/hooks';
import { useLogin } from '../context/loginContext';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import Cookies from 'js-cookie';

const SignIn = () => {
	let navigate = useNavigate();

	const {
		userNameContext,
		setUserNameContext,
		userTokenContext,
		setUserTokenContext,
	} = useLogin();
	const backendURL = import.meta.env.VITE_BACKEND_URL;

	const [userLogin, setUserLogin] = useState({
		emailLogin: '',
		passwordLogin: '',
	});

	const [userRegister, setUserRegister] = useState({
		nameRegister: '',
		emailRegister: '',
		passwordRegister: '',
	});

	const [registerMessage, setRegisterMessage] = useState(undefined);
	const [loginMessage, setLoginMessage] = useState(undefined);

	const handleChangeLogin = (e) => {
		setUserLogin((state) => ({
			...state,
			[e.target.name]: e.target.value,
		}));
	};

	const handleChangeRegister = (e) => {
		setUserRegister((state) => ({
			...state,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmitRegister = (e) => {
		e.preventDefault();
		(async () => {
			try {
				const { data } = await axios.post(`${backendURL}/api/user/register`, {
					name: userRegister.nameRegister,
					email: userRegister.emailRegister,
					password: userRegister.passwordRegister,
				});
				setRegisterMessage(data.message);
				setUserNameContext(Cookies.get('username'));
				setUserTokenContext(Cookies.get('usertoken'));
				return navigate('/user');
			} catch (error) {
				console.log(error);
				setRegisterMessage(error.response.data.message || error.message);
			}
		})();
	};

	const handleSubmitLogin = (e) => {
		e.preventDefault();
		(async () => {
			try {
				const { data } = await axios.post(
					`${backendURL}/api/user/login`,
					{ email: userLogin.emailLogin, password: userLogin.passwordLogin },
					{ withCredentials: true }
				);
				setLoginMessage(data.message);
				setUserNameContext(Cookies.get('username'));
				setUserTokenContext(Cookies.get('usertoken'));
				return navigate('/user');
			} catch (error) {
				setLoginMessage(error.response.data.message || error);
			}
		})();
	};

	useEffect(() => {
		if (Cookies.get('username') && Cookies.get('usertoken')) {
			setUserNameContext(Cookies.get('username'));
			setUserTokenContext(Cookies.get('usertoken'));
		}
		if (userNameContext) {
			return navigate('/user');
		}
	}, []);

	return (
		<div>
			<section className='grid gap-8 md:grid-cols-2 m-8'>
				<form
					className='flex flex-col gap-4 bg-zinc-800 p-4 rounded'
					onSubmit={handleSubmitLogin}
				>
					{loginMessage && (
						<p className='text-center font-semibold text-red-600'>{loginMessage}</p>
					)}
					<h3 className='font-bold text-lg'>Log in to your account</h3>
					<div className='flex flex-col gap-1'>
						<label htmlFor='emailLogin'>Email</label>
						<input
							className='outline-0 bg-zinc-900 text-zinc-100 rounded p-2 focus:ring-2 focus:ring-red-600'
							type='email'
							name='emailLogin'
							id='emailLogin'
							onInput={handleChangeLogin}
							value={userLogin.emailLogin}
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor='passwordLogin'>Password</label>
						<input
							className='outline-0 bg-zinc-900 text-zinc-100 rounded p-2 focus:ring-2 focus:ring-red-600'
							type='password'
							name='passwordLogin'
							id='passwordLogin'
							onInput={handleChangeLogin}
							value={userLogin.passwordLogin}
						/>
					</div>
					<input
						type='submit'
						value='Login'
						className='outline-0 bg-red-600 text-zinc-100 rounded p-2 hover:bg-red-500  shadow border-red-400 border transition-all duration-400 cursor-pointer'
					/>
				</form>

				<form
					onSubmit={handleSubmitRegister}
					className='flex flex-col gap-4 bg-zinc-800 p-4 rounded'
				>
					{registerMessage && (
						<p className='text-center font-semibold text-red-600'>
							{registerMessage}
						</p>
					)}
					<h3 className='font-bold text-lg'>Create your account</h3>
					<div className='flex flex-col gap-1'>
						<label htmlFor='nameRegister'>Name</label>
						<input
							className='outline-0 bg-zinc-900 text-zinc-100 rounded p-2 focus:ring-2 focus:ring-red-600'
							type='text'
							name='nameRegister'
							id='nameRegister'
							value={userRegister.nameRegister}
							onInput={handleChangeRegister}
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor='emailRegister'>Email</label>
						<input
							className='outline-0 bg-zinc-900 text-zinc-100 rounded p-2 focus:ring-2 focus:ring-red-600'
							type='text'
							name='emailRegister'
							id='emailRegister'
							value={userRegister.emailRegister}
							onInput={handleChangeRegister}
						/>
					</div>
					<div className='flex flex-col gap-1'>
						<label htmlFor='passwordRegister'>Password</label>
						<input
							className='outline-0 bg-zinc-900 text-zinc-100 rounded p-2 focus:ring-2 focus:ring-red-600'
							type='password'
							name='passwordRegister'
							id='passwordRegister'
							value={userRegister.passwordRegister}
							onInput={handleChangeRegister}
						/>
					</div>
					<input
						type='submit'
						value='Register'
						className='outline-0 bg-red-600 text-zinc-100 rounded p-2 hover:bg-red-500  shadow border-red-400 border transition-all duration-400 cursor-pointer'
					/>
				</form>
			</section>
		</div>
	);
};

export default SignIn;
