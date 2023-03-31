import React from "react"
import CLabel from "../../UI/CLabel/CLabel"
import "./CBasketPanel.css"

class CBasketPanel extends React.Component {
    render() {
        return (
            <div className="dropdownContainer">
                <br />
                <br />
                <br />
                <CLabel>Корзина</CLabel>
                <img src="/images/basket.png" id="userImg" width="80" height="60" className="basketImage"></img>
                <div className="dropdownContent">
                    <div className="dropdownContentLineMessage">
                        {this.props.products.map((product, idx) => {
                            return <React.Fragment key={product.product_id}>
                                {`${product.product_name}    ${product.product_cost} руб`} <br /><br />
                            </React.Fragment>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default CBasketPanel