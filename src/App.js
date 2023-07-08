
import React, { useState } from 'react';
import './App.css';



const App = () => {
    const ENTER_KEY = 13;
    const SCAPE_KEY = 27
    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const erase = () => {
        setValue('');
    }

    const submit = () => {
        console.log(value)
        setValue(value);
        erase();
    }

    const onKeyDown = (event) => {
        if (event.which === ENTER_KEY) {
            submit();
        } else if (event.which === SCAPE_KEY) {
            erase();
        }
    }

    return (
        <section id="app" className="container">
            <header>
                <h1 className='title'>TODO</h1>
            </header>
            <section className="main">
                <input className='new-todo' placeholder='O que precisa ser feito?' value={value}
                    onChange={onChange} onKeyDown={onKeyDown} />
            </section>
        </section>
    );
};
export default App;
