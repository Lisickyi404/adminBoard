import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ChatIcon from '@mui/icons-material/Chat';
import ChatModalWindow from '../ChatModalWindow/ChatModalWindow';

import React from 'react'
import axios from 'axios';

import './Itemslist.scss'

export default function Itemslist(){

    const [users,setUsers] = React.useState([])
    const [usersList,setUsersList] = React.useState([])
    const [showChat, setShowChat] = React.useState(false)

    const [selectedItems,setSelectedItems] = React.useState([])

    React.useEffect(()=>{
        axios.get('https://6317f2c8f6b281877c5feabe.mockapi.io/1').then((res)=>setUsers(res.data))
        
    },[])

    React.useEffect(()=>{
        let arr=[]
        for(let i=0;i<users.length;i++){
             let {name,id,location,picture,dob} = users[i]
             let ob = {
                firstName:name.first,
                lastName:name.last,
                id:id,
                location:`${location.country} ${location.city}`,
                picture:picture,
                age:dob.age
             }
             arr.push(ob)
            /*  setUsersList(oldArr => [...oldArr,ob]) */

        }
        setUsersList(arr)

    },[users])


    const deleteItem = (itemOb) =>{
      setUsersList(usersList.filter(item =>item.id!=itemOb.id))
    }


    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'firstName', headerName: 'First name', width: 130},
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 30,
        },
        {
          field: 'location',
          headerName: 'Location',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 240,
        },
        {field:'actions',
        headerName:'Actions',
        width:120,
        renderCell:(params)=>{
          return(
            <>
             <DeleteForeverIcon  onClick={(event) => { deleteItem(params)}}/>
            <ChatIcon  onClick={()=>setShowChat(params)}/>
            <span className='Edit'>Edit</span>
            </>
           
          )
        }
      }
      ];

      
      if (users.length===0){
        return null
      }
      else{

     
    return(
        <div className="Itemlist">
         
          <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={usersList}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        onSelectionModelChange={(newSelected)=>{setSelectedItems(newSelected)/* ;console.log(selectedItems) */}}
        
     
      />
    </div>
   { showChat ?  <ChatModalWindow
      show={showChat}
      onClose={()=>setShowChat(false)} 
      usersList ={selectedItems.map((ob)=>usersList.find(el=>el.id == ob))}
      deleteUser = {(arr)=>setSelectedItems(arr)}
 
      /> : null}
        </div>
    )
} }
  

