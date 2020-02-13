
import React from 'react'
import axios from 'axios';
import UserHead from './UserHead'
class UpdateUser extends React.Component{
        state = {
                fullname: '',
                address: '',
                email: '',
                number: '',
                User_data: []
            }
            componentDidMount() {
        
                axios.get("http://localhost:5000/user/single/" + this.props.match.params.id).then(
                    res => {
                        console.log(res.data)
                        this.setState({
                            //teacher_data : res.data,
                            fullname: res.data.fullname,
                            address: res.data.address,
                            email: res.data.email,
                            number: res.data.number,
                           
        
                        })
        
                    })
            }
            UpdateData = () => {
                const data = {
                    fullname: this.state.fullname,
                    address: this.state.address,
                    email: this.state.email,
                    number: this.state.number,
                    
                }
        
                axios.put("http://localhost:5000/user/" + this.props.match.params.id,
                    data)
                 alert("update sucessfully")  
            }
            render() {
 return(
 <div>
         <UserHead/>
         <center>
                <form class ="form-body">
                <center> <h1>PLEASE UPDATE YOUR PROFILE</h1> </center>

 
 <p>FULLNAME</p>
 <input type="text" value={this.state.fullname}
onChange={(event)=>this.setState({fullname : event.target.value})} />

<p>EMAIL</p>
 <input type="text" value={this.state.email}
onChange={(event)=>this.setState({email: event.target.value})}/>

<p>ADDRESS</p>
 <input type="text" value={this.state.address}
onChange={(event)=>this.setState({address: event.target.value})}/>

<p>CONTACT NUMBER</p>
  <input type="text" value={this.state.number}
onChange={(event)=>this.setState({number: event.target.value})}/>

<p> <button onClick={this.UpdateData}>UPDATE</button></p>
 </form>
 </center>

 </div>
 )
 }
}
export default UpdateUser
