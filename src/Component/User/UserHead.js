
import React from'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import '../../css/AdminHeader.css'
import UserDashboard from './UserDashboard'
import ViewProduct from'./ViewProduct'
import UpdateProfile from './UpdateProfile'
import Logout from '../Admin/Logout'


class Sidenav extends React.Component{
    state = {

        headersdata22: {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        },
        user_id:"/UserDashboard/"+localStorage.getItem('user_id'),
        user_id1:"/ViewProduct/"+localStorage.getItem('user_id'),
        user_id2:"/UpdateProfile/"+localStorage.getItem('user_id'),
       

        

    }
    render(){
        if (this.state.headersdata22.headers.Authorization === "Bearer null") {
            alert('Login! First')
            return <Redirect to='/Login' />
        }
        return(
            <div class="navbar">
            <ul>
                <li>  <NavLink to={ `${this.state.user_id}` }>DASHBOARD</NavLink></li>
                <li><NavLink to= { `${this.state.user_id1}` } >VIEW PRODUCT</NavLink></li>
                <li><NavLink to={ `${this.state.user_id2}` }>UPDATE PROFILE</NavLink></li>
                <li><NavLink to="/logout" >LOGOUT</NavLink></li>
               
               
            


            </ul>

            <Switch>
                <Route path="/UserDashBoard" exact component={UserDashboard} />
                <Route path="/ViewProduct" exact component={ViewProduct} />
                <Route path="/UpdateProfile" exact component={UpdateProfile} />
                <Route path="/logout" exact component={Logout} />
             

            </Switch>


        </div>
        )
    }

}
export default Sidenav