// import { Fragment } from 'react'

// const newMessage = {
    
//     message: 'hola mundo',
//     title: 'Luis'
// }

function Suma(num1,num2){
    return num1 + num2;
}

function saludar(nom){
    return ` ${nom}`;
}

// Componentes Funcionales:
export const FirstApp = ( {title, subTitle} ) => { //raf snippet
    // console.log(props);
    return ( // Es lo mismo que un fragmento no ocupa importar lo de arriba es un nodo padre
        <>
            <h1>{title}</h1>
            {/* <h1>{saludar('Luis')}</h1> */}
            {/* <h1>La suma es : {Suma(10,20)}</h1> */}
            {/* <code>{ JSON.stringify(newMessage) }</code>  Si deseas mostrar un objeto se pude mostrar con esta linea */}
            {/* <p>Soy un subtitulo</p>  */}
            <p>{subTitle}</p> 
        </>
    )
}
