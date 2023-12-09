import React, {useState} from "react";

const Main = () => {

    const [search, setSearch] = useState('');


    return (
        <div className='main'>
            <p>Enter your name:</p>
            <input type='text' placeholder='' value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
            {search&& <p>Helloo {search}!</p>}
        </div>
    )
}

export default Main;