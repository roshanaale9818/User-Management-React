import { React } from 'react';
import classes from './UserList.module.css';
import Card from '../UI/Card';
const UserList = (props) => {
    console.log("PROPS IN USERLIST", props)
    return (<Card className={classes.users}>
        <ul>
        {props.users.map((user,index) => (
            <li key={user.id}>{user.name}({user.age}) years old</li>
           
        ))}
    </ul>
    </Card>)
}
export default UserList;
