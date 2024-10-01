import { useAxios } from '@/contexts/AxiosContext';
import Counter from '../Home/Counter.tsx';
import AsyncCounter from '../Home/AsyncCounter.tsx';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const Home = () => {
  const axios = useAxios();

  const login = async () => {
    const a = await axios.post('/accounts/login', {
      email: 'email@example.com',
      password: 'qwer1324!',
    });
    console.log(a);
  };

  useEffect(() => {
    login();
  });

  return (
    <>
      <h1>{import.meta.env.VITE_APP_TITLE}</h1>

      <Button></Button>
      <Counter></Counter>
      <AsyncCounter></AsyncCounter>
      <div>Login</div>
    </>
  );
};

export default Home;
