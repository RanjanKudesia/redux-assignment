import getFullData from "../data/FetchingData/fetchData";
import { useState, useEffect } from 'react';
import MediaCard from './ItemCard';


function Products() {

    const [state, setState] = useState(null);

    useEffect(() => {
        getFullData().then((response) => {
            // console.log(response);
            setState(response);
        })
    }, [state])

    if (!state) {
        return <h1>Loading...</h1>
    }

    return (
        <>
            <ul>
                {
                    state.map((x) => {
                        return (
                            <>
                                <li key={x.id}>
                                    <MediaCard details={x} />
                                </li>
                            </>
                        )
                    })
                }
            </ul>
        </>
    );
}

export default Products;
