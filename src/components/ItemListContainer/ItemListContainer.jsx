import { useState, useEffect } from "react";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams();

  useEffect(() => {
    const asyncFunc = getProducts;

    asyncFunc()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const catFilter = products.filter((prod) => prod.category === categoryId);
  console.log(products);
  return (
    <div>
      <div>
        <h1>{greeting}</h1>
        <div>
          {categoryId ? (
            <ItemList products={catFilter} />
          ) : (
            <ItemList products={products} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
