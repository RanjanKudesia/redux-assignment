import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";

function Cart() {

  const products = useSelector((state) => {
    return state.cart
  })

  return (
    <>
      <h3>Cart</h3>
      <div>
        <ul>
          {
            products.map((item) => {
              return (
                <>
                  <li>
                    <CartItems details={item} />
                  </li>
                </>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default Cart;