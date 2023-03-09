declare module 'mammoth/mammoth.browser' {
  export function convertToHtml(
    file: File | Buffer,
    options?: any,
  ): Promise<any>;
  export function convertToMarkdown(
    file: File | Buffer,
    options?: any,
  ): Promise<any>;
}
