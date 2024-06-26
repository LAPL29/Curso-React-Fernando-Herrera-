import { useEffect, useState } from "react"
import { Message } from "./Message";


export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        username: 'LuisPeraz',
        email: 'luisPeraza@gmai.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }



    useEffect(() => {
        // console.log('useEffect');
    }, []); // [] empty array to run only once when the component is mounted

    useEffect(() => {
        // console.log('formState changed');
    }, [formState]);

    useEffect(() => {
        // console.log('email changed');
    }, [email]);


    return (
        <>
            <h1>Simple Form</h1>
            <hr />

            <input type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}

            />

            <input type="email"
                className="form-control mt-2"
                placeholder="LuisPeraza@gmai.com"
                name="email"
                value={email}
                onChange={onInputChange}

            />

            {
                (username === 'LuisPeraza') && <Message />
            }

        </>
    )
}
