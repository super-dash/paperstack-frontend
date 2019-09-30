import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'antd/dist/antd.css';

document.title = '超自然作业派';

(function judgeMobile() {
  const ua = window.navigator.userAgent.toLowerCase();
  const isAndroid = ua.indexOf('android') > -1 || ua.indexOf('adr') > -1;
  const isIOS = !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i);
  if (isAndroid || isIOS) {
    document.body.classList.add('mobile');
  }
})();

ReactDOM.render(<App baseUrl={window.location.pathname}/>, document.getElementById('root'));
