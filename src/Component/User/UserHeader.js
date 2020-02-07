
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Register from '../Register'
import Login from '../Login'

import '../../css/AdminHeader.css'
import UserDashboard from './UserDashboard'
import AdminHeader from '../Admin/AdminHeader'
import UpdateUser from '../Admin/UpdateUser'
import UpdateProfile from '../User/UpdateProfile'
import AdminDashboard from '../Admin/AdminDashboard'
import ManageUser from '../Admin/ManageUser'
import ManageProduct from '../Admin/ManageProduct'
import ManageCart from '../Admin/ManageCart'
import AddProduct from '../Admin/AddProduct'
import LogOut from '../Admin/Logout'
import UpdateProduct from '../Admin/UpdateProduct'
import UserHead from '../User/UserHead'
import ViewProduct from './ViewProduct'




class UserHeader extends React.Component {
    render() {
        return (
            <div class="navbar">
                <Switch>
                    
                    <Route path="/" exact component={Login} />
                    
                     <Route path="/Login" exact component={Login} />
                    <Route path="/Register" exact component={Register} />
                    <Route path="/UserDashboard/:id" exact component={UserDashboard} />
                    <Route path="/Admin/AdminHeader/" exact component={AdminHeader} />
                    <Route path="/UpdateProfile/:id" exact component={UpdateProfile}/>
                    <Route path="/AdminDashboard/:id" exact component={AdminDashboard} />
                    <Route path="/ManageUser/:id" exact component={ManageUser} />
                    <Route path="/UpdateUser/:id" exact component={UpdateUser} />
                    <Route path="/ManageProduct/:id" exact component={ManageProduct} />
                    <Route path="/ManageCart/:id" exact component={ManageCart} />
                    <Route path="/AddProduct/:id" exact component={AddProduct} />
                    <Route path="/UpdateProduct/:id" exact component={UpdateProduct} />
                    <Route path="/Logout" exact component={LogOut} />
                    <Route path="/User/UserHead" exact component={UserHead} />
                    <Route path="/ViewProduct/:id" exact component={ViewProduct} />

                   
                    
                    
                    
                   
                </Switch>

            </div>


        )
    }


}
export default UserHeader