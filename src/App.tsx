import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import style from './assets/style/App.module.scss';
import { ExtendedForm } from './components/ExtendedForm';
import { InitialForm } from './components/InitialForm';

const App = () => {

  return (
    <div className={style.siteContainer}>
      <InitialForm />
    </div>
  );
}

export default App;
