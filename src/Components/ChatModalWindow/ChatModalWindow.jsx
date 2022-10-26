import './ChatModalWindow.scss'
import React from 'react'


export default function ChatModalWindow(props){
 
    console.log(props)
    const [usersList,setUsersList] = React.useState([])
    React.useEffect(()=>{
        setUsersList(props.usersList)
        console.log(usersList)
    })
    const ref=React.useRef()

    const sendMesage = (text) =>{
        console.log(text)
    }
   

    if(props.show==false){
        return(
            null
        )
    }
   if(props.show){
    return(
        <div className="ChatModalWindow" >
            <span onClick={props.onClose}>Закрыть</span>
            <div className="chatHeader">

          {  
            usersList.map((ob,i)=>
            <div className='adress'/*  onClick={()=>setUsersList(usersList.filter(el=>el.id!==ob.id))} */>
                <img src={ob.picture.thumbnail} with={25} height={25}/>
                <p>{ob.firstName}</p>
                

                
            </div>
            )
            
            }

            </div>

            <div className="sendMessage">

                <textarea className="textarea" ref={ref}/>
                <span onClick={()=>sendMesage(ref.current.value)}>Send</span>
            </div>

        </div>
    )
   }
}