import React, { useContext } from 'react';

import './table.styles.css';
import { TableContext } from '../../context/context';
import { LocationContext } from '../../context/context';

const Table = () => {
  const { location } = useContext(LocationContext)
  const table = useContext(TableContext)
  const columns = table.tableS.columns
  const rows = table.tableS.rows
  const columnElements = () => {
    let elements = [];
    for (let i = 0; i < columns; i++) {
      i === location.column ?
        elements = elements.concat(<td id='selected-column' />) :
        elements = elements.concat(<td id={location.column}/>)
    }
    return elements
  }
  const rowElements = () => {
    let elements = [];
    for (let i = 0; i < rows; i++) {
      i === location.row ? elements = elements.concat(<tr id='selected-row'>{columnElements()}</tr>) :
        elements = elements.concat(<tr id={location.row}>{columnElements()}</tr>)
    }
    return elements;
  }
  return (
    <table>
    <thead>
      {rowElements()}
    </thead>  
    </table>
  )
}
export default Table;
// you have two objects here
// location which have the location of the selected cell (column,row)
// location which have the number of columns and rows of the table
