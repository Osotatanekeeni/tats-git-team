import "./globals.css";

export const metadata = {
  title: "ACA Team Hub",
  description: "Africa Code Academy — Git/GitHub Lab Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
