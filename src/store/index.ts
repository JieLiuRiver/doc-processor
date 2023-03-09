import { UploadFile } from 'antd';
import { create } from 'zustand';

interface StoreType {
  docFile: UploadFile<any> | null;
  uUploadFile: (...args: any[]) => void;
}

const useStore = create<StoreType>((set) => ({
  docFile: null,
  uUploadFile: (file: UploadFile) => set(() => ({ docFile: file })),
}));

export default useStore;
