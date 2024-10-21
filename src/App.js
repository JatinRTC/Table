import React from 'react';
import { Provider } from 'react-redux';
import store from './store.js';
import UsersTable from './component/Table';

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ padding: '20px' }}>
        <h2>User Management</h2>
        <UsersTable />
      </div>
    </Provider>
  );
};

export default App;
