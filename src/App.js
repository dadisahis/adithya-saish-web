import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
y      </Routes>
    </BrowserRouter>
  );
}

export default App;
