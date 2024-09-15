import React from 'react';
import DrawerNavigator from './components/routes';
import Store from './store';
import { Provider } from 'react-redux';
const App = () => {
    return (
        <Provider store={Store}>
            <DrawerNavigator />
        </Provider>

    );
}
export default App;
