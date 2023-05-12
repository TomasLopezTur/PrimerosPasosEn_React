import "./Button.css"

export const Button = (props) => {
    return <button className={props.className}  /* style={{backgroundColor: "red"}} */>{props.text}</button>;
}
