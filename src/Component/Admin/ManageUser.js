

import React from 'react'
import axios from 'axios'
import {NavLink} from 'react-router-dom'
import '../../css/Table.css'
import AdminHeader from './AdminHeader'

class ManageUser extends React.Component{
    DeleteUser = (id) =>{
        //alert(id)
        axios.delete("http://localhost:5000/user/"+id)
        }
    state = {
        mydata : []
        }
       
        componentDidMount(){
        axios.get("http://localhost:5000/user").then(res=>{
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
    <th>Fullname</th>
    <th>Email</th>
    <th>Address</th>
    <th>Contact Number</th>
    <th> Action</th>
  </tr>

  <tr>
   <td>{hlists.fullname}</td>
    <td>{hlists.email}</td>
    <td>{hlists.address}</td>
    <td>{hlists.number}</td>
    <td>
<button class ="button" onClick = {() => this.DeleteUser(hlists._id)}>Delete</button>
<NavLink to={"/UpdateUser/"+hlists._id}>Update</NavLink><br/>
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
export default ManageUser