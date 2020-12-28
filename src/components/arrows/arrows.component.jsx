import React, { useContext } from 'react';

import './arrows.styles.css';
import { LocationContext, TableContext } from '../../context/context';

const Arrows = () => {
    const { location, locationHandler } = useContext(LocationContext)
    const { tableS: { columns, rows } } = useContext(TableContext)
    const reducer = (action) => {
        switch (action) {
            case "RIGHT":
                return location.column + 1 < columns &&
                    locationHandler(location.column + 1, location.row)
            case "LEFT":
                return location.column > 0 &&
                    locationHandler(location.column - 1, location.row)
            case "UP":
                return location.row > 0 &&
                    locationHandler(location.column, location.row - 1)
            case "DOWN":
                return location.row + 1 < rows &&
                    locationHandler(location.column, location.row + 1)
            default:
                throw new Error('unvalid action')
        }
    }
    return (
        <div>
            <p onClick={() => reducer("UP")}>up &uarr; </p>
            <p onClick={() => reducer("DOWN")}>down &darr; </p>
            <p onClick={() => reducer('LEFT')}>left &larr; </p>
            <p onClick={() => reducer('RIGHT')}> right &rarr; </p>
        </div>
    )
}
export default Arrows;
