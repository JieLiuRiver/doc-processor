import PizZipUtils from 'pizzip/utils/index.js';

export function readFileAsArrayBuffer(file: File): Promise<Buffer> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = function (loadEvent: any) {
      const arrayBuffer = loadEvent.target.result;
      resolve(arrayBuffer);
    };
    reader.readAsArrayBuffer(file);
  });
}

export async function loadFile(url: string) {
  return new Promise((resolve) => {
    PizZipUtils.getBinaryContent(url, resolve);
  });
}
