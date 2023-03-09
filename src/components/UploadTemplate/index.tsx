import { Card } from 'antd';
import { DOC_ACCECT } from 'doc-processor/constants';
import useStore from 'doc-processor/store';
import React from 'react';

export default function UploadTemplate() {
  const store = useStore((state) => state);
  return (
    <Card title="Upload Word Template" bordered={false}>
      <input
        onChange={(event: any) => {
          if (event?.target?.files?.length) {
            const file = event.target.files[0];
            store.uUploadFile(file);
          }
        }}
        type="file"
        accept={DOC_ACCECT}
        max={1}
      />
    </Card>
  );
}
