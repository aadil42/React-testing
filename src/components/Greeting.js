import { useState } from 'react';
import Output from './Output';

const Greeting = () => {

    const [changed, setChanged] = useState(false);

    const changeText = () => {
        setChanged(true);
    }

    return (
        <div>
            <h2>Hello World!</h2>
            {changed && <Output>Changed!</Output>}
            {!changed && <Output>It's good to see you!</Output>}
            <button onClick={changeText}>Click</button>
        </div>
    );
}

export default Greeting;