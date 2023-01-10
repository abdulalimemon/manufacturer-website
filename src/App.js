import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar/Navbar';
import PageRoute from './PageRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  
  return (
    <>
      <Navbar></Navbar>
      <PageRoute></PageRoute>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
