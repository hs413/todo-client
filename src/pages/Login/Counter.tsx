import { useCounterStore } from '../../store/useCounterStore';

const Counter = () => {
  const { value, increment, decrement, incrementByAmount } = useCounterStore();

  return (
    <div>
      <h2>Counter: {value}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => incrementByAmount(5)}>Increment by 5</button>
    </div>
  );
};

export default Counter;
