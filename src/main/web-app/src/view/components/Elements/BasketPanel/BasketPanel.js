import React from "react"
import Label from "../../UI/Label/Label"
import "./BasketPanel.css"

class BasketPanel extends React.Component {
    render() {
        return (
            <div className="dropdownContainer">
                <br />
                <br />
                <br />
                <Label>Корзина</Label>
                <img src="/images/basket.png" id="userImg" width="80" height="60" className="basketImage"></img>
                <div className="dropdownContent">
                    <div className="dropdownContentLineMessage">
                        {this.props.products.map((product, idx) => {
                            return <React.Fragment key={product.id}>
                                {`${product.name}    ${product.cost} руб`} <br /><br />
                            </React.Fragment>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default BasketPanel