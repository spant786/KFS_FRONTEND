
import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import '../../css/Table.css'
import UserHead from './UserHead'
class ViewProduct extends React.Component{

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
                   
                        <img src={"http://localhost:5000/images/"+hlists.Image} style={{width:"100px",height:"100px"}}/>  
                      <li>PRODUCT NAME:{hlists.product_name}</li><br/>
            <li>{hlists.Image}</li>
                        <li>PRODUCT TYPE:{hlists.product_type}</li><br/>
                        <li>PRODUCT CODE:{hlists.product_code}</li><br/>
                        <li>PRICE:{hlists.price}</li><br/>
                
                   <button> <p><NavLink to={"/Cart/"+hlists._id}>ADD TO CART</NavLink></p></button>
                   <br/>

                    
                </div>


              

            
            )
            
             })
        
        
         return(
        <section>
             <UserHead/>
                
      
 
        
             
       
         {mydata222}
        
        
        </section>
        )
    }
}
export default ViewProduct