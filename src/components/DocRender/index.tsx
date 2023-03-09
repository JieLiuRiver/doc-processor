import { useMount } from 'ahooks';
import { message } from 'antd';
import useStore from 'doc-processor/store';
import { readFileAsArrayBuffer } from 'doc-processor/utils';
import mammoth from 'mammoth/mammoth.browser';
import React from 'react';
import ContentEditable from '../ContentEditable';
// import ReactQuill from '../Quill';

export default function DocRender() {
  const { docFile, docHtmlString, uDocHtmlString } = useStore((state) => state);
  useMount(async () => {
    if (!docFile) return;
    try {
      const arrayBuffer = await readFileAsArrayBuffer(docFile);
      const result = await mammoth.convertToHtml({ arrayBuffer } as any);
      uDocHtmlString(result?.value || '');
      console.log(result);
    } catch (error) {
      message.error('get doc file fail');
      console.log(error);
    }
  });
  return (
    <>
      <div>
        <ContentEditable
          html={docHtmlString}
          onChange={(evt) => {
            uDocHtmlString(evt.target.value);
          }}
        />
      </div>
    </>
  );
}
