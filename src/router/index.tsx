import { createBrowserRouter } from 'react-router-dom';
import Login from '@/pages/Login';
import Home from '@/pages/Home';
import TodoList from '@/pages/Todo/TodoList';
import TodoDetail from '@/pages/Todo/TodoDetail';

const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/todos',
    element: <TodoList />,
  },
  {
    path: '/todos/:id',
    element: <TodoDetail />,
  },
]);

export default AppRouter;
