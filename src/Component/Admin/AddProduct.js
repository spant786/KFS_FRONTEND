
import React from 'react'
import axios from 'axios'
import AdminHeader from './AdminHeader'


class AddProduct extends React.Component{
    constructor() {
        super()
         this.state = {
             product_name: '',
             product_type : '',
             product_code:'',
             price:'',
             Image:'',
             isadded: true,
//test and add product added

             config: {
                headers: { 
                    'content-type': 'multipart/form-data'
                }
            }




             
             
         }
     }
     handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleImageChange = (e) => {
        this.setState({
          Image: e.target.files[0]
        })
      };
      
    
    addproduct = (e) => {
        e.preventDefault();
      //
      

      let postdata = new FormData();
      postdata.append('product_name', this.state.product_name);
      postdata.append('product_type', this.state.product_type);
      postdata.append('product_code', this.state.product_code);
      postdata.append('price', this.state.price);
    
      

      
      postdata.append('Img', this.state.Image);
    
      postdata.append('Image', this.state.Image.name);
      

      
      console.log(this.state.Image.name);
    
        axios.post('http://localhost:5000/product',postdata, this.state.config)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('token', response.data.token)
                //alert("room added successfully")
                this.setState({
                //this values should match with the value of model class of API
                //install cors in api
                product_name:this.state.product_name,
                product_type:this.state.product_type,
                product_code:this.state.product_code,
                price:this.state. price,
        
                Image:this.state.Image

            });
            
            
            
        }).catch((err) => console.log(err))
    }

    render(){
       
        return(
            
            <div>
                 <AdminHeader/>
                <center>
                <form class ="form-body">
                <center> <h1>Add Product</h1> </center>

                <p class ="para">Product Name</p>
                <input type="text" name="product_name" placeholder="Enter Product Name"  onChange={this.handleChange} required/>

                <p class ="para">Product Type</p>
                <input type="text" name="product_type" placeholder="Enter Product Type"  onChange={this.handleChange} required/>

                <p class ="para">Product Code</p>
       
                <input type="text" name="product_code" placeholder="Enter Product Code"  onChange={this.handleChange} required/>
                
                   
                    
                <p class ="para">Price</p>
                <input type="text" name="price" placeholder="Enter price"  onChange={this.handleChange} required/>

    

                <p class ="para">Image</p>
                <input type="file" name="Image" placeholder="choose image" onChange={this.handleImageChange} required/>

                <p><button class ="abc" onClick={this.Login} type="submit" onClick={this.addproduct}>Add Product</button></p>
                </form>
                
                  
                </center>
            </div>

        )
    }
}
export default AddProduct