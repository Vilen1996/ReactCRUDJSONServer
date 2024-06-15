import { useState, useEffect } from "react";
import "./App.css";
import { ProductList } from "./components/ProductList";
import { Basket } from "./components/Basket";

function App() {
  const [basket, setBasket] = useState([]);
  const [products, setProduct] = useState([]);
  const [total, setTotal] = useState(0);

  const moveToCart = (id) => {
    let found = products.find((x) => x.id == id);

    setBasket((basket) => {
      const itemInBasket = basket.find((item) => item.id === id);

      if (itemInBasket) {
        return basket.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        );
      } else {
        return [...basket, { ...found, count: 1 }];
      }
    });
  };

  const decreaseCount = (id) => {
    setBasket((basket) => {
      const itemInBasket = basket.find((item) => item.id === id);

      if (itemInBasket) {
        return basket.map((item) =>
          item.id === id
            ? {
                ...item,
                count: item.count == 1 ? item.count : item.count - 1,
              }
            : item
        );
      }
    });
  };

  const increaseCount = (id) => {
    setBasket((basket) => {
      const itemInBasket = basket.find((item) => item.id === id);

      if (itemInBasket) {
        return basket.map((item) =>
          item.id === id
            ? {
                ...item,
                count: item.count + 1,
              }
            : item
        );
      }
    });
  };

  const deleteBasketItem = (id) => {
    setBasket((basket) => {
      const itemInBasket = basket.find((item) => item.id === id);

      if (itemInBasket) {
        return basket.filter((item) => item.id !== id);
      }
    });
  };

  useEffect(() => {
    fetch("http://localhost:3004/books")
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
      });
    setTotal(basket.reduce((a, b) => a + b.price * b.count, 0));
  }, [basket]);

  return (
    <>
      <div className="row">
        <ProductList items={products} onMove={moveToCart} />
        <Basket
          items={basket}
          decreaseCount={decreaseCount}
          increaseCount={increaseCount}
          deleteBasketItem={deleteBasketItem}
          total={total}
        />
      </div>
    </>
  );
}

export default App;
