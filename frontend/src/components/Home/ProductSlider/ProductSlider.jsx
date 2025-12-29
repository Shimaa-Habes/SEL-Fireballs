import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import Product from './Product';
import { settings } from '../DealSlider/DealSlider';
import { getRandomProducts } from '../../../utils/functions';

const ProductSlider = ({ title, tagline }) => {
  const { loading, products } = useSelector((state) => state.products);

  if (loading) return null;
  if (!products || products.length === 0)
    return <p className="text-center my-4 text-gray-500">No products available.</p>;

  return (
    <section className="bg-white w-full shadow overflow-hidden">
      <div className="flex px-6 py-4 justify-between items-center">
        <div className="title flex flex-col gap-0.5">
          <h1 className="text-xl font-medium">{title}</h1>
          <p className="text-sm text-gray-400">{tagline}</p>
        </div>
        <Link
          to="/products"
          className="bg-primary-blue text-xs font-medium text-white px-5 py-2.5 rounded-sm shadow-lg uppercase"
        >
          View All
        </Link>
      </div>
      <hr />
      <Slider {...settings} className="flex items-center justify-between p-1">
        {getRandomProducts(products, 12).map((product) => (
          <Product {...product} key={product._id} />
        ))}
      </Slider>
    </section>
  );
};

export default ProductSlider;