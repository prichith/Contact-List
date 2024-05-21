import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = (message) => {
  toast(message, {
    style: {
      backgroundColor: "green",
      color: "#fff",
      borderRadius: "12px",
    },
    progressStyle: {
      background: "#FFF",
    },
  });
};

function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Dashboard />
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
