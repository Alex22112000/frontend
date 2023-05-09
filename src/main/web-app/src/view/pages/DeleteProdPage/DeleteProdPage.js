import React, { useState } from 'react';
import TextBar from '../../components/UI/TextBar/TextBar'
import Button from '../../components/UI/Button/Button'
import CatalogService from '../../../model/services/catalogService';
import { useNavigate } from 'react-router-dom';
import "./DeleteProdPage.css"

function DeleteProdPage() {
    const initialState = {
        name: "",
        message: ""
    }
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();

    const deleteProduct = async () => {
        const isOk = await CatalogService.deleteProduct({
            name: state.name
        })

        if (!isOk) {
            setState({
                ...state,
                message: "Ошибка удаления."
            })
            return
        }

        setState({
            ...state,
            message: "Продукт успешно удален."
        })
    }


    const back = () => {
        navigate("/catalog")
    }

    return (
        <ul className="panel">
            <li className="nm">Название:<br /><TextBar value={state.name} onChange={(e) => setState({ ...state, name: e.currentTarget.value })} /></li>
            <br />

            <li className="bt"><Button onClick={deleteProduct}>Удалить</Button></li>
            <br />

            <li className="btBack"><Button onClick={back}>Назад</Button></li>

            <div className="message">{state.message && <><br /> {state.message}</>}</div>
        </ul>
    )
}

export default DeleteProdPage