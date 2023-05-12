import React,{useState} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from './../UI/Button';
const AddUser =(props)=>{
    
    const [enteredUsername,setEnteredUserName]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const addUserHandler =(event)=>{
        event.preventDefault();
        
        console.log(event)
        if(enteredAge.trim().length===0 || enteredUsername.trim().length ===0){
            alert("invalid");
            return;
        }
        if(+enteredAge<1){
            return;
        }
        console.log(enteredUsername,enteredAge);
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUserName('');
        setEnteredAge('');
    }
    const userNameChangeHandler = (event)=>{
        setEnteredUserName(event.target.value)
    }
    const ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value);
    }

    return (
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' value={enteredUsername || ''} onChange={userNameChangeHandler}/>
            <label htmlFor='age'>Age (Years)</label>
            <input id='age' type='number' value={enteredAge || ''} onChange={ageChangeHandler}/>
           

           <Button type='submit'>Add User</Button>
        
    </form>
    </Card>
    );
}
export default AddUser;