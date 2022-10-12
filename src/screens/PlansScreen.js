import React, { useEffect, useState } from "react";
import db from "../firebase";
import "./PlansScreen.css";

const data = [
  {
    id: 1,
    title: "Premium",
    description: "4K + HDR",
  },
  {
    id: 2,
    title: "Premium",
    description: "4K + HDR",
  },
  {
    id: 3,
    title: "Premium",
    description: "4K + HDR",
  },
];
function PlansScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    db.collection("products")
      .where("active", "===", true)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach(async (productDoc) => {
          products[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(products);
      });
  }, []);

  console.log(products);

  return (
    <div className="plansScreen plansScreen__container">
      <p>Renewal Date: 23-01-2023</p>
      {data.map(({ id, title, description }) => {
        return (
          <>
            <div className="plansScreen__plan">
              <div className="plansScreen__info">
                <h5 key={id}>{title}</h5>
                <h6>{description}</h6>
              </div>
              <button>Subscribe</button>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default PlansScreen;
