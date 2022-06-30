import IconCart from './icon/Cart';
import IconUser from './icon/User';
import { useLogin } from '../context/loginContext';

import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Nav = () => {
	let navigate = useNavigate();
	const {userNameContext} = useLogin()
	const userName = Cookies.get('username');

	return (
		<nav className='p-4 flex flex-col bg-zinc-800 items-center gap-2 sticky top-0 z-50 g-clip-padding backdrop-filter bg-opacity-95'>
			<div className='flex justify-between w-full max-w-5xl mx-auto items-center'>
				<button
					className='text-red-600 hover:bg-zinc-900 rounded px-2 py-1'
					onClick={() => navigate('/signin')}
				>
					<IconUser />
					{userNameContext ? userNameContext: 'Not Sign In'}
				</button>
				<h1
					className='text-red-600 text-2xl font-bold p-2 hover:cursor-pointer hover:text-red-500'
					onClick={() => navigate('/')}
				>
					MercadoFood
				</h1>
				<button className='text-red-600 hover:bg-zinc-900 px-3 rounded'>
					<p className='text-xs font-bold'>03</p>
					<IconCart />
				</button>
			</div>
			<div className='w-full max-w-5xl mx-auto'>
				<input
					className='w-full outline-0 bg-zinc-900 text-zinc-100 rounded p-2 focus:ring-2 focus:ring-red-600'
					type='text'
					placeholder='Search for products'
				/>
			</div>
		</nav>
	);
};

export default Nav;
