import { useEffect, useState } from 'preact/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import ProductCart from '../components/ProductCart';

const Category = () => {
	let navigate = useNavigate();
	const { category_param } = useParams();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get(
				`https://mercadofood-backend.onrender.com/api/product/category/${category_param}`
			);
			setProducts(data);
		})();
	}, []);
	return (
		<section className='p-4'>
			<div className='grid grid-cols-4 gap-4 place-items-end'>
				{!(products.length === 0) ? (
					products.map((p, index) => (
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
		</section>
	);
};

export default Category;
