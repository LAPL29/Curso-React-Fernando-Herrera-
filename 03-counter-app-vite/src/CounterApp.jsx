import {useState} from 'react';
import PropTypes from 'prop-types';


export const CounterApp = ({ value }) => { //rafc snippet
    //Desestructuracion
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
    //   setCounter(counter + 1);
      setCounter((c) => c+1);
    }
    const handleRest = () => {
        //   setCounter(counter + 1);
          setCounter((c) => c-1);
    }
    const reset = () => {
        //   setCounter(counter + 1);
          setCounter((c) => c=value);
    }
 
    return (
        <>
            <h1>CounterAPP</h1>
            <h2>{counter}</h2>
            <p>{value}</p>
            <button onClick = {(handleAdd)}>+1</button>
            <button onClick = {(handleRest)}>-1</button>
            <button onClick = {(reset)}>Reset</button>
    
        </> 
    )
}
 
CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}


CounterApp.defaultProps = { //Valores por defecto
    value: 'No hay valor'
}




