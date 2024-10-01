import { create } from 'zustand';
import api from '@/services/axios';

// 상태와 액션을 정의하는 Zustand store 생성
interface CounterState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
  increment: () => void;
  decrement: () => void;
  incrementByAmount: (amount: number) => void;
  fetchCounterValue: (amount: number) => Promise<void>;
}

export const useCounterStore = create<CounterState>(set => ({
  value: 0,
  status: 'idle',
  increment: () => set(state => ({ value: state.value + 1 })),
  decrement: () => set(state => ({ value: state.value - 1 })),
  incrementByAmount: (amount: number) => set(state => ({ value: state.value + amount })),
  fetchCounterValue: async () => {
    set({ status: 'loading' });
    try {
      const response = await api.post('/accounts/login', {
        email: 'email@example.com',
        password: 'qwer1324!',
      });
      const { data } = response;
      console.log(data);
      set({ value: data.accessToken, status: 'idle' });
    } catch (error) {
      console.log(error);
      set({ status: 'failed' });
    }
  },
}));
