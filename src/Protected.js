import React ,{useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Header from './Header'



function Protected(props) {
    const history= useHistory();

    let Cmp=props.Cmp

    
    useEffect(() => {

        if(!localStorage.getItem('user-info'))
        
        {
        history.push("register")
        
        }
        
        
        },[])


    return(

<div>        
<Cmp></Cmp>
</div>


    )
    
}
export default Protected