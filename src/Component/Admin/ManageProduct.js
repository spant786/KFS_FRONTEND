

import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import '../../css/ProductBody.css'
import AdminHeader from './AdminHeader'

class ManageProduct extends React.Component{
    DeleteProduct = (id) =>{
        //alert(id)
        axios.delete("http://localhost:5000/product/"+id)
        }
    state = {
        mydata : []
        }
       
        componentDidMount(){
        axios.get("http://localhost:5000/product").then(res=>{
        console.log(res)
        this.setState({mydata : res.data})
        })
        }
        
    render(){
        const mydata222 = this.state.mydata.map(hlists=>{
            return(
                <div>
                    
              
           <table>
               <tr>
    <th>Product Image</th>               
    <th>Product Name</th>
    <th>Product Type</th>
    <th>Product Code</th>
    <th>Price</th>
    <th> Action</th>
  </tr>

  <tr>
   <td>{hlists.Image}</td>
    <td>{hlists.product_name}</td>
    <td>{hlists.product_type}</td>
    <td>{hlists.product_code}</td>
     <td>{hlists.price}</td>


    <td>
<button class ="button" onClick = {() => this.DeleteProduct(hlists._id)}>Delete</button>
<NavLink to={"/UpdateProduct/"+hlists._id}>Update</NavLink><br/>
    </td>

  </tr>
           </table>
           </div>
            
            )
            
             })
        
        
         return(
        <section>
        
        <AdminHeader/>
        
         {mydata222}
        
        </section>
        )
    }
}
export default ManageProduct