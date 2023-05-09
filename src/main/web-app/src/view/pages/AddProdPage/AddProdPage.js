import React, { useState } from 'react';
import TextBar from '../../components/UI/TextBar/TextBar'
import Button from '../../components/UI/Button/Button'
import CatalogService from '../../../model/services/catalogService';
import { useNavigate } from 'react-router-dom';
import "./AddProdPage.css"

function AddProdPage() {
    const initialState = {
        name: "",
        cost: "",
        img: "",
        count: "",
        message: ""
    }
    const [state, setState] = useState(initialState);
    const navigate = useNavigate();

    const addProduct = async () => {
        const isOk = await CatalogService.postProduct({
            name: state.name,
            cost: state.cost,
            img: state.img,
            count: state.count,
        })

        if (!isOk) {
            setState({
                ...state,
                message: "Ошибка добавления в каталог."
            })
            return
        }

        setState({
            ...state,
            message: "Продукт успешно добавлен в каталог."
        })
    }


    const back = () => {
        navigate("/catalog")
    }


    return (
        <ul className="panel">
            <li>Название: <br /><TextBar value={state.name} onChange={e => setState({...state, name: e.currentTarget.value })} /></li>
            <br />

            <li>Стоимость:<br /><TextBar value={state.cost} onChange={e => setState({...state, cost: e.currentTarget.value })} /></li>
            <br />

            <li>Ссылка на изображение:<br /><TextBar value={state.img} onChange={e => setState({...state, img: e.currentTarget.value })} /></li>
            <br />

            <li>Количество:<br /><TextBar value={state.count} onChange={e => setState({...state, count: e.currentTarget.value })} /></li>
            <br />
            <li><Button onClick={addProduct}>Добавить</Button></li>
            <br />

            <li><Button onClick={back}>Назад</Button></li>
            <div>{state.message && <><br />{state.message}</>}</div>
        </ul >
    )
}

export default AddProdPage