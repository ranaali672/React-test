import { Component } from 'react';
import Parent from '../Parent/Parent'
export default class Child extends Component{
   render(){
    console.log(this.props);
    let{name,price,isSale,id}=this.props.productData
    return(
        <div className='col-md-3'>
            <div className='bg-info rounded p-2 position-relative'>
                <h3>Name : {name}</h3>
                <h3>Id : {id}</h3>
                <h3>Price : {price}</h3>
                {isSale ==true ? <div className='bg-danger p-2 rounded position-absolute top-0 end-0'>sale</div>: ""}
            </div>
        </div>
    )
   }
}