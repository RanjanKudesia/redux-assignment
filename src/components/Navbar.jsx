import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

    const items = useSelector((state)=>{
        return state.cart;
    });

    return (
        <>
            <h1>Redux Store</h1>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/cart'>Cart</Link>
            </div>
            <span>
                Cart Items: {items.length}
            </span>
        </>
    )
}

export default Navbar
