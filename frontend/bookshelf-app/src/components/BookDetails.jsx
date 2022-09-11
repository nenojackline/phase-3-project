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
        <h3>{book?.title}</h3>
        <img src={book?.image_url} alt="#" />
      </div>
      <div className="book-description">
        <h3>Description</h3>
        <p>{book?.description}</p>
        <h3>Author</h3>
        <p>{book?.author}</p>
        <h3>Category</h3>
        <p>{book?.category}</p>
      </div>
    </div>
               
);
};
  

export default BookDetails;