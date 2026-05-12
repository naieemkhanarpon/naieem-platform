export default function Home() {

  return (

    <main style={{
      minHeight:'100vh',
      background:'#020817',
      color:'white',
      overflow:'hidden',
      fontFamily:'Arial, sans-serif'
    }}>

      {/* NAVBAR */}

      <nav style={{
        position:'fixed',
        top:0,
        width:'100%',
        zIndex:1000,
        backdropFilter:'blur(14px)',
        background:'rgba(2,8,23,0.7)',
        borderBottom:'1px solid rgba(255,255,255,0.06)'
      }}>

        <div style={{
          maxWidth:'1200px',
          margin:'auto',
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          padding:'20px'
        }}>

          <div>

            <h2 style={{
              fontSize:'32px',
              fontWeight:'800',
              color:'#14b8a6',
              margin:0
            }}>
              NAIEEM
            </h2>

            <p style={{
              color:'#94a3b8',
              fontSize:'13px',
              marginTop:'4px'
            }}>
              POLITICAL PLATFORM
            </p>

          </div>

          <div style={{
            color:'#14b8a6',
            fontSize:'32px'
          }}>
            ☰
          </div>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section style={{
        minHeight:'100vh',
        display:'flex',
        alignItems:'center',
        padding:'120px 24px 80px',
        position:'relative',
        overflow:'hidden',
        background:'#020817'
      }}>

        {/* BACKGROUND */}

        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600&auto=format&fit=crop"
          alt=""
          style={{
            position:'absolute',
            width:'100%',
            height:'100%',
            objectFit:'cover',
            opacity:'0.18',
            top:0,
            left:0
          }}
        />

        {/* OVERLAY */}

        <div style={{
          position:'absolute',
          inset:0,
          background:'linear-gradient(rgba(2,8,23,0.7),rgba(2,8,23,0.95))'
        }}></div>

        <div style={{
          maxWidth:'1200px',
          margin:'auto',
          width:'100%',
          position:'relative',
          zIndex:2,
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',
          gap:'50px',
          alignItems:'center'
        }}>

          {/* LEFT SIDE */}

          <div>

            <div style={{
              display:'inline-flex',
              alignItems:'center',
              gap:'10px',
              padding:'10px 18px',
              border:'1px solid rgba(20,184,166,0.4)',
              borderRadius:'999px',
              background:'rgba(255,255,255,0.04)',
              marginBottom:'24px'
            }}>

              <span style={{
                width:'12px',
                height:'12px',
                borderRadius:'50%',
                background:'#16a34a'
              }}></span>

              <span style={{
                color:'#cbd5e1',
                fontSize:'14px'
              }}>
                A NEW VISION FOR BANGLADESH
              </span>

            </div>

            <h1 style={{
              fontSize:'clamp(56px,10vw,100px)',
              lineHeight:'0.95',
              fontWeight:'900',
              margin:0
            }}>
              Naieem <br/>

              <span style={{
                color:'#14b8a6'
              }}>
                Political
              </span>

              <br/>

              Platform
            </h1>

            <p style={{
              marginTop:'28px',
              color:'#cbd5e1',
              lineHeight:'1.8',
              maxWidth:'600px',
              fontSize:'20px'
            }}>
              Building a modern, transparent and prosperous
              Bangladesh through youth power,
              technology and good governance.
            </p>

            {/* BUTTONS */}

            <div style={{
              marginTop:'40px',
              display:'flex',
              gap:'18px',
              flexWrap:'wrap'
            }}>

              <a
                href="/dashboard"
                style={{
                  background:'#14b8a6',
                  color:'#02131f',
                  padding:'18px 34px',
                  borderRadius:'999px',
                  textDecoration:'none',
                  fontWeight:'700',
                  fontSize:'18px',
                  boxShadow:'0 15px 40px rgba(20,184,166,0.3)'
                }}
              >
                Join The Movement →
              </a>

              <a
                href="/admin"
                style={{
                  border:'1px solid rgba(255,255,255,0.12)',
                  padding:'18px 34px',
                  borderRadius:'999px',
                  textDecoration:'none',
                  color:'white',
                  background:'rgba(255,255,255,0.04)',
                  fontWeight:'600',
                  fontSize:'18px'
                }}
              >
                Watch Vision
              </a>

            </div>

            {/* STATS */}

            <div style={{
              marginTop:'60px',
              display:'grid',
              gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',
              gap:'20px'
            }}>

              {

                [
                  ['10K+','Volunteers'],
                  ['64','Districts'],
                  ['100%','Transparency'],
                  ['Secure','Platform']
                ]

                .map((item,index)=>(

                  <div
                    key={index}
                    style={{
                      background:'rgba(255,255,255,0.05)',
                      border:'1px solid rgba(255,255,255,0.06)',
                      padding:'28px',
                      borderRadius:'24px',
                      backdropFilter:'blur(10px)'
                    }}
                  >

                    <h2 style={{
                      fontSize:'34px',
                      color:'#14b8a6',
                      margin:0
                    }}>
                      {item[0]}
                    </h2>

                    <p style={{
                      marginTop:'10px',
                      color:'#cbd5e1'
                    }}>
                      {item[1]}
                    </p>

                  </div>

                ))

              }

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div style={{
            position:'relative',
            display:'flex',
            justifyContent:'center'
          }}>

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/National_Martyrs%27_Memorial.jpg/1280px-National_Martyrs%27_Memorial.jpg"
              alt="Bangladesh"
              style={{
                width:'100%',
                maxWidth:'540px',
                borderRadius:'30px',
                objectFit:'cover',
                boxShadow:'0 30px 80px rgba(0,0,0,0.45)'
              }}
            />

            {/* BANGLADESH FLAG */}

            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg"
              alt="Flag"
              style={{
                position:'absolute',
                width:'140px',
                right:'-20px',
                top:'-20px',
                borderRadius:'16px',
                boxShadow:'0 20px 60px rgba(0,0,0,0.4)'
              }}
            />

          </div>

        </div>

      </section>

      {/* VISION SECTION */}

      <section style={{
        padding:'100px 24px',
        background:'#020617'
      }}>

        <div style={{
          maxWidth:'1200px',
          margin:'auto'
        }}>

          <p style={{
            color:'#14b8a6',
            letterSpacing:'3px',
            marginBottom:'20px'
          }}>
            OUR VISION
          </p>

          <h2 style={{
            fontSize:'clamp(42px,7vw,72px)',
            lineHeight:'1.1',
            margin:0
          }}>
            Building A Better
            <span style={{color:'#14b8a6'}}>
              {' '}Bangladesh
            </span>
          </h2>

          <p style={{
            marginTop:'24px',
            maxWidth:'700px',
            color:'#cbd5e1',
            lineHeight:'1.9',
            fontSize:'20px'
          }}>
            We believe in a Bangladesh where every citizen
            has a voice, opportunities are equal,
            and the future is bright.
          </p>

          {/* CARDS */}

          <div style={{
            marginTop:'60px',
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',
            gap:'24px'
          }}>

            {

              [

                [
                  'Youth Leadership',
                  'Empowering future leaders with technology and education.'
                ],

                [
                  'Transparent Governance',
                  'Digital governance systems for accountability.'
                ],

                [
                  'Smart Economy',
                  'Innovation-driven economic transformation.'
                ]

              ]

              .map((card,index)=>(

                <div
                  key={index}
                  style={{
                    background:'rgba(255,255,255,0.04)',
                    border:'1px solid rgba(255,255,255,0.06)',
                    padding:'34px',
                    borderRadius:'28px'
                  }}
                >

                  <h3 style={{
                    fontSize:'28px',
                    marginBottom:'18px',
                    color:'#14b8a6'
                  }}>
                    {card[0]}
                  </h3>

                  <p style={{
                    color:'#cbd5e1',
                    lineHeight:'1.8'
                  }}>
                    {card[1]}
                  </p>

                </div>

              ))

            }

          </div>

        </div>

      </section>

    </main>

  );

}
