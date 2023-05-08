import "../styles/globals.css";

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

        <main className="app">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
