import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import style from './assets/style/App.module.scss';
import { ExtendedForm } from './components/ExtendedForm';
import { InitialForm } from './components/InitialForm';

const App: FC = () => {

  return (
    <div className={style.siteContainer}>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/start'} />} />
        <Route path={'/start'} element={<InitialForm />} />
        <Route path={'/create'} element={<ExtendedForm />} />
      </Routes>
    </div>
  );
}

export default App;
