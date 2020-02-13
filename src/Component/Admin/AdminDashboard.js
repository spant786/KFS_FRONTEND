
import React from  'react'
import axios from 'axios'
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
import '../../css/Adminbody.css'
import AdminHeader from './AdminHeader'


class AdminDashboard extends React.Component{
    state = {

        headersdata22: {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        }
      

    }
    LogOut = () => {
        //delete token in browser and logout from backend
        axios.post('http://localhost:5000/logout')
        localStorage.removeItem('token')
        window.location.href = '/login'


    }
        
    render(){
        if (this.state.headersdata22.headers.Authorization === "Bearer null") {
            alert('Login! First')
            return <Redirect to='/Login' />
        }
        
    return(
        <div>
        <AdminHeader/>
        <div><h1>WELCOME TO ADMINDASHBOARD </h1></div>
        </div>
    )
    }
}
export default AdminDashboard