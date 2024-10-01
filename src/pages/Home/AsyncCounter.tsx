import { useEffect } from 'react';
import { useCounterStore } from '@/store/useAsyncCounterStore.ts';

const AsyncCounter = () => {
  const { value, status, increment, decrement, incrementByAmount, fetchCounterValue } = useCounterStore();

  useEffect(() => {
    fetchCounterValue(5); // 컴포넌트가 마운트될 때 비동기 요청 실행
  }, [fetchCounterValue]);

  if (status === 'loading') return <p>Loading...</p>;

  return (
    <div>
      <h2>Counter: {value}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => incrementByAmount(5)}>Increment by 5</button>
    </div>
  );
};

export default AsyncCounter;
