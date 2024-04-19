import React, { useState } from "react";
import db from "./firebase";

const Pagination = ({ pageSize, data, setData, fetchFirst }) => {
  const [currentPage, setcurrentPage] = useState(1);

  //fist
  const firstPage = async () => {
    setcurrentPage(1);
    await fetchFirst();
  };
  //prev
  const prevPage = async () => {
    if (currentPage > 1) {
      const first = data[0];
      const snapshot = await db
        .collection("gulAhmedData")
        .orderBy("productID")
        .endBefore(first.data.productID)
        .limitToLast(pageSize)
        .get();
      const temp = snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }));
      setData(temp);
      setcurrentPage(currentPage - 1);
      console.log(data);
    }
  };
  //next
  const nextPage = async () => {
    const last = data[data.length - 1];
    const snapshot = await db
      .collection("gulAhmedData")
      .orderBy("productID")
      .startAfter(last.data.productID)
      .limit(pageSize)
      .get();
    const temp = snapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    setData(temp);
    setcurrentPage(currentPage + 1);
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center mt-4">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="px-4 py-2 text-white bg-blue-600 mr-2 rounded disabled:bg-gray-400"
      >
        Prev
      </button>
      <button
        className={`${
          currentPage === 1 ? "hidden" : "block"
        } px-2 py-2 text-blue-700 bg-blue-100 rounded-l `}
        onClick={firstPage}
      >
        1 . .
      </button>
      <span className="px-4 py-2 text-blue-700 bg-blue-200 border border-blue-500">
        {currentPage}
      </span>
      <button
        className="px-4 py-2 text-blue-700 bg-blue-100 mr-2 rounded-r"
        onClick={nextPage}
      >
        {currentPage + 1}
      </button>
      <button
        onClick={nextPage}
        className="px-4 py-2 text-white bg-blue-600 ml-2 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
