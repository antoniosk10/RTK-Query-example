import React from 'react';
import './App.css';
import {useAddProductMutation, useGetProductQuery, useGetProductsQuery} from "./services/productApi";
import {PRODUCT_MOCK} from "./constants/product";

function App() {
    const {data, error, isFetching, isLoading, isSuccess} = useGetProductsQuery()
    const [addProduct] = useAddProductMutation()

    const handleAddProduct = () => {
        addProduct(PRODUCT_MOCK)
    }
    return (
        <div className="App">
            {isLoading && <p>Loading</p>}
            {isFetching && <p>Fetching</p>}
            {error && <p>error</p>}
            <ul>
                {isSuccess && data.products.map((product) =>
                <>
                    <li key={product.id}>{product.title}</li>
                    <ProductDetail id={product.id}/>
                </>
                )}
            </ul>
            <hr/>
            <button onClick={handleAddProduct}>Add product</button>
        </div>
    );
}

function ProductDetail({id}:{id:string}) {
    const {data} = useGetProductQuery(id)

    return (
        <div>
            {JSON.stringify(data, undefined, 2)}
        </div>
    );
}


export default App;
