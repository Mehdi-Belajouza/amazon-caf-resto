export default function Home() {
  const pdfUrl = "/Amazon.pdf"; 

  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, overflow: "hidden" }}>
      <iframe
        src={pdfUrl}
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="PDF Viewer"
      />
    </div>
  );
}