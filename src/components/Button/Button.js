import "./Button.css"

export const Button = (props) => {
    return <button className={props.className} onClick={props.handleClick} /* style={{backgroundColor: "red"}} */>{props.text}</button>;
}
