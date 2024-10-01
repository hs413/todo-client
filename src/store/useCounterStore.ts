import { create } from 'zustand';

// 상태와 액션을 정의하는 Zustand store 생성
interface CounterState {
  value: number;
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (amount: number) => void;
}

export const useCounterStore = create<CounterState>(set => ({
  value: 0,
  increment: () => set(state => ({ value: state.value + 1 })),
  decrement: () => set(state => ({ value: state.value - 1 })),
  incrementByAmount: (amount: number) => set(state => ({ value: state.value + amount })),
}));
