import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import Layout from "./components/Layout.jsx";
import MovieDetails from "./components/Detail.jsx";
import PlayMovie from "./components/Watch.jsx";
import Login from "./components/Login.jsx";
import SearchInput from "./components/Input.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/detail/:id" element={<MovieDetails />} />
          <Route path="/watch/:id" element={<PlayMovie />} />
          <Route path="/login" element={<Login />} />
          <Route path="/search" element={<SearchInput />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
