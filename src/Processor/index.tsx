import UploadTemplate from 'doc-processor/components/UploadTemplate/UploadTemplate';
import mammoth from 'mammoth/mammoth.browser';
import React, { type FC } from 'react';

const Processor: FC<{ title: string }> = () => {
  console.log({ mammoth });
  return (
    <>
      <UploadTemplate />
    </>
  );
};

export default Processor;
