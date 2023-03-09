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
