import DocRender from 'doc-processor/components/DocRender';
import UploadTemplate from 'doc-processor/components/UploadTemplate';
import useStore from 'doc-processor/store';
import React, { type FC } from 'react';

const Processor: FC<{ title: string }> = () => {
  const store = useStore((state) => state);
  console.log('store', store);
  return <>{store.docFile ? <DocRender /> : <UploadTemplate />}</>;
};

export default Processor;
