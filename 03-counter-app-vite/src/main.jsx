import React from 'react';
import ReactDOM from 'react-dom/client';
// import {HelloWorldApp} from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
// import { CounterApp } from './CounterApp';
import { MineApp } from './example';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
     <MineApp />
      {/* <CounterApp value = {20}/>  */}
   </React.StrictMode>
);
















