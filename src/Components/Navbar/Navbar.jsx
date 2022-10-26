import './Navbar.scss'
/* -------------------------------------------------- */
import React from 'react'
import {
    Link,
  } from 'react-router-dom';

export default function Navbar(){

    




    const navlist = [{title:'Статистика',link:'statistic'},{title:'Пользователи',link:'users'},{title:'Объявления',link:'products'},{title:'Сообщения',link:'statistic'},{title:'Команда',link:'statistic'}]

    const [nav,setNav] = React.useState()
    
    const style = {
        textDecoration: "none",
    }

    return(
        <div className="Navbar">

        <ul className="navlist">

            {navlist.map((el,i)=>(
                <Link to={el.link} style={style}>
                        <li onClick={()=>setNav(i)} className={nav==i ? 'active' : null}>{el.title}</li>
                </Link>

                
       
            ))}

        </ul>
           
        </div>
    )
}