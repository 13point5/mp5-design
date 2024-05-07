type Props = {
  html: string;
  css: string;
  js: string;
};

const LivePreview = ({ html, css, js }: Props) => {
  const srcDoc = `<html>
  <head><style>${css}</style></head>
  <body>${html}<script>${js}</script></body>
  </html>`;

  return (
    <iframe
      title="preview"
      srcDoc={srcDoc}
      style={{ width: "100%", height: "400px", border: "none" }}
    />
  );
};

export default LivePreview;
