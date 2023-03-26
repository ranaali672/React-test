import { Component } from 'react';
import Child from '../Child/Child'
export default class Parent extends Component{
    state={
        products:[
            {id:1,name:"iphone",price:5000,isSale:true},
            {id:2,name:"nokia",price:2000,isSale:false},
            {id:3,name:"summsung",price:7000,isSale:false},
            {id:4,name:"lg",price:3000,isSale:true},
            {id:5,name:"opoo",price:5000,isSale:true},
        ],
    }
    render(){
        return(
            <div>
                <h1>parent</h1>
                <div className='container'>
                    <div className='row g-3'>
                        {this.state.products.map((el,i)=>{
                            return <Child productData={el} />
                        })}
                    </div>
                </div>

            </div>
        )
    }
}