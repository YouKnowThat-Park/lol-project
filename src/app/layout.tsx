export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div>안녕하세요</div>
        {children}
      </body>
    </html>
  );
}
