import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import styles from "../../styles/categoryStyles.module.css";

const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($query: String) {
    products(first: 50, query: $query) {
      edges {
        node {
          id
          title
          description
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

  return (
    <div className={styles.wrapper}>
        
      <div className={styles.container}>
      <h1 className={styles.h1}>{category === "all" ? "All Categories" : category}</h1>
        {products.map((product) => (
          <>
        
          <div className={styles.id} key={product.id}>
            <img
              src={product.images.edges[0].node.src}
              alt={product.title}
              className={styles.img}
            />
            <div className={styles.textContainer}>
            <h2>{product.title}</h2>
            {product.category === "coffee" && <p>{product.description}</p>}
          </div>
          </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
