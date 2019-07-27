import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/home.js';
<<<<<<< HEAD

// 引入mobx
import {Provider} from 'mobx-react';
import store from './store'


=======
// 引入mobx
import {Provider} from 'mobx-react';
import store from './store'
>>>>>>> dev
ReactDOM.render(<Provider {...store}>
        <Home />
    </Provider>, document.getElementById('root'));