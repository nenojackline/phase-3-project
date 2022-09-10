import React from 'react'
import { useState } from 'react'



const AddBook = () =>{
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image_url, setImage_url] = useState("");
  const [publisher, setPublisher] = useState("");
  const [author_id, setAuthor_id] = useState('');
  const [category_id, setCategory_id] = useState('');
  
  //console.log(genres.split(" "));
  const checkValidInputs = (title, description, image_url, publisher,  author_id, category_id) => {
    //ensure no empty values submited to the db
    if (title !== "" && description !== "" && image_url !== "" && publisher !== "" && author_id !== "" && category_id !== ""){
      console.log("All inputs available")
      return true;
    }
  }
  //submit handler for created movies
  const handleSubmit = (e) => {
    e.preventDefault();

    const AddBook = {
      title: title,
      description: description,
      image: image_url,
      publisher: publisher,
      category_id: category_id,
      author_id: author_id,
     
    }

    //validate inputs
    const isValid = checkValidInputs(title, description,image_url, publisher,  author_id, category_id );

    if (!isValid) {
      console.log("Ensure all inputs are filled");
      return;
    }

    fetch(`http://localhost:9292/books`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(AddBook),
      })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))

    //clear inputs after submiting
    setTitle("");
    setDescription("");
    setImage_url("")
    setPublisher("");
    setAuthor_id(" ");
    setCategory_id("");
    
  }



  return (
    <div className="new-book">
        <div className='sideA'>
            <img src={require("../images/image1.jpg")} alt="image1"/>
            <div className="overlay"></div>
        </div>

        <div className="sideB">
            <h3>Create a new book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Description</label>
                <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>image_url</label>
                <input type="text" placeholder="image_url" value={image_url} onChange={(e) => setImage_url(e.target.value)} />
                <label>publisher</label>
                <input type="text" placeholder="publisher" value={publisher} onChange={(e) => setPublisher(e.target.value)} />
                <label>Authors</label>
                <input type="text" placeholder="author_id" value={author_id} onChange={(e) => setAuthor_id(e.target.value)} />
                <label>Category</label>
                <input type="text" placeholder="category_id" value={category_id} onChange={(e) => setCategory_id(e.target.value)} />
                <button>Create</button>
            </form>
        </div>

    </div>
  )
}
export default AddBook;