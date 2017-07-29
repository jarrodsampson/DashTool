import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/css/General.css';
import router from './router';
import { Provider } from 'react-redux';
import store from './Store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Provider store={store}>{router}</Provider>, document.getElementById('TeamWorkRoot'));
registerServiceWorker();