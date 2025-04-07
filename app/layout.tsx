import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Layout",
}

export default function RootLayout({
  children,
  parallel,
}: Readonly<{
  children: React.ReactNode;
  parallel: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* {parallel} */}
      </body>
    </html>
  );
}
