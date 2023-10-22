import Home from "./components/Home";
import Shop from "./components/shop/Shop";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Details from "./components/shop/Details";
import Counter from './components/counter/Counter'
import TodoList from './views/todo/Todo';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:name/:id" element={<Details />} />
          <Route path="/counter" element={<Counter />} />
          <Route element={ <TodoList />} path="/todo" />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
