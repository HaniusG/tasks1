import React from 'react';
import ReactDOM from 'react-dom';
import { func } from './func';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <h1>{func()}</h1> )