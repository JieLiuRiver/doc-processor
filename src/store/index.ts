import { create } from 'zustand';

interface StoreType {
  docFile: File | null;
  uUploadFile: (...args: any[]) => void;
}

const useStore = create<StoreType>((set) => ({
  docFile: null,
  uUploadFile: (file: File) => set(() => ({ docFile: file })),
}));

export default useStore;
