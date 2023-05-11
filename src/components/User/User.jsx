const USER = {
    name:"Tomas LT",
    avatar:'https://i.imgur.com/yXOvdOSs.jpg',
    age: 30,
};
const userStyle ={
    color: "red",
    textTransform: "uppercase"
}
const imgStyle ={
    width: "100px",
    height: "100px",
}

export const User = () => {
    return(
        <>
            <h2>Mostrar Datos</h2>
            <p style={userStyle}>Nombre de usuario: {USER.name}</p>
            <img style={imgStyle} src={USER.avatar} alt="" />
            <p>Edad: {USER.age}</p>
        </>
    )
}