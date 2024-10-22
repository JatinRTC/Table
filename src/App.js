import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import UsersTable from './component/Table';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px', textAlign:'center' }}>
        <h2>TABLE USERS</h2>
        <UsersTable />
      </div>
    </Provider>
  );
};

export default App;
