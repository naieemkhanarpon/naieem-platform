export default function Home() {

  const stats = [
    ['10K+','Volunteers'],
    ['64','Districts'],
    ['100%','Transparency'],
    ['Secure','Platform']
  ];

  const cards = [
    [
      'Youth Leadership',
      'Empowering future leaders with technology and education.'
    ],
    [
      'Transparent Governance',
      'Digital governance systems for complete accountability.'
    ],
    [
      'Smart Economy',
      'Innovation-driven economic growth for a stronger nation.'
    ]
  ];

  return (

    <main style={{
      background:'#020817',
      color:'white',
      minHeight:'100vh',
      fontFamily:'Arial, sans-serif'
    }}>

      {/* NAVBAR */}

      <nav style={{
        position:'fixed',
        top:0,
        width:'100%',
        zIndex:1000,
        background:'rgba(2,8,23,0.75)',
        backdropFilter:'blur(12px)',
        borderBottom:'1px solid rgba(255,255,255,0.05)'
      }}>

        <div style={{
          maxWidth:'1200px',
          margin:'auto',
          padding:'18px 24px',
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center'
        }}>

          <div>

            <h1 style={{
              margin:0,
              color:'#14b8a6',
              fontSize:'42px',
              fontWeight:'900'
            }}>
              NAIEEM
            </h1>

            <p style={{
              margin:0,
              color:'#94a3b8',
              fontSize:'14px'
            }}>
              POLITICAL PLATFORM
            </p>

          </div>

          <div style={{
            color:'#14b8a6',
            fontSize:'34px'
          }}>
            ☰
          </div>

        </div>

      </nav>

      {/* HERO */}

      <section style={{
        minHeight:'100vh',
        position:'relative',
        display:'flex',
        alignItems:'center',
        padding:'140px 24px 80px',
        overflow:'hidden'
      }}>

        {/* BACKGROUND */}

        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop"
          alt=""
          style={{
            position:'absolute',
            inset:0,
            width:'100%',
            height:'100%',
            objectFit:'cover',
            opacity:'0.22'
          }}
        />

        {/* OVERLAY */}

        <div style={{
          position:'absolute',
          inset:0,
          background:'linear-gradient(to right, rgba(2,8,23,0.96) 35%, rgba(2,8,23,0.55))'
        }}></div>

        {/* CONTENT */}

        <div style={{
          position:'relative',
          zIndex:2,
          maxWidth:'1200px',
          margin:'auto',
          width:'100%',
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',
          gap:'60px',
          alignItems:'center'
        }}>

          {/* LEFT */}

          <div>

            <div style={{
              display:'inline-flex',
              alignItems:'center',
              gap:'10px',
              padding:'10px 18px',
              border:'1px solid rgba(20,184,166,0.4)',
              borderRadius:'999px',
              background:'rgba(255,255,255,0.04)'
            }}>

              <div style={{
                width:'10px',
                height:'10px',
                borderRadius:'50%',
                background:'#16a34a'
              }}></div>

              <span style={{
                color:'#cbd5e1',
                fontSize:'14px'
              }}>
                A NEW VISION FOR BANGLADESH
              </span>

            </div>

            <h1 style={{
              marginTop:'30px',
              fontSize:'clamp(64px,10vw,110px)',
              lineHeight:'0.95',
              fontWeight:'900'
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
              fontSize:'22px',
              lineHeight:'1.8',
              maxWidth:'650px'
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
                  padding:'18px 36px',
                  borderRadius:'999px',
                  textDecoration:'none',
                  fontWeight:'700',
                  fontSize:'18px',
                  boxShadow:'0 20px 50px rgba(20,184,166,0.25)'
                }}
              >
                Join The Movement →
              </a>

              <a
                href="/admin"
                style={{
                  border:'1px solid rgba(255,255,255,0.15)',
                  padding:'18px 36px',
                  borderRadius:'999px',
                  textDecoration:'none',
                  color:'white',
                  background:'rgba(255,255,255,0.04)',
                  fontWeight:'600',
                  fontSize:'18px'
                }}
              >
                Watch Video
              </a>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div style={{
            position:'relative'
          }}>

            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
              alt="Bangladesh"
              style={{
                width:'100%',
                borderRadius:'32px',
                objectFit:'cover',
                minHeight:'600px',
                boxShadow:'0 40px 90px rgba(0,0,0,0.45)'
              }}
            />

            {/* FLAG */}

            <div style={{
              position:'absolute',
              top:'-20px',
              right:'-10px',
              background:'#006a4e',
              width:'140px',
              height:'90px',
              borderRadius:'18px',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              boxShadow:'0 20px 60px rgba(0,0,0,0.4)'
            }}>

              <div style={{
                width:'48px',
                height:'48px',
                borderRadius:'50%',
                background:'#f42a41'
              }}></div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section style={{
        padding:'0 24px 100px'
      }}>

        <div style={{
          maxWidth:'1200px',
          margin:'auto',
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',
          gap:'24px'
        }}>

          {

            stats.map((item,index)=>(

              <div
                key={index}
                style={{
                  background:'rgba(255,255,255,0.04)',
                  border:'1px solid rgba(255,255,255,0.06)',
                  padding:'40px',
                  borderRadius:'28px',
                  textAlign:'center'
                }}
              >

                <h2 style={{
                  color:'#14b8a6',
                  fontSize:'48px',
                  marginBottom:'12px'
                }}>
                  {item[0]}
                </h2>

                <p style={{
                  color:'#cbd5e1',
                  fontSize:'20px'
                }}>
                  {item[1]}
                </p>

              </div>

            ))

          }

        </div>

      </section>

      {/* VISION */}

      <section style={{
        padding:'100px 24px'
      }}>

        <div style={{
          maxWidth:'1200px',
          margin:'auto'
        }}>

          <p style={{
            color:'#14b8a6',
            letterSpacing:'3px'
          }}>
            OUR VISION
          </p>

          <h2 style={{
            marginTop:'20px',
            fontSize:'clamp(48px,8vw,80px)',
            lineHeight:'1.1'
          }}>
            Building A Better
            <span style={{
              color:'#14b8a6'
            }}>
              {' '}Bangladesh
            </span>
          </h2>

          <div style={{
            marginTop:'60px',
            display:'grid',
            gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',
            gap:'24px'
          }}>

            {

              cards.map((card,index)=>(

                <div
                  key={index}
                  style={{
                    background:'rgba(255,255,255,0.04)',
                    border:'1px solid rgba(255,255,255,0.06)',
                    padding:'36px',
                    borderRadius:'30px'
                  }}
                >

                  <h3 style={{
                    color:'#14b8a6',
                    fontSize:'30px',
                    marginBottom:'20px'
                  }}>
                    {card[0]}
                  </h3>

                  <p style={{
                    color:'#cbd5e1',
                    lineHeight:'1.9',
                    fontSize:'18px'
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
