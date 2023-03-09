import { useLocalStorageState, useMount } from 'ahooks';
import { UploadFile } from 'antd';
import DocRender from 'doc-processor/components/DocRender';
import UploadTemplate from 'doc-processor/components/UploadTemplate/UploadTemplate';
import { DOC_STORAGE_KEY } from 'doc-processor/constants';
import useStore from 'doc-processor/store';
import React, { type FC } from 'react';

const Processor: FC<{ title: string }> = () => {
  const store = useStore((state) => state);
  const [docFile] = useLocalStorageState<UploadFile | null>(DOC_STORAGE_KEY, {
    defaultValue: null,
  });
  useMount(() => {
    if (docFile) store.uUploadFile(docFile);
  });
  return <>{store.docFile ? <DocRender /> : <UploadTemplate />}</>;
};

export default Processor;
