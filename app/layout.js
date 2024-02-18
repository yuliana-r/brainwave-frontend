import "./globals.css";

export const metadata = {
  title: "Brainwave | Home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
