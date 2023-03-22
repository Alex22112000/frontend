import React from 'react';
import { withRouter } from 'react-router-dom'
import CBasketPanel from '../../components/Elements/CBasketPanel/CBasketPanel';
import CCatElement from '../../components/Elements/CCatElement/CCatElement';
import CButton from "../../components/UI/CButton/CButton";
import CatalogService from '../../services/catalogService';
import "./CCatalogPage.css"

class CLogPage extends React.Component {
    state = {
        cartProducts: [],
        products: []
    }

    componentDidMount = () => {
        const getData = async () => {
            const products = await CatalogService.getCatalog()
            this.setState({
                products
            })
        }

        getData()
    }

    addToCart = (product) => {
        this.setState((prev) => ({
            cartProducts: [...prev.cartProducts, product]
        }))
    }

    addProduct = () => {
        this.props.history.push("/products/add")
    }

    deleteProduct = () => {
        this.props.history.push("/products/delete")
    }

    render() {
        return (
            <>
                <CBasketPanel products={this.state.cartProducts} />
                <CButton onClick={this.addProduct}>Добавить продукт</CButton>
                <br />
                <CButton onClick={this.deleteProduct}>Удалить продукт</CButton>


                <div className="catalog">
                    {this.state.products.map((product) => {
                        console.log(product);
                        //console.log(product.product_name)
                        //console.log(product.product_cost)
                        //console.log(product.product_name + product.product_cost)
                        return <CCatElement product={product} key={product.product_name + product.product_cost} onClick={() => this.addToCart(product)} />
                    })}
                </div>
            </>
        )
    }
}

export default withRouter(CLogPage)