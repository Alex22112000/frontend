import React, { useEffect, useState } from 'react';
import BasketPanel from '../../components/Elements/BasketPanel/BasketPanel';
import CatElement from '../../components/Elements/CatElement/CatElement';
import Button from "../../components/UI/Button/Button";
import CatalogService from '../../../model/services/catalogService';
import Chat from "../../components/Elements/Chat/Chat";
import { useNavigate } from 'react-router-dom';
import "./CatalogPage.css"

function CatalogPage(props) {
    const initialState = {
        cartProducts: [],
        products: []
    }
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            const products = await CatalogService.getCatalog()
            setState({
                ...state,
                products: products
            })
        };
        getData();
    }, [state])

    const addToCart = (product) => {
        setState((prev) => ({
            ...state,
            cartProducts: [...prev.cartProducts, product]
        }))
    }

    const addProduct = () => {
        navigate("/products/add")
    }

    const deleteProduct = () => {
        navigate("/products/delete")
    }

    const settingUser = () => {
        navigate("/setting")
    }

    return (
        <>
            <BasketPanel products={state.cartProducts} />
            <Button onClick={addProduct}>Добавить продукт</Button>
            <br />
            <Button onClick={deleteProduct}>Удалить продукт</Button>

            <div className="setting">
                <Button onClick={settingUser}>Настройки</Button>
            </div>

            <div className="catalog">
                {state.products.map((product) => {
                    console.log(product);
                    //console.log(product.name)
                    //console.log(product.cost)
                    //console.log(product.pname + product.image.pngcost)
                    return <CatElement product={product} key={product.name + product.cost} onClick={() => addToCart(product)} />
                })}
            </div>

            <div style={{ float: "right" }}>
                <Chat/>
            </div>
        </>
    )
}

export default CatalogPage;