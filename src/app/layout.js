import "./globals.css";
import "./Header.css";

export const metadata = {
  title: "Hello World!",
  description: "A basic application that says Hello World!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
