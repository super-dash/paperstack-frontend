import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';

document.title = '超自然作业派';

ReactDOM.render(<App baseUrl={window.location.pathname}/>, document.getElementById('root'));
