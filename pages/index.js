import data from '../utils/data';
import ProductItem from '../components/ProductItem';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout tilte="Home Page">
      <div className="grid grid-col-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {data.products.map((product) => (
          <ProductItem product={product} key={product.slug}></ProductItem>
        ))}
      </div>
    </Layout>
  );
}
