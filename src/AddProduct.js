import Header from './Header'
import {useState} from 'react'

function AddProduct() {
const[name,setName]=useState("");
const[file,setFile]=useState("");
const[price,setPrice]=useState("");
const[description,setDescription]=useState("");

 async function addProduct(){


console.warn(name,file,price,description)
const formData = new FormData();
formData.append('file',file)
formData.append('file',price)
formData.append('file',name)
formData.append('file',description)
let result = await fetch("http://localhost:8000/api/addproduct",{
method : 'POST',
body: formData
 });

alert("Data has been saved")

}
    return(

<div>        
<Header />
<div className="col-sm-6 offset-sm-3">
<br />
<input type="text" className="form-control" placeholder="Name" onChange={(e)=>setName(e.target.value)}></input>
<br />
<input type="file" className="form-control" placeholder="file" onChange={(e)=>setFile(e.target.value)}></input>
<br />
<input type="text" className="form-control" placeholder="price" onChange={(e)=>setPrice(e.target.value)}></input>
<br />
<input type="text" className="form-control" placeholder="description" onChange={(e)=>setDescription(e.target.value)}></input>
<br />

<button className="btn btn-primary" onClick={addProduct}>Add Product</button>
<br />
</div>

</div>
    )
    
}
export default  AddProduct