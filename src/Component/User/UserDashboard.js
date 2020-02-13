
import React from 'react'
import axios from 'axios';
import UserHead from './UserHead'


// import { View, Image } from 'react-native';
class UserDashboard extends React.Component{
    
        state = {
                fullname: '',
                email: '',
                address: '',
                number: '',
               
               
                user_data: []
            }
            componentDidMount() {
        
                axios.get("http://localhost:5000/user/single/" + this.props.match.params.id).then(
                    res => {
                        console.log(res.data)
                        this.setState({
                            fullname: res.data.fullname,
                            email: res.data.email,
                            address: res.data.address,
                            number: res.data.number,
                           
                           
                           
                           
                           
        
                        })
        
                    })
            }
            render() {
 return(
 <div>
         <UserHead/>
         <center>
                <form class ="form-body">
                <center> <h1>WELCOME TO THE PORTAL.</h1> </center>
                <img src ="images/logo.PNG"/>
                {/* return <img src={avatar} alt="avatar" />
                source={require("../../public/avatar")} */}
 
 <p>FULLNAME:{this.state.fullname}</p>
 <p>EMAIL: {this.state.email}</p>
 <p>ADDRESS:{this.state.address}</p>

 <p>CONTACT NUMBER: {this.state.number}</p>


 </form>
 </center>

 </div>
 )
 }
}
export default UserDashboard
