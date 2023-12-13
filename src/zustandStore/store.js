import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';
const useUserStore = create(
  immer(set => ({
    user: {
      id: null,
      username: '',
      email: '',
    },
    setUser: newUser => set(state => ({user: newUser})),
    logout: () => set(state => ({user: null})),
  })),
);

export default useUserStore;
