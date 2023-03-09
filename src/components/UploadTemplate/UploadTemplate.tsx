import { UploadOutlined } from '@ant-design/icons';
import { Button, Card, Upload, UploadProps } from 'antd';
import React, { useState } from 'react';

export default function UploadTemplate() {
  const [uploading, setUploading] = useState(false);
  const props: UploadProps = {
    name: 'file',
    maxCount: 1,
    accept:
      '.doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    onChange(info) {
      const { status } = info?.file || {};
      if (status === 'done') {
        console.log('info.file', info.file);
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
