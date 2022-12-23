import Products from "../components/Products"

function Home() {
    return (
        <>
            <h1>Welcome to the redux-toolkit store</h1>

            <section>
                <h3>Products</h3>
                <Products/>
            </section>
        </>
    )
}

export default Home