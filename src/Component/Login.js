import React from 'react'
import { Route, NavLink, Switch } from 'react-router-dom'
import axios from 'axios'
import  Register from './Register';
import '../css/Login.css'


//login


class Login extends React.Component {
    state = {
        email: '',
        password: ''
    
    }
    login = () => {
        //    alert("test")
        const userdata = {
            email: this.state.email,
            password: this.state.password

        }
        axios.post("http://localhost:5000/login", userdata).then((Response) => {
            console.log(Response.data)
            localStorage.setItem('token', Response.data.token)
            localStorage.setItem('user_type', Response.data.user.user_type)
            localStorage.setItem('user_id', Response.data.user._id)
            
            localStorage.getItem('token')
            localStorage.getItem('user_type')


            if (localStorage.getItem('token') != null && localStorage.getItem('user_type')==="user" ) {
             
            window.location.href = './User/UserHead'
            }
            if (localStorage.getItem('token') != null && localStorage.getItem('user_type')==="admin" ) {
                window.location.href = '/Admin/AdminHeader'
            }
        })

    }
    render() {
     
        return (
            <div className="container">

                <p>EMAIL OR USERNAME</p>
                <input type="text" value={this.state.email} onChange={(event) => this.setState({ email: event.target.value })} placeholder="ENTER EMAIL" name="email" required />

                <p>PASSWORD</p>
                <input type="password" value={this.state.password} onChange={(event) => this.setState({ password: event.target.value })} placeholder="ENTER PASSWORD" name="password" required />


                <button className="abc" onClick={this.login} type="submit">LOGIN</button><br />
               <p>NEW MEMBER <NavLink to={"/Register"}>REGISTER</NavLink> </p> 
                <Switch>

                    <Route path="/Register" exact Component={Register} />
                </Switch>

            </div>
        )
    }
    
}
export default Login