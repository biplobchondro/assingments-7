
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Cart from './components/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer} from 'react-toastify';


const fetchIssues = async () => {
  const result = await fetch("/customer.json")
  return result.json();
}

function App() {
const fetchPromise = fetchIssues();
  return (
    <>
    <Navbar></Navbar>
    <Suspense fallback={<h1>Loading....</h1>}>
      <Cart fetchPromise={fetchPromise}></Cart>
    </Suspense>
    <Footer></Footer>
    </>
  )
}

export default App
