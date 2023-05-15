import "../styles/globals.css";
import Nav from "@components/Nav";
export const metadata = {
  title: "mindshare",
  description: "Discover AI Prompts",
};

function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />

          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
