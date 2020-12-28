import React, { useState } from 'react';
import './App.css';

import Arrows from './components/arrows/arrows.component';
import Inputs from './components/inputs/inputs.component';
import Table from './components/table/table.component';
import { TableContext, LocationContext } from './context/context';

function App() {
  const [tableS, setTable] = useState({
    columns: 0,
    rows: 0
  })
  const [location, setLocation] = useState({
    column: 0,
    row: 0
  })
  const tableHandler = (columns, rows) => {
    setTable({
      columns,
      rows
    })
  }
  const locationHandler = (column, row) => {
    setLocation({
      column,
      row
    })
  }
  return (
    <TableContext.Provider value={{ tableS, tableHandler }}>
      <div className='flex-container'>
        <Inputs />
        <LocationContext.Provider value={{ location, locationHandler }}>
          <Arrows />
          <Table />
        </LocationContext.Provider>

      </div>
    </TableContext.Provider>
  );
}

export default App;
