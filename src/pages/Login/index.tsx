import { useAxios } from '@/contexts/AxiosContext';
import Counter from './Counter.tsx';
import { useEffect } from 'react';

const Login = () => {
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
      <Counter></Counter>
      <div>Login</div>
    </>
  );
};

export default Login;
