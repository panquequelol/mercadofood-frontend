import calcSale from '../utils/salePrice';

const ProductCart = ({ name, image, price, sale, packageSize }) => {
	return (
		<div className='space-y-2'>
			<p className='text-center'>{name}</p>
			<img className='rounded-md' src={image} alt={`${name} image`} />
			<div>
				<p className='text-center'>
					{sale ? (
						<>
							<span className='text-red-500'>$ {calcSale(price, sale)}</span>{' '}
							<span className='line-through text-zinc-400'>$ {price}</span>
						</>
					) : (
						<p>$ {price}</p>
					)}
				</p>
				<p className='text-xs text-center text-zinc-400'>{packageSize}</p>
			</div>
			<button className='p-2 rounded w-full bg-zinc-800 shadow border-zinc-700 border hover:bg-red-600 hover:border-red-400 transition-all duration-400 text-sm md:text-base'>
				Add to Cart
			</button>
		</div>
	);
};

export default ProductCart;
