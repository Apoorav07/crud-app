import { useState,useEffect } from "react";


import { useNavigate,useParams } from "react-router-dom";
import { FormControl, FormGroup, Input, InputLabel,Typography,Button,styled } from "@mui/material";

import { getUser,editUser } from "../service/api";


const Container =styled(FormGroup)`
  width:50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top:20px
  }
`
const initialValues={
  name:'',
  username:'',
  email:'',
  phone:''
}

const EditUser = () => {

const [user,setUser] = useState(initialValues);

const navigate=useNavigate();
const {id} =useParams();
useEffect(()=>{
 getUserData();
},[])

const getUserData=async()=>{
  let response =await getUser(id);
  setUser(response.data)
}

const onValuechange=(e)=>{
  
  setUser({...user,[e.target.name]:e.target.value})
  console.log(user);
}

const editUserDetails=async()=>{
  await editUser(user,id);
  navigate('/all');
}

  return ( 
    <Container>
      <Typography variant="h4">Edit User</Typography>
      <FormControl>
         <InputLabel>Name</InputLabel>
         <Input onChange={(e)=>onValuechange(e)} name='name' value={user.name}/>
      </FormControl>

      <FormControl>
         <InputLabel>UserName</InputLabel>
         <Input onChange={(e)=>onValuechange(e)} name='username' value={user.username}/>
      </FormControl>

      <FormControl>
         <InputLabel>Email</InputLabel>
         <Input onChange={(e)=>onValuechange(e)} name='email' value={user.email}/>
      </FormControl>

      <FormControl>
         <InputLabel>Phone Number</InputLabel>
         <Input onChange={(e)=>onValuechange(e)} name='phone' value={user.phone}/>
      </FormControl>

      <FormControl>
         <Button onClick={()=>editUserDetails()} variant="contained">Edit User</Button>
      </FormControl>
    </Container>
    );
}
 
export default EditUser;