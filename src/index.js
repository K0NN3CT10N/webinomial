import React from 'react';
import ReactDOM from 'react-dom';

import MyCard from './components_2/MyCard';

// const theme = createTheme({
//   palette: {
//     primary: {
//       // Purple and green play nicely together.
//       main:  '#11cb5f',
//     },
//     secondary: {
//       // This is green.A700 as hex.
//       main: '#11cb5f',
//     },
//   },
// });

ReactDOM.render(
  <React.StrictMode>
    <MyCard/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals