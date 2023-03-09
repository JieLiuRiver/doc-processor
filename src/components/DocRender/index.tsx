import { useMount } from 'ahooks';
import { message } from 'antd';
import useStore from 'doc-processor/store';
import { readFileAsArrayBuffer } from 'doc-processor/utils';
import mammoth from 'mammoth/mammoth.browser';
import React from 'react';

export default function DocRender() {
  const { docFile } = useStore((state) => state);
  useMount(async () => {
    if (!docFile) return;
    try {
      const arrayBuffer = await readFileAsArrayBuffer(docFile);
      const result = await mammoth.convertToHtml({ arrayBuffer } as any);
      console.log(result);
    } catch (error) {
      message.error('get doc file fail');
      console.log(error);
    }
  });
  console.log({ docFile, mammoth });
  return <div>DocRender</div>;
}
