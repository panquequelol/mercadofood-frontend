const salePrice = (price, salePercentage) => {
	return price - (price * salePercentage) / 100;
};
export default salePrice;
