
import React from'react'
import {NavLink,Switch,Route} from 'react-router-dom'
import '../css/LoginHeader.css'
import Login from './Login'
import Register from './Register'
import AdminHeader from './Admin/AdminHeader'

class LoginHeader extends React.Component{
    render(){
        return(
            <div class="navbar">
            <ul>
               
                <li><NavLink to="/" >Login</NavLink></li>
                <li><NavLink to="/Register" >Register</NavLink></li>
               

            


            </ul>

            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/Register" exact component={Register} />
                <Route path ="/adminheader" exact component={AdminHeader}/>
                
               

                
              

            </Switch>
            </div>
        )
    }

}
export default LoginHeader