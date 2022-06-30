import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Footer from './components/Footer';
import Category from './pages/Category';
import Product from './pages/Product';
import Logout from './pages/Logout';
import UserDashboard from './pages/UserDashboard';

import LoginContext from './context/LoginContext';

export function App() {
	return (
		<LoginContext>
			<BrowserRouter>
				<Nav />
				<main className='max-w-lg md:max-w-5xl mx-auto'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/signin' element={<SignIn />} />
						<Route path='/user' element={<UserDashboard />} />
						<Route path='/logout' element={<Logout />} />
						{/* <Route path='/cart' element={<Route2 />} /> */}
						<Route path='/:category_param' element={<Category />} />
						<Route path='/:category_param/:id_param' element={<Product />} />
					</Routes>
				</main>
				{/* <Footer /> */}
			</BrowserRouter>
		</LoginContext>
	);
}
