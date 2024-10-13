import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAxios } from '@/contexts/AxiosContext.tsx';

interface Todo {
  id: number;
  title: string;
  description: string;
  status: string;
  priority: string;
  createdAt: string;
}

const TodoDetail: React.FC = () => {
  const axios = useAxios();
  const [todo, setTodo] = useState<Todo>();
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = useParams<{ id: string }>();

  const load = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/todos/${id}`);
      const { data } = response;
      console.log(data);
      setTodo(data);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  if (loading || !todo) return <div>로딩 중...</div>; // 로딩 중일 때 표시할 컴포넌트

  return (
    <>
      <div>
        <h2>할일 </h2>
        <div>{todo.title}</div>
        <div>{todo.status}</div>
        <div>{todo.createdAt}</div>
      </div>
    </>
  );
};

export default TodoDetail;
