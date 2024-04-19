import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import db from "./firebase";

export default function Home() {
  const [data, setData] = useState([]);

  const fetchFirst = async () => {
    // first querySnapshot
    const snapshot = await db
      .collection("gulAhmedData")
      .orderBy("productID")
      .limit(10)
      .get();

    setData(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
  };

  useEffect(() => {
    fetchFirst();
  }, []);

  return (
    <div>
      <Pagination
        pageSize={10}
        data={data}
        setData={setData}
        fetchFirst={fetchFirst}
      />
      <div className="grid grid-cols-4 gap-7 p-10">
        {data.map((item) => (
          <Card
            name={item.data.name}
            imageUrl={item.data.imageUrl}
            oldPrice={item.data.oldPrice}
            newPrice={item.data.newPrice}
            url={item.data.url}
          />
        ))}
      </div>
    </div>
  );
}
