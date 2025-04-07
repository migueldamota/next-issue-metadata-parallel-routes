import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Layout",
}

export default function RootLayout({
  children,
  routes,
}: Readonly<{
  children: React.ReactNode;
  routes: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* {children} */}
        {routes}
      </body>
    </html>
  );
}
