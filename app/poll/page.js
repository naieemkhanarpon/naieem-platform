'use client';

import { useState } from 'react';

export default function Home() {

  const [poll,setPoll] = useState({
    development:42,
    jobs:31,
    education:18,
    agriculture:9
  });

  const vote = (type) => {

    setPoll({
      ...poll,
      [type]: poll[type] + 1
    });

  };

  const total =
    poll.development +
    poll.jobs +
    poll.education +
    poll.agriculture;

  return (

    <section style={{
      padding:'100px 24px',
      background:'#000814',
      color:'white',
      minHeight:'100vh',
      fontFamily:'Arial'
    }}>

      <div style={{
        maxWidth:'900px',
        margin:'auto'
      }}>

        {/* TITLE */}

        <p style={{
          color:'#00d5c0',
          letterSpacing:'3px'
        }}>
          LIVE PUBLIC POLL
        </p>

        <h1 style={{
          fontSize:'clamp(48px,8vw,90px)',
          marginTop:'20px',
          lineHeight:'1.05'
        }}>
          What Should Be The
          <span style={{
            color:'#00d5c0'
          }}>
            {' '}Top Priority?
          </span>
        </h1>

        <p style={{
          marginTop:'24px',
          color:'#dbeafe',
          lineHeight:'1.9',
          fontSize:'20px',
          maxWidth:'700px'
        }}>
          Vote and share your opinion for the future
          development of Barishal-6 (Bakerganj).
        </p>

        {/* POLL BOX */}

        <div style={{
          marginTop:'60px',
          background:'rgba(255,255,255,0.04)',
          border:'1px solid rgba(255,255,255,0.06)',
          borderRadius:'34px',
          padding:'40px',
          backdropFilter:'blur(12px)'
        }}>

          {

            [

              ['development','Infrastructure Development'],
              ['jobs','Jobs & Employment'],
              ['education','Education System'],
              ['agriculture','Agriculture Support']

            ].map((item,index)=>{

              const percent =
              ((poll[item[0]] / total) * 100).toFixed(1);

              return (

                <div
                  key={index}
                  style={{
                    marginBottom:'34px'
                  }}
                >

                  {/* TOP */}

                  <div style={{
                    display:'flex',
                    justifyContent:'space-between',
                    alignItems:'center',
                    marginBottom:'12px'
                  }}>

                    <h3 style={{
                      margin:0,
                      fontSize:'22px',
                      color:'white'
                    }}>
                      {item[1]}
                    </h3>

                    <span style={{
                      color:'#00d5c0',
                      fontWeight:'700',
                      fontSize:'18px'
                    }}>
                      {percent}%
                    </span>

                  </div>

                  {/* BAR */}

                  <div style={{
                    width:'100%',
                    height:'18px',
                    background:'rgba(255,255,255,0.06)',
                    borderRadius:'999px',
                    overflow:'hidden'
                  }}>

                    <div style={{
                      width:`${percent}%`,
                      height:'100%',
                      background:'#00d5c0',
                      borderRadius:'999px',
                      transition:'0.4s'
                    }}></div>

                  </div>

                  {/* BUTTON */}

                  <button
                    onClick={() => vote(item[0])}
                    style={{
                      marginTop:'16px',
                      background:'#00d5c0',
                      border:'none',
                      color:'#02131f',
                      padding:'12px 22px',
                      borderRadius:'999px',
                      fontWeight:'700',
                      cursor:'pointer',
                      fontSize:'16px'
                    }}
                  >
                    Vote
                  </button>

                </div>

              );

            })

          }

        </div>

      </div>

    </section>

  );

}
