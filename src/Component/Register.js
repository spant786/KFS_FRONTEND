
import React from 'react'
import  {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import '../css/Login.css';
import axios from 'axios'


class Register extends React.Component {
    constructor() {
   super()
    this.state = {
       fullname: '',
       email:'',
       address:'',
       number:'',
       password:'',
       user_type:'user',
       

        
    }
}
    
handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

Register = (e) => {
    e.preventDefault();
    console.log(this.state);

    axios.post('http://localhost:5000/user', this.state)
        .then((response) => {
            console.log(response.data);
            localStorage.setItem('token', response.data.token)
            this.setState({
            //this values should match with the value of model class of API
            //install cors in api
            fullname:this.state.fullname,
            email:this.state.email,
            address:this.state.address,
            number:this.state.number,
            password:this.state.password,
            user_type:this.state.user_type,
        });
        
        
        
    }).catch((err) => console.log(err))
}

    render(){
        
            
       
        return (
         
                    
            <form>
                
             <div class="containers">
            

            <p>FULLNAME</p>
            <input type="text" value = {this.state.fullname} onChange = {(event)=> this.setState({fullname:event.target.value})} 
            placeholder="ENTER FULLNAME" name="fullname" required/>
            
           <p>ADDRESS</p>
            <input type="text" value = {this.state.address} onChange = {(event)=> this.setState({address:event.target.value})} 
            placeholder="ENTER ADDRESS" name="address" required/>
            
            <p>Contact Number</p>
            <input type="text" value = {this.state.number} onChange = {(event)=> this.setState({number:event.target.value})} 
            placeholder="ENTER PHONE NUMBER" name="number" required/>
            
           <p>Email</p>
            <input type="email" value = {this.state.email} onChange = {(event)=> this.setState({email:event.target.value})} 
            placeholder="ENTER EMAIL" name="email" required/>
            
            <p>Password</p>
            <input type="password" value = {this.state.password} onChange = {(event)=> this.setState({password:event.target.value})}
            placeholder="ENTER PASSWORD" name="password" required/>
             <input type="hidden" value = {this.state.usertype} onChange = {(event)=> this.setState({usertype:event.target.value})}
            name="user_type" required/>
            
            <button className="abc" onClick={this.Register} type="submit">REGISTER</button>
            
            <p>ALREADY A MEMBER?
            <NavLink to="/Login"> LOGIN</NavLink></p>
            
            </div>

            </form>
            

          

  
)
}
        }
    
    export default Register