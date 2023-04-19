import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { useContext } from "react";
import styles from "../../styles/categoryStyles.module.css";
import Hero2 from "@/components/Hero2";
import ProductsNavBar from "@/components/ProductsNavBar";
import Button from "@/components/Button";

import { CartContext } from "../../context/CartContext"


const GET_PRODUCTS_BY_CATEGORY = gql`
query GetProductsByCategory($query: String) {
  products(first: 100, query: $query) {
    edges {
      node {
        id
        title
        description
        variants(first: 50) {
          edges {
            node {
              id
            }
          }
        }
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 1) {
          edges {
            node {
              src
            }
          }
        }
      }
    }
  }
}
`;

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  const query = category === "all" ? null : `tag:${category}`;

  const { loading, error, data } = useQuery(GET_PRODUCTS_BY_CATEGORY, {
    variables: { query },
    skip: !category,
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data?.products.edges.map((edge) => edge.node) || [];

  const { addItem } = useContext(CartContext);

  return (
    <>
  
      <Hero2 />
      <ProductsNavBar />
      <h1 className={styles.h1}>
        {category === "all" ? "All CATEGORIES" : category}
      </h1>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          {products.map((product) => {
            const priceInUSD = parseFloat(
              product.priceRange.minVariantPrice.amount
            ).toFixed(2);
            const variantId = product.variants.edges[0].node.id;

            return (
              <div key={product.id}>
                <div className={styles.id}>
                  <div className={styles.imgContainer}>
                    <img
                      src={product.images.edges[0].node.src}
                      alt={product.title}
                      className={styles.img}
                    />
                  </div>
                  <div className={styles.textContainer}>
                    <h2>{product.title}</h2>
                    {product.category === "coffee" && (
                      <p>{product.description}</p>
                    )}
                  </div>
                  <Button
  className={styles.btn}
  onClick={() =>
    addItem({
      id: product.id,
      title: product.title,
      price: priceInUSD,
      image: product.images.edges[0].node,
      variantId: variantId,
    })
  }
>
  {priceInUSD} • ADD TO BAG
</Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
