import React,{useState,useEffect,useMemo, FC} from 'react';
import './App.css';
import {useTable, useExpanded} from 'react-table';
import { egData, DataType } from './Data';
import Modals from './compoenets/Modal';


function App() {
  //columns
const tableColumn = [
  {
    id: 'expander',
    Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }:any) => (
      <span {...getToggleAllRowsExpandedProps()}>
        {isAllRowsExpanded ? '👇' : '👉'}
      </span>
    ),
    Cell: ({ row }:any) =>
      row.canExpand ? (
        <span
          {...row.getToggleRowExpandedProps({
            style: {
              paddingLeft: `${row.depth * 2}rem`,
            },
          })}
        >
          {row.isExpanded ? '👇' : '👉'}
        </span>
      ) : null,
  },
  {
    Header:'ID',
    accessor:'id'
  },
  {
    Header:"Title",
    accessor:'title',
  },
  {
    Header:'Action',
    accessor:'action',
    Cell:({row}:{row:any})=>(
      <button onClick={()=>ModalHandler(row.values.title)} className='btn btn-sm btn-info'>
        Show
      </button>
      
    )
  }
];

  const [datas,setDatas] = useState<DataType[]>(egData)

  const data = useMemo(()=>datas,[datas]);
  const columns:any = useMemo(()=>tableColumn,[])

  const [show, setShow] = useState<boolean>(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [value, setValue] = useState<string>('')

  let ModalHandler = (val:string) =>{
    setShow(true)
    setValue(val)
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state:expanded,
  
  } = useTable({
    columns,
    data,
  },useExpanded)

  return (
    <div className="App">
      
      <Modals show={show} val={value} handleClose={handleClose}/>

<h1 className='fw-light'>DC Comics</h1>
<hr></hr>
<div className='container'>
<table className="table table-striped" {...getTableProps()}>
  <thead>
  {
          headerGroups.map((headerGroup:any)=>(
            <tr {...headerGroup.getHeaderGroupProps()}>
          {
            headerGroup.headers.map((column:any)=>(
              <th {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))
          }
        </tr>
          ))
        }
  </thead>
  <tbody {...getTableBodyProps()}>
        {rows.map((row:any,i:number)=>{
          prepareRow(row);
          return<tr {...row.getRowProps()}>
          {row.cells.map((cell:any)=>(
            <td {...cell.getCellProps()}>
              {cell.render("Cell")}
            </td>
          ))}
        </tr>
})}
      </tbody>
</table>
</div>
    </div>
  );
}

export default App;
