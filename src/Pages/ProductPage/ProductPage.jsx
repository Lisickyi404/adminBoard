import './ProductPage.scss'

import Select from 'react-select'
import React from 'react'

import { categories } from '../../data'




export default function ProductPage(){
    const [categoty,setCategory] = React.useState()
    const [option2,setOption2] = React.useState()

const getCategory = (e) =>{
    setOption2(categories.find(el=>el.title == e.value).categories.map((ob)=>{
        return{
            value:ob.id,
            label:ob.categoryName
        }
    }))
}

let option1 = categories.map((el)=>
   { return{
        value:el.title,
        label:el.title
    }}
)
        return(

            

        <div className="ProductPage">
                <div className="ProductInfo">
                <form>
                    <div>

                        
                <div className='section'>
                <span className='title'>Категория товара</span>
                        <div className="categories">
                        <Select
                        className='category'
                        options={option1}
                        onChange={getCategory}/>
                        
                        <Select
                          className='category'
                        options = {option2}/>
                        
                    </div>
                </div>
                <span className='title'>id: 523928564</span>
                <div className='section'>
                    <span className='title'>Создано: 2022-09-13T23:06:22.322Z</span>
                   
                    <div className="autor">
                        <h3>Создатель</h3>

                        <div className='autour_info'>
                            <img/>
                            <div className=''>

                            </div>
                        </div>
                        
                    </div>
                </div>
                

                
                
                </div>
                </form>
                    

                </div>

        </div>
        )
}