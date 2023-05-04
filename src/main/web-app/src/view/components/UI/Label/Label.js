import React from 'react'
import './Label.css'

class Label extends React.Component {
    render() {
        return (
            <div className={`container ${this.props.className}`} >
                <label className="style">
                    {this.props.children}
                </label>
            </div>
        )
    }
}

export default Label