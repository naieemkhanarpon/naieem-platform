export default function Home() {
  return (
    <main style={{
      minHeight:'100vh',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      background:'#07111f',
      color:'white',
      textAlign:'center',
      padding:'40px'
    }}>
      <h1 style={{fontSize:'64px'}}>
        Naieem Political Platform
      </h1>

      <p style={{
        marginTop:'20px',
        maxWidth:'700px',
        lineHeight:'1.8'
      }}>
        A modern political movement powered by youth,
        technology and transparency.
      </p>
    </main>
  );
}
