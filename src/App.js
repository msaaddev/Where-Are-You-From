import React, { useState, useEffect } from 'react';
import axiox from 'axios';
import './App.css';

function App() {
    const [countryInfo, setCountryInfo] = useState('');

    useEffect(() => {
        (async () => {
            const { data } = await axiox.get('http://ipwhois.app/json/');
            setCountryInfo(data);
        })();
    }, []);

    return (
        <div className='container'>
            <div className='countryInfo'>
                <h1>{` You are living in ${countryInfo.country} 😈`}</h1>
            </div>
        </div>
    );
}

export default App;
