import { createContext } from 'react';

export const TableContext = createContext({
      tableS:null,
      setTableS:()=>{},
})
export const LocationContext = createContext({
      location:{
            column:null,
            row:null
      },
      setLocation:()=>{}
})