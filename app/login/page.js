'use client';

export default function Login(){

  return(

    <div style={{
      minHeight:'100vh',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>

      <div style={{
        width:'320px',
        background:'#132235',
        padding:'30px',
        borderRadius:'20px'
      }}>

        <h1>Member Login</h1>

        <input
          placeholder="Email"
          style={{
            width:'100%',
            padding:'14px',
            marginTop:'20px'
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width:'100%',
            padding:'14px',
            marginTop:'10px'
          }}
        />

        <button style={{
          width:'100%',
          padding:'14px',
          marginTop:'20px',
          background:'#2dd4bf',
          border:'none',
          borderRadius:'10px'
        }}>
          Login
        </button>

      </div>

    </div>

  )
}
