import React, { useEffect, useState } from 'react';
import CBasketPanel from '../../components/Elements/BasketPanel/BasketPanel';
import CCatElement from '../../components/Elements/CatElement/CatElement';
import CButton from "../../components/UI/Button/Button";
import CatalogService from '../../../model/services/catalogService';
import Chat from "../../components/func/Chat";
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
    }, [])

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
            <CBasketPanel products={state.cartProducts} />
            <CButton onClick={addProduct}>Добавить продукт</CButton>
            <br />
            <CButton onClick={deleteProduct}>Удалить продукт</CButton>

            <div className="setting">
                <CButton onClick={settingUser}>Настройки</CButton>
            </div>

            <div className="catalog">
                {state.products.map((product) => {
                    console.log(product);
                    //console.log(product.product_name)
                    //console.log(product.product_cost)
                    //console.log(product.product_name + product.product_cost)
                    return <CCatElement product={product} key={product.product_name + product.product_cost} onClick={() => addToCart(product)} />
                })}
            </div>

            <div style={{ float: "right" }}>
                <Chat/>
            </div>
        </>
    )
}

export default CatalogPage;