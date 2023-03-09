import { UploadOutlined } from '@ant-design/icons';
import { useLocalStorageState } from 'ahooks';
import { Button, Card, Upload, UploadFile, UploadProps } from 'antd';
import { DOC_STORAGE_KEY } from 'doc-processor/constants';
import useStore from 'doc-processor/store';
import React, { useState } from 'react';

export default function UploadTemplate() {
  const store = useStore((state) => state);
  const [uploading, setUploading] = useState(false);
  const [, setDocFile] = useLocalStorageState<UploadFile | null>(
    DOC_STORAGE_KEY,
    {
      defaultValue: null,
    },
  );
  const props: UploadProps = {
    name: 'file',
    maxCount: 1,
    accept:
      '.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    onChange(info) {
      const { status } = info?.file || {};
      if (status === 'done') {
        setDocFile(info.file);
        store.uUploadFile(info.file);
        setUploading(false);
      } else {
        if (!uploading) setUploading(true);
      }
    },
    onDrop: (event) => console.log(event),
  };
  return (
    <Card title="Upload Word Template" bordered={false}>
      <Upload {...props}>
        <Button loading={uploading} icon={<UploadOutlined />}>
          Click to Upload
        </Button>
      </Upload>
    </Card>
  );
}
