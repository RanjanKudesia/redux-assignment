import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import { Provider } from "react-redux";
import store from './app/store/store';
import { Container } from '@material-ui/core';



function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Container maxWidth='lg'>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;