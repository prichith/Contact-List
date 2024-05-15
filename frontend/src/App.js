import "./App.css";
import { BrowserRouter , Route, Routes } from "react-router-dom"; 
import {useDispatch } from "react-redux";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactList";

function App() {
//  const {contactList} = useSelector((state => state.list));

  // const dispatch = useDispatch();
  // useEffect(() => {
  // dispatch(fetchContacts());
  // }, [])
  
  
  return (
    <BrowserRouter>
      <Header />
      {/* <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form/:id" element={<Form />} />
      </Routes> */}
      <Dashboard />
      <Footer />
    </BrowserRouter>
  );
}

export default App;