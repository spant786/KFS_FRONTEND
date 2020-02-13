
import React from'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import '../../css/AdminHeader.css'
import AdminDashboard from './AdminDashboard'
import AddProduct from'./AddProduct'
import ManageProduct from './ManageProduct'
import ManageUser from './ManageUser'
import ManageCart from './ManageCart'
import UpdateProduct from './UpdateProduct'
import UpdateUser from './UpdateUser'
import Logout from './Logout'


class Sidenav extends React.Component{
    state = {

        headersdata22: {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        },
        user_id:"/AdminDashboard/"+localStorage.getItem('user_id'),
        user_id1:"/AddProduct/"+localStorage.getItem('user_id'),
        user_id2:"/ManageCart/"+localStorage.getItem('user_id'),
        user_id3:"/ManageUser/"+localStorage.getItem('user_id'),
        user_id4:"/ManageProduct/"+localStorage.getItem('user_id'),
        user_id5:"/UpdateProduct/"+localStorage.getItem('user_id'),
        user_id6:"/UpdateUser/"+localStorage.getItem('user_id'),
       

        

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
                <li><NavLink to= { `${this.state.user_id1}` } >ADD PRODUCT</NavLink></li>
                <li><NavLink to={ `${this.state.user_id3}` }>MANAGE USER</NavLink></li>
                <li><NavLink to={ `${this.state.user_id4}` }>MANAGE PRODUCT</NavLink></li>
                <li><NavLink to={ `${this.state.user_id6}` }>UPDATE USER</NavLink></li>
                <li><NavLink to="/logout" >LOGOUT</NavLink></li>
               
               
            


            </ul>

            <Switch>
                <Route path="/AdminDashBoard" exact component={AdminDashboard} />
                <Route path="/AddProduct" exact component={AddProduct} />
                <Route path="/ManageCart" exact component={ManageCart} />
                <Route path="/ManageUser" exact component={ManageUser} />
                <Route path="/ManageProduct" exact component={ManageProduct} />
                <Route path="/UpdateProduct" exact component={UpdateProduct} />
                <Route path="/UpdateUser" exact component={UpdateUser} />
            
                <Route path="/logout" exact component={Logout} />
             

            </Switch>


        </div>
        )
    }

}
export default Sidenav