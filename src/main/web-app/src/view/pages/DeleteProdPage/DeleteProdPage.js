import React, { useState } from 'react';
import CTextBar from '../../components/UI/TextBar/TextBar'
import CButton from '../../components/UI/Button/Button'
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
            <li className="nm">Название:<br /><CTextBar value={state.name} onChange={(e) => setState({ ...state, name: e.currentTarget.value })} /></li>
            <br />

            <li className="bt"><CButton onClick={deleteProduct}>Удалить</CButton></li>
            <br />

            <li className="btBack"><CButton onClick={back}>Назад</CButton></li>

            <div className="message">{state.message && <><br /> {state.message}</>}</div>
        </ul>
    )
}

export default DeleteProdPage