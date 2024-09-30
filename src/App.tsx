/*import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';*/
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { AxiosProvider } from './contexts/AxiosContext';
import router from './router';

const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <>
      <h1>{import.meta.env.VITE_APP_TITLE}</h1>
      <AxiosProvider>
        <RouterProvider router={router} />
      </AxiosProvider>
      {/*<div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>*/}
    </>
  );
};

export default App;
