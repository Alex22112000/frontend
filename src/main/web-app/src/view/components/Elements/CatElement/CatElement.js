import React from 'react'
import Button from '../../UI/Button/Button'
import './CatElement.css'

class CatElement extends React.Component {
    render() {
        return (
            <div className="cat_container">
                <div className="cat_name">{this.props.product.name}</div>
                <img src={this.props.product.img} width="200" height="100" className='cat_img'/>
                <div className="cat_cost">{this.props.product.cost} руб 	</div>
                <Button onClick={(e) => this.props?.onClick(e)} className="cat_button">Купить</Button>
                <div className="cat_desc">{this.props.product.count} штук</div>
                <br />
            </div>
        )
    }
}

export default CatElement