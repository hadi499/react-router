import React, { useState, useEffect } from "react";

export default function ItemDetail({ match }) {
  useEffect(() => {
    // other code
    fetchItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [item, setItem] = useState({
    images: {},
  });

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await fetchItem.json();
    setItem(item.data.item);
    // console.log(item.data.item.name);
  };

  return (
    <div>
      <h2 className="itemName">Nama: {item.name}</h2>
      <p>Description: {item.description}</p>
      <p>Type: {item.type}</p>
      <p>Series: {item.series}</p>
      <img src={item.images.background} alt="" />
    </div>
  );
}
