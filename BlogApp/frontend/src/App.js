import { BrowserRouter, Route, Routes } from "react-router-dom";
import NAVBAR from "./Components/NavBar";
import LOGIN from "./Pages/Login";
import SIGNUP from "./Pages/SignUp";
import HOME from "./Pages/Home";
import CreateBlog from "./Pages/CreateBlog";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NAVBAR />
        <Routes>
          <Route path="/login" element={<LOGIN/>}></Route>
          <Route path="/signup" element={<SIGNUP></SIGNUP>}></Route>
          <Route path="/" element={<HOME></HOME>}></Route>
          <Route path="/create-blog" element={<CreateBlog></CreateBlog>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
