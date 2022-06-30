import { useEffect, useState } from 'preact/hooks';
import axios from 'axios';
import CategoryCard from '../components/CategoryCard';
import ProductCart from '../components/ProductCart';

// category images
import fruitsandveggies from '../img/fruitsandveggies.jpg';
import beverages from '../img/beverages.jpg';
import snacks from '../img/snacks.jpg';
import meat from '../img/meat.jpg';
import sweets from '../img/sweets.jpg';
import dairy from '../img/dairy.jpg';
//

const Home = () => {
	const [productsOnSale, setProductsOnSale] = useState([]);
	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				'https://mercadofood-backend.onrender.com/api/product/sale'
			);
			const products = data.splice(0, 4);
			setProductsOnSale(products);
		})();
	}, []);

	return (
		<div className='p-4'>
			<h2 className='text-xl my-4 font-bold'>Products on Sale</h2>
			<div className='grid grid-cols-4 gap-4 place-items-center'>
			{!(productsOnSale.length === 0) ? (
					productsOnSale.map((p, index) => (
						<ProductCart
							key={index}
							name={p.name}
							price={p.price}
							sale={p.sale}
							packageSize={p.packageSize}
							image={p.image}
						/>
					))
				) : (
					<p className='col-span-4 place-self-center animate-spin text-5xl p-8'>🍅</p>
				)}
			</div>
			<h2 className='text-xl my-4 font-bold'>Browse by Category</h2>
			<section className='grid grid-cols-2 md:grid-cols-3 gap-4 pb-4 place-items-end'>
				<CategoryCard
					image={fruitsandveggies}
					title={'Fruits and Veggies'}
					route={'fruitsandveggies'}
				/>
				<CategoryCard image={beverages} title={'Beverages'} route={'beverages'} />
				<CategoryCard image={meat} title={'Meat'} route={'meat'} />
				<CategoryCard
					image={dairy}
					title={'Dairy and Eggs'}
					route={'dairyandeggs'}
				/>
				<CategoryCard image={sweets} title={'Sweets'} route={'sweets'} />
				<CategoryCard image={snacks} title={'Snacks'} route={'snacks'} />
			</section>
		</div>
	);
};

export default Home;
