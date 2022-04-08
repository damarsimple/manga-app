export const renderOn = [/^\/admin/];
export const dontRender = [/^\/admin/, /^\/login/, /^\/register/];
export const dontRenderContext = [...dontRender, /^\/comic/, /^\/chapter/];
export const dontRenderFooter = [
  ...dontRender,
  /^\/dashboard/,
];
