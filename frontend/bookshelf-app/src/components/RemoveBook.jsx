import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

function RemoveBook() {
  const { id } = useParams();
  const [books, setBooks] = useState([]);


  // fetch books from book db
  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setBooks(response);
      });
  }, []);

  // delete book
  const handleDelete = (book) => {
    console.log(book);
    const title = book.title
    const description = book.description
    const image_url = book.image_url

    axios.delete(`http://localhost:9292/carts/${id}`, {
      title,
      description,
      image_url
    }).then(()=> {
      alert("book removed from booklist")
    }).catch((error)=>{console.log(error)})
  }

  return (
    <div className="container-card">
      <h1>Books List</h1>
      {books.map((book) => {
        return (
          <div className="card-container" key={book.id}>
            <div className="Book-item">
              <img src={book.image_url} alt={book.title}></img>
              <div>
                <h2>{book.title}</h2>
                <h3>{book.description}</h3>
              </div>
              <button onClick={() => handleDelete(book)}>Remove book</button>
            </div>
            <br></br>
          </div>
        );
      })}
    </div>
  );
}
export default RemoveBook;