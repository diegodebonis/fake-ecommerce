import Head from "next/head";
import { Categories, ProductList } from "../components";
import { getCategories, getProducts } from "../services";

export default function Home({ products, categories }) {
  console.log(products, categories);
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <Categories />
          </div>
        </div>
        <div className="lg:col-span-8 col-span-1">
          <ProductList />
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = (await getProducts()) || [];
  const categories = (await getCategories()) || [];
  return {
    props: {
      products,
      categories,
    },
  };
}
