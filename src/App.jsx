import { Route, Routes } from "react-router-dom";
import Deatels from "./Components/Deatels";
import Home from "./Components/Home";

function App() {
  return (
    <main className=" ">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Deatels/:id" element={<Deatels />}></Route>
      </Routes>
    </main>
  );
}

export default App;
