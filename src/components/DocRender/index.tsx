import useStore from 'doc-processor/store';
import mammoth from 'mammoth/mammoth.browser';
import React from 'react';

export default function DocRender() {
  const { docFile } = useStore((state) => state);
  console.log({ docFile, mammoth });
  return <div>DocRender</div>;
}
