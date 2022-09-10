import React, { useState, useEffect } from "react";
import "../App";
import axios from "axios";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9292/books${id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);



  return (
    <div className="book-details">
      <div className="book-image">
        <h2>{book?.title}</h2>
        <img src={book?.image_url} alt="#" />
      </div>
      <div className="book-description">
        <h2>Description</h2>
        <p>{book?.description}</p>
        <h2>Author</h2>
        <p>{book?.author}</p>
        <h2>Category</h2>
        <p>{book?.category}</p>
      </div>
    </div>
               
);
};
  

export default BookDetails;