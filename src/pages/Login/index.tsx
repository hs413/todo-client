import { useAxios } from '@/contexts/AxiosContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const axios = useAxios();
  const [email, setEmail] = useState('email@example.com'); // 이메일 상태 관리
  const [password, setPassword] = useState('qwer1324!'); // 비밀번호 상태 관리
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('/accounts/login', {
        email,
        password,
      });
      console.log(response);

      const { accessToken, refreshToken } = response.data;
      // localStorage.setItem('token', token); // 로컬 스토리지에 토큰 저장
      console.log(accessToken);
      console.log(refreshToken);

      // 로그인 성공 시 메인 페이지로 이동
      navigate('/home');
    } catch (error) {
      console.error('로그인 실패:', error);
      alert('로그인 실패. 다시 시도해주세요.');
    }
  };

  return (
    <>
      <div className='d-flex justify-content-center align-items-center vh-100'>
        <div className='card p-4' style={{ width: '350px' }}>
          <h2 className='text-center mb-4'>로그인</h2>

          <form onSubmit={handleLogin}>
            {/* 이메일 입력 폼 */}
            <div className='form-group mb-3'>
              <label htmlFor='email'>이메일</label>
              <input
                type='email'
                className='form-control'
                id='email'
                placeholder='이메일을 입력하세요'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            {/* 비밀번호 입력 폼 */}
            <div className='form-group mb-3'>
              <label htmlFor='password'>비밀번호</label>
              <input
                type='password'
                className='form-control'
                value={password}
                id='password'
                placeholder='비밀번호를 입력하세요'
                onChange={e => setPassword(e.target.value)}
                required
              />
            </div>

            {/* 로그인 버튼 */}
            <button type='submit' className='btn btn-primary w-100 mb-3'>
              로그인
            </button>

            {/* 회원가입 링크 */}
            <div className='text-center'>
              <small>
                <a href='/signup' className='text-muted'>
                  회원가입
                </a>
              </small>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
