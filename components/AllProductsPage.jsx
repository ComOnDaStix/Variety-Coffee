import { useState, useEffect } from "react";

const AllProductsPage = ({ category }) => {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      const fetchProducts = async () => {
        const fetchedProducts = await getProducts(category);
        setProducts(fetchedProducts);
      };
  
      fetchProducts();
    }, [category]);

  return (
    <div>
      {products.map(({ node }) => (
        <div key={node.id}>
          <h3>{node.title}</h3>
          <img src={node.images.edges[0]?.node.transformedSrc} alt={node.title} />
          <p>Price: ${node.priceRange.minVariantPrice.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default AllProductsPage;