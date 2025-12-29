import { useEffect } from 'react';
import Categories from '../Layouts/Categories';
import Banner from './Banner/Banner';
import DealSlider from './DealSlider/DealSlider';
import ProductSlider from './ProductSlider/ProductSlider';
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, getSliderProducts } from '../../actions/productAction';
import { useSnackbar } from 'notistack';
import MetaData from '../Layouts/MetaData';
import BackdropLoader from '../Layouts/BackdropLoader';

const Home = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { error, loading, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: 'error' });
      dispatch(clearErrors());
    }
    dispatch(getSliderProducts());
  }, [dispatch, error, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Online Shopping Site | Best Offers!" />
      <Categories />
      {loading && <BackdropLoader />}
      {!loading && (!products || products.length === 0) && (
        <div className="text-center mt-10 text-gray-500">
          Sorry, no products found!
        </div>
      )}
      {!loading && products && products.length > 0 && (
        <main className="flex flex-col gap-3 px-2 mt-16 sm:mt-2">
          <Banner />
          <DealSlider title="Discounts for You" />
          <ProductSlider title="Suggested for You" tagline="Based on Your Activity" />
          <DealSlider title="Top Brands, Best Price" />
          <ProductSlider title="You May Also Like..." tagline="Based on Your Interest" />
          <DealSlider title="Top Offers On" />
          <ProductSlider title="Don't Miss These!" tagline="Inspired by your order" />
        </main>
      )}
    </>
  );
};

export default Home;