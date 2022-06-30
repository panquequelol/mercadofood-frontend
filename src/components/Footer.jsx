const Footer = () => {
	return (
		<footer className='bg-zinc-800 bottom-0'>
			<div className='p-8 max-w-lg md:max-w-5xl mx-auto text-center text-lg'>
				<p>
					Coded with 💖 by{' '}
					<a
						className='text-red-500 italic hover:underline hover:decoration-2'
						href='https://www.linkedin.com/in/renecaceresdeveloper/'
						target='_blank'
						rel='noopener noreferrer'
					>
						René Cáceres
					</a>
				</p>
				<p>
					<a
						className='text-red-500 italic hover:underline hover:decoration-2'
						href='https://github.com/caceresrene'
						target='_blank'
						rel='noopener noreferrer'
					>
						GitHub Repository
					</a>
				</p>
			</div>
		</footer>
	);
};

export default Footer;
