import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';
import ReactDOM from 'react-dom'

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onConfirm}></div>

    );
}
const Overlay = (props) => {
    return <React.Fragment>
        <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card>
    </React.Fragment>
}
const ErrorModal = (props) => {

    return (<React.Fragment>
        {/* <div className={classes.backdrop} onClick={props.onConfirm}></div> 
        <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
            <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
    </Card> */}
        {
            ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />,
                document.getElementById('backdrop-root'))
        }
        {
            ReactDOM.createPortal(<Overlay title={props.title} message={props.message} onConfirm={props.onConfirm} />,
                document.getElementById('overlay-root'))
        }

    </React.Fragment>)
}
export default ErrorModal;
