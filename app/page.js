export default function Home() {

  return (

    <main style={{
      minHeight:'100vh',
      background:'#07111f',
      color:'white',
      padding:'40px'
    }}>

      <h1 style={{
        fontSize:'64px'
      }}>
        Naieem Political Platform
      </h1>

      <p style={{
        marginTop:'20px',
        maxWidth:'700px',
        lineHeight:'1.8'
      }}>
        Political campaign platform powered by youth,
        transparency and innovation.
      </p>

      <div style={{
        marginTop:'40px',
        display:'flex',
        gap:'20px',
        flexWrap:'wrap'
      }}>

        <a href="/login">Login</a>

        <a href="/dashboard">Dashboard</a>

        <a href="/admin">Admin</a>

        <a href="/map">Political Map</a>

      </div>

    </main>

  )

}
