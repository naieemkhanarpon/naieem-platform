export default function Dashboard(){

  return(

    <div style={{padding:'50px'}}>

      <h1>Volunteer Dashboard</h1>

      <div style={{
        marginTop:'30px',
        display:'grid',
        gap:'20px'
      }}>

        <div style={{
          background:'#132235',
          padding:'20px',
          borderRadius:'16px'
        }}>
          Total Volunteers
        </div>

        <div style={{
          background:'#132235',
          padding:'20px',
          borderRadius:'16px'
        }}>
          Campaign Analytics
        </div>

        <div style={{
          background:'#132235',
          padding:'20px',
          borderRadius:'16px'
        }}>
          Area Management
        </div>

      </div>

    </div>

  )
}
