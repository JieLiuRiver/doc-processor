import { useMount } from 'ahooks';
import { message } from 'antd';
import useStore from 'doc-processor/store';
import { readFileAsArrayBuffer } from 'doc-processor/utils';
// import mammoth from 'mammoth/mammoth.browser';
import React from 'react';
// import Docxtemplater from "docxtemplater";
import { DOMParser } from '@xmldom/xmldom';
import PizZip from 'pizzip';
import ContentEditable from '../ContentEditable';
// import ReactQuill from '../Quill';

function str2xml(str: string) {
  if (str.charCodeAt(0) === 65279) {
    // BOM sequence
    // eslint-disable-next-line no-param-reassign
    str = str.substr(1);
  }
  return new DOMParser().parseFromString(str, 'text/xml');
}

export default function DocRender() {
  const { docFile, docHtmlString, uDocHtmlString } = useStore((state) => state);
  useMount(async () => {
    if (!docFile) return;
    try {
      const arrayBuffer = await readFileAsArrayBuffer(docFile);
      // const result = await mammoth.convertToHtml({ arrayBuffer } as any);
      // uDocHtmlString(result?.value || '');
      const zip = new PizZip(arrayBuffer);
      const xml = str2xml(zip.files['word/document.xml'].asText());
      const paragraphsXml = xml.getElementsByTagName('w:p');
      const paragraphs = [];
      for (let i = 0, len = paragraphsXml.length; i < len; i++) {
        let fullText = '';
        const textsXml = paragraphsXml[i].getElementsByTagName('w:t');
        for (let j = 0, len2 = textsXml.length; j < len2; j++) {
          const textXml = textsXml[j];
          if (textXml.childNodes) {
            fullText += textXml.childNodes[0].nodeValue;
          }
        }

        paragraphs.push(fullText);
      }
      // const doc = new Docxtemplater().loadZip(zip)
      // doc.compile()
      console.log('paragraphs', paragraphs, 'paragraphsXml', paragraphsXml);
      // console.log('res', res)
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
