import "./App.css";
import { BrowserRouter , Route, Routes } from "react-router-dom"; 
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

//
// return (
//   <>
//   <Header />
//   <List />
//   <Form />
//   <DeleteConfirmation />
//   <Pagination />
//   <Footer />
//   </>
// )
