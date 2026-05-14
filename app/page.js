'use client';

export default function Home() {

  return (

    <main style={{
      background:'#000814',
      minHeight:'100vh',
      color:'white',
      fontFamily:'Arial, sans-serif',
      overflow:'hidden'
    }}>

      {/* BACKGROUND */}

      <div style={{
        position:'fixed',
        inset:0,
        zIndex:0
      }}>

        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop"
          alt=""
          style={{
            width:'100%',
            height:'100%',
            objectFit:'cover',
            opacity:'0.18'
          }}
        />

        <div style={{
          position:'absolute',
          inset:0,
          background:'linear-gradient(to bottom, rgba(0,8,20,0.88), rgba(0,8,20,0.98))'
        }}></div>

      </div>

      {/* NAVBAR */}

      <nav style={{
        position:'fixed',
        top:0,
        width:'100%',
        zIndex:100,
        backdropFilter:'blur(14px)',
        background:'rgba(0,0,0,0.25)',
        borderBottom:'1px solid rgba(255,255,255,0.06)'
      }}>

        <div style={{
          display:'flex',
          justifyContent:'space-between',
          alignItems:'center',
          padding:'20px 24px',
          maxWidth:'1300px',
          margin:'auto'
        }}>

          <div>

            <h1 style={{
              margin:0,
              fontSize:'44px',
              color:'#00d5c0',
              fontWeight:'900',
              letterSpacing:'2px'
            }}>
              NAIEEM
            </h1>

            <p style={{
              margin:0,
              color:'#94a3b8',
              fontSize:'14px',
              marginTop:'2px'
            }}>
              POLITICAL PLATFORM
            </p>

          </div>

          <div style={{
            fontSize:'34px',
            color:'#00d5c0'
          }}>
            ☰
          </div>

        </div>

      </nav>

      {/* HERO SECTION */}

      <section style={{
        position:'relative',
        zIndex:2,
        minHeight:'100vh',
        display:'flex',
        alignItems:'center',
        padding:'130px 24px 80px'
      }}>

        <div style={{
          maxWidth:'1300px',
          margin:'auto',
          width:'100%',
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit,minmax(320px,1fr))',
          gap:'50px',
          alignItems:'center'
        }}>

          {/* LEFT */}

          <div>

            {/* TAG */}

            <div style={{
              display:'inline-flex',
              alignItems:'center',
              gap:'10px',
              padding:'10px 18px',
              border:'1px solid rgba(0,213,192,0.35)',
              borderRadius:'999px',
              background:'rgba(255,255,255,0.03)'
            }}>

              <div style={{
                width:'10px',
                height:'10px',
                borderRadius:'50%',
                background:'#22c55e'
              }}></div>

              <span style={{
                color:'#dbeafe',
                fontSize:'14px'
              }}>
                A NEW VISION FOR BANGLADESH
              </span>

            </div>

            {/* TITLE */}

            <h1 style={{
              fontSize:'clamp(60px,11vw,120px)',
              lineHeight:'0.92',
              marginTop:'28px',
              marginBottom:'0px',
              fontWeight:'900'
            }}>

              Naieem <br/>

              <span style={{
                color:'#00d5c0'
              }}>
                Political
              </span>

              <br/>

              Platform

            </h1>

            {/* DESCRIPTION */}

            <p style={{
              marginTop:'30px',
              color:'#dbeafe',
              lineHeight:'1.9',
              fontSize:'22px',
              maxWidth:'650px'
            }}>
              Building a transparent, modern and prosperous
              Bangladesh through youth leadership,
              technology and Islamic values.
            </p>

            {/* BUTTONS */}

            <div style={{
              marginTop:'42px',
              display:'flex',
              gap:'18px',
              flexWrap:'wrap'
            }}>

              <a
                href="/dashboard"
                style={{
                  background:'#00d5c0',
                  color:'#02131f',
                  textDecoration:'none',
                  padding:'18px 38px',
                  borderRadius:'999px',
                  fontWeight:'700',
                  fontSize:'18px',
                  boxShadow:'0 20px 60px rgba(0,213,192,0.3)'
                }}
              >
                Join Movement →
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                style={{
                  border:'1px solid rgba(255,255,255,0.12)',
                  color:'white',
                  textDecoration:'none',
                  padding:'18px 34px',
                  borderRadius:'999px',
                  background:'rgba(255,255,255,0.04)',
                  fontWeight:'600',
                  fontSize:'18px'
                }}
              >
                ▶ Watch Video
              </a>

            </div>

            {/* STATS */}

            <div style={{
              marginTop:'55px',
              display:'grid',
              gridTemplateColumns:'repeat(auto-fit,minmax(160px,1fr))',
              gap:'18px'
            }}>

              {

                [

                  ['10K+','Volunteers'],
                  ['64','Districts'],
                  ['100%','Transparency'],
                  ['Youth','Powered']

                ].map((item,index)=>(

                  <div
                    key={index}
                    style={{
                      padding:'24px',
                      borderRadius:'26px',
                      background:'rgba(255,255,255,0.04)',
                      border:'1px solid rgba(255,255,255,0.06)',
                      backdropFilter:'blur(10px)'
                    }}
                  >

                    <h2 style={{
                      margin:0,
                      fontSize:'34px',
                      color:'#00d5c0'
                    }}>
                      {item[0]}
                    </h2>

                    <p style={{
                      marginTop:'10px',
                      color:'#dbeafe'
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

            {/* MAIN IMAGE */}

            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1200&auto=format&fit=crop"
              alt=""
              style={{
                width:'100%',
                maxWidth:'560px',
                borderRadius:'34px',
                minHeight:'720px',
                objectFit:'cover',
                boxShadow:'0 40px 100px rgba(0,0,0,0.45)'
              }}
            />

            {/* FLAG CARD */}

            <div style={{
              position:'absolute',
              top:'-20px',
              right:'-10px',
              width:'150px',
              height:'95px',
              borderRadius:'20px',
              background:'#006a4e',
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              boxShadow:'0 25px 60px rgba(0,0,0,0.45)'
            }}>

              <div style={{
                width:'52px',
                height:'52px',
                borderRadius:'50%',
                background:'#f42a41'
              }}></div>

            </div>

            {/* QUOTE */}

            <div style={{
              position:'absolute',
              bottom:'25px',
              left:'25px',
              right:'25px',
              padding:'24px',
              borderRadius:'24px',
              background:'rgba(0,0,0,0.45)',
              backdropFilter:'blur(12px)',
              border:'1px solid rgba(255,255,255,0.08)'
            }}>

              <p style={{
                color:'#dbeafe',
                lineHeight:'1.8',
                margin:0,
                fontSize:'17px'
              }}>
                “A new generation can build
                a stronger Bangladesh through
                honesty, faith and leadership.”
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SECOND SECTION */}

      <section style={{
        position:'relative',
        zIndex:2,
        padding:'100px 24px'
      }}>

        <div style={{
          maxWidth:'1200px',
          margin:'auto'
        }}>

          <p style={{
            color:'#00d5c0',
            letterSpacing:'3px'
          }}>
            OUR VISION
          </p>

          <h2 style={{
            fontSize:'clamp(48px,8vw,90px)',
            lineHeight:'1.05',
            marginTop:'20px'
          }}>
            Building A Better
            <span style={{
              color:'#00d5c0'
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

              [

                [
                  'Islamic Values',
                  'Guided by honesty, justice and ethics.'
                ],

                [
                  'Youth Leadership',
                  'Empowering young leaders for the future.'
                ],

                [
                  'Smart Bangladesh',
                  'Technology and innovation for development.'
                ]

              ].map((card,index)=>(

                <div
                  key={index}
                  style={{
                    background:'rgba(255,255,255,0.04)',
                    border:'1px solid rgba(255,255,255,0.06)',
                    borderRadius:'30px',
                    padding:'36px'
                  }}
                >

                  <h3 style={{
                    color:'#00d5c0',
                    fontSize:'30px',
                    marginBottom:'18px'
                  }}>
                    {card[0]}
                  </h3>

                  <p style={{
                    color:'#dbeafe',
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
