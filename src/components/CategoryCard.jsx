import { useNavigate } from 'react-router-dom';

const CategoryCard = ({ title, image, route }) => {
	let navigate = useNavigate();

	return (
		<a className='group hover:cursor-pointer' onClick={() => navigate(`/${route}`)}>
			<img
				src={image}
				alt={`${title} category image`}
				className='object-cover aspect-square rounded-lg group-hover:brightness-50 transition-all duration-300'
			/>
			<h3 className='font-semibold group-hover:text-zinc-500 transition-all duration-300'>
				{title}
			</h3>
		</a>
	);
};

export default CategoryCard;
