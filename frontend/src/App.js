import './App.css';
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';
import DeleteConfirmation from './components/DeleteConfirmation';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header />
    <List />
    <Form />
    <DeleteConfirmation />
    <Pagination />
    <Footer />
    </>
  )
}

export default App;
