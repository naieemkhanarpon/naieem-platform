export default function Admin(){

  return(

    <div style={{padding:'50px'}}>

      <h1>News & Blog Admin Panel</h1>

      <textarea
        placeholder="Write article..."
        style={{
          width:'100%',
          minHeight:'300px',
          marginTop:'20px',
          padding:'20px',
          background:'#132235',
          color:'white'
        }}
      />

      <button style={{
        marginTop:'20px',
        padding:'14px 24px',
        background:'#2dd4bf',
        border:'none',
        borderRadius:'10px'
      }}>
        Publish
      </button>

    </div>

  )
}
