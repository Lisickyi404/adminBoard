import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'
import React from 'react'
import axios from 'axios'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { categories } from '../../data';



export default function ProductList(){

    const [showItems,setShowItems] = React.useState([])
    const [items,setItems] = React.useState([])
    const [needReload,setNeedReload] = React.useState(false)

    React.useEffect(()=>{
        axios.get('https://6317f2c8f6b281877c5feabe.mockapi.io/boards').then((res)=>setItems(res.data))
       
    },[needReload])


  React.useEffect(()=>{
        let arr=[]
        for (let i=0;i<items.length;i++){
            let ob = {
               id:items[i].id,
               title:items[i].title,
               price:items[i].price,
               location:items[i].location.country + items[i].location.city,
               creator:items[i].name,
               avatar:items[i].avatar
            }
            arr.push(ob)
        }
        setShowItems(arr)
    },[items]) 

    const deleteItem = (params)=>{
        setShowItems(showItems.filter(el=>el.id!=params.id))
        axios.delete(`https://6317f2c8f6b281877c5feabe.mockapi.io/boards/${params.id}`)
    }
    
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'title', headerName: 'Title', width: 130},
        { field: 'price', headerName: 'Price', width: 80 },
        {
          field: 'location',
          headerName: 'Location',
          type: 'number',
          width: 200,
        },
        {
          field: 'creatorInfo',
          headerName: 'Creator',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 240,
          renderCell:(params)=>{
            return(
                <div>
                    <span>{params.row.creator}</span>
                </div>
            )
          }
        },
        {field:'actions',
        headerName:'Actions',
        width:120,
        renderCell:(params)=>{
          return(
            <>
             <DeleteForeverIcon onClick={()=>deleteItem(params)}  />
           
            <span className='Edit'>Edit</span>
            </>
           
          )
        }
      }
      ];


      function setBoard(){
        var creatorBoard = null
        const text = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat aliquid animi repellendus sint rerum, sunt nobis laudantium, nihil labore, at dignissimos omnis ut praesentium officiis cum totam ullam culpa adipisci!'
        var board=null
        fetch('https://6317f2c8f6b281877c5feabe.mockapi.io/1')
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res)
            creatorBoard=res[Math.floor(Math.random()*res.length)]
            let {name,email,location,phone,registered,typeUser} = creatorBoard
            board={
                idBoard:Math.floor(Math.random() * 999999999) - 11111111,
                title:'Board123',
                description:{text,text,text},
                creatorName:name,
                email:email,
                location:location,
                phone:phone,
                registered:registered,
                typeUser:typeUser,
                img:['https://bing.ioliu.cn/v1/rand?w=896&h=545','https://bing.ioliu.cn/v1/rand?w=896&h=545','https://bing.ioliu.cn/v1/rand?w=896&h=545','https://bing.ioliu.cn/v1/rand?w=896&h=545','https://bing.ioliu.cn/v1/rand?w=896&h=545'],
                price:Math.floor(Math.random() * 3000000) - 0,
                likes:[],
                categoryId:categories[Math.floor(Math.random()*categories.length)]
                
    
            }
            console.log(board)
         
            fetch('https://6317f2c8f6b281877c5feabe.mockapi.io/boards',{
                method:"POST",
                headers: {'Content-Type': 'application/json'}, 
                body:JSON.stringify(board)
            }).then(res=>console.log('well done!'))
    
        })
    }

  

   
    return(
        <div className="ProductList">

          <button onClick={()=>{setBoard();setNeedReload(!needReload)}}>Edit item</button>
                <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={showItems}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
       
        
     
      />
    </div>
            

        </div>
    )
}