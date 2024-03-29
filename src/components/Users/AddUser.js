import React,{useState,useRef} from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css';
import Button from './../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helpers/Wrapper';
const AddUser =(props)=>{
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    
    const [enteredUsername,setEnteredUserName]=useState('');
    const [enteredAge,setEnteredAge]=useState('');
    const [error,setError]=useState();

    const addUserHandler =(event)=>{
        event.preventDefault();
        
        console.log(event)
        // console.log(nameInputRef.current.value);
        if(enteredAge.trim().length===0 || enteredUsername.trim().length ===0){
            // alert("invalid");
            setError({
                title:"Invalid input",
                message:'Please enter name and age (non-empty) values'
            })
            return;
        }
        if(+enteredAge<1){
            setError({
                title:"Invalid input",
                message:'Please enter valid age ( > 0)'
            })
            return;
        }
        console.log(enteredUsername,enteredAge);
        // use ref only for getting values from form.
        // we can remove on change and value binding from html
        const name =  nameInputRef.current.value;
        const age = ageInputRef.current.value
        props.onAddUser(name,age);
        setEnteredUserName('');
        setEnteredAge('');
        //resetting using ref
        // ageInputRef.current.ref='';
        // nameInputRef.current.ref='';

    }
    const errorHandler = ()=>{
        setError(null)
    }
    const userNameChangeHandler = (event)=>{
        setEnteredUserName(event.target.value)
    }
    const ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value);
    }

    return (
        (<Wrapper>
            { error &&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor='username'>Username</label>
            <input id='username' type='text' value={enteredUsername || ''} onChange={userNameChangeHandler} ref={nameInputRef}/>
            <label htmlFor='age'>Age (Years)</label>
            <input id='age' type='number' value={enteredAge || ''} onChange={ageChangeHandler} ref={ageInputRef}/>
           

           <Button type='submit'>Add User</Button>
        
    </form>
    </Card></Wrapper>)
    );
}
export default AddUser;