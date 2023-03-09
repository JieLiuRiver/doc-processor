import { create } from 'zustand';

interface StoreType {
  docFile: File | null;
  uUploadFile: (...args: any[]) => void;

  docHtmlString: string;
  uDocHtmlString: (...args: any[]) => void;
}

const useStore = create<StoreType>((set) => ({
  docFile: null,
  uUploadFile: (file: File) => set(() => ({ docFile: file })),

  docHtmlString: '',
  uDocHtmlString: (docHtmlString: string) => set(() => ({ docHtmlString })),
}));

export default useStore;
