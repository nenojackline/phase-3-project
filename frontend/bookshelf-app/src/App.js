import "./App.css";
import { Routes, Route } from "react-router-dom";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import AddBook from "./components/AddBook";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booklist" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/addbook" element={<AddBook />} />
      </Routes>
    
    </div>
  );
}

export default App;