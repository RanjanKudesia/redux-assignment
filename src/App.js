import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import { Provider } from "react-redux";
import store from './app/store/store';


function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;