export const metadata = {
  title: 'Naieem Political Platform',
  description: 'Political Campaign Platform'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin:0,
        fontFamily:'Arial',
        background:'#07111f',
        color:'white'
      }}>
        {children}
      </body>
    </html>
  );
}
