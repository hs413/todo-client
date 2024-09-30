import { useAxios } from '@/contexts/AxiosContext';

const Login = () => {
  const axios = useAxios();

  const a = axios.get('/');
  console.log(a);

  return (
    <>
      <div>Login</div>
    </>
  );
};

export default Login;
