import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAxios } from '@/contexts/AxiosContext.tsx';
import { Table, Button } from 'react-bootstrap';

interface Todo {
  id: number;
  title: string;
  status: string;
  priority: string;
  createdAt: string;
}

const TodoList: React.FC = () => {
  const axios = useAxios();
  const [page, setPage] = useState(0);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error] = useState<string | null>(null);
  const navigate = useNavigate();

  const load = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`/todos?page=${page}`);
      const { content, last } = response.data;
      console.log(content);
      console.log(last);
      setTodos(content);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, [page]);

  if (loading) return <div>로딩 중...</div>; // 로딩 중일 때 표시할 컴포넌트
  if (error) return <div>{error}</div>; // 에러가 발생했을 때 표시할 컴포넌트

  return (
    <>
      <div>
        <h2>할일 리스트</h2>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>제목</th>
              <th>상태</th>
              <th>날짜</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={todo.id}>
                <td>{index + 1}</td>
                {/* 리스트 순서 */}
                <td>
                  <Button variant='link' onClick={() => navigate(`/todos/${todo.id}`)}>
                    {todo.title}
                  </Button>
                </td>
                <td>{todo.status}</td>
                <td>{todo.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <div className='d-flex justify-content-between'>
          <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
            이전 페이지
          </Button>
          <Button onClick={() => setPage(page + 1)}>다음 페이지</Button>
        </div>
      </div>
    </>
  );
};

export default TodoList;
