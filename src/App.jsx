import React from 'react';
import { AppRouter } from './routers/AppRouter';
import { LoginForm } from '../src/components/auth/LoginForm';
import { RegisterForm } from '../src/components/auth/RegisterForm';

function App() {

    const loginVisible= false;
    const RegisterVisible = false;


  return (
    <div className="App">
        {(loginVisible) && <LoginForm/>}
        {(RegisterVisible) && <RegisterForm/>}
        <AppRouter/>
    </div>
  );
}

export default App;
