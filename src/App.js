import React from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import Routes from './Routes';

function App() {
    return (
    // <div className="App">
    //     <Home />
    //     <Footer />
    // </div>
        <Provider store={Store}>
            <Routes />
        </Provider>
    );
}

export default App;
