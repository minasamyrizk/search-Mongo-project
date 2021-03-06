import Head from "next/head";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import * as Realm from "realm-web";
import Category from "../../components/Category";
import Container from "../../components/Container";

import Header from "../../components/Header";

import Products from "../../components/Products";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { query } = useRouter();

  useEffect(async () => {
    if (query.term) {
      // add your Realm App Id to the .env.local file
      const REALM_APP_ID = process.env.NEXT_PUBLIC_REALM_APP_ID;
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const searchProducts = await user.functions.searchProducts(query.term);
        setProducts(() => searchProducts);
      } catch (error) {
        console.error(error);
      }
    }
  }, [query]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Intelistyle Mongo Search</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white w-full min-h-screen">
        <Header />
        <Container>
          <Category
            category="Products Found"
            categoryCount={`${products.length} Products`}
          />
          <Products products={products} />
          
        </Container>
        
      </div>
    </div>
  );
}
