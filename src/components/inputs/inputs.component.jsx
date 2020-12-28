import React, { useState, useContext } from 'react';

import './inputs.styles.css';
import { TableContext } from '../../context/context';
const initialState = {
    columns: 0,
    rows: 0
}
const Inputs = () => {

    const [inputs, setInputs] = useState(initialState)

    const table = useContext(TableContext)

    const handleSubmit = event => {
        event.preventDefault();
        if (inputs.columns > 0 && inputs.rows > 0) {
            table.tableHandler(inputs.columns, inputs.rows)
        } else {
            setInputs(initialState)
            alert('VALUES MUST BE ABOVE ZEROOOO!!! (try again)')
        }
    }
    const handleChange = event => {
        setInputs({
            ...inputs,
            [event.target.id]: parseFloat(event.target.value)
        })
    }
    return (
        <form className='form-style' onSubmit={handleSubmit}>
            <label htmlFor='columns'>column</label>
            <input type='number' id='columns' value={inputs.columns} onChange={handleChange} />
            <label htmlFor='rows'>row</label>
            <input type='number' id='rows' value={inputs.rows} onChange={handleChange} />
            <button type='submit'>Create Table</button>
        </form>
    )
}
export default Inputs;