'use client';

import { useState } from 'react';

export default function CitizenAssistant() {

  const [messages,setMessages] = useState([
    {
      sender:'ai',
      text:'Assalamu Alaikum 👋\nI am Naieem AI Citizen Assistant.\nHow can I help you today?'
    }
  ]);

  const [input,setInput] = useState('');

  const sendMessage = () => {

    if(!input.trim()) return;

    const userMessage = {
      sender:'user',
      text:input
    };

    let aiReply =
    'Thank you for your message. Our team will review your concern for Barishal-6 development.';

    const text = input.toLowerCase();

    if(text.includes('road')) {

      aiReply =
      'Road infrastructure improvement is one of our top priorities for rural areas and villages.';

    }

    else if(text.includes('job')) {

      aiReply =
      'We are planning youth employment programs, freelancing hubs and local business support.';

    }

    else if(text.includes('hospital')) {

      aiReply =
      'Healthcare modernization and better hospital services are included in our future vision plan.';

    }

    else if(text.includes('education')) {

      aiReply =
      'Education reform and skill development centers are major priorities of our movement.';

    }

    setMessages([
      ...messages,
      userMessage,
      {
        sender:'ai',
        text:aiReply
      }
    ]);

    setInput('');

  };

  return (

    <section style={{
      minHeight:'100vh',
      background:'#000814',
      color:'white',
      padding:'120px 24px',
      fontFamily:'Arial, sans-serif',
      position:'relative',
      overflow:'hidden'
    }}>

      {/* BACKGROUND */}

      <div style={{
        position:'absolute',
        inset:0,
        zIndex:0
      }}>

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
          alt=""
          style={{
            width:'100%',
            height:'100%',
            objectFit:'cover',
            opacity:'0.12'
          }}
        />

        <div style={{
          position:'absolute',
          inset:0,
          background:'linear-gradient(rgba(0,8,20,0.92), rgba(0,8,20,0.98))'
        }}></div>

      </div>

      {/* CONTENT */}

      <div style={{
        position:'relative',
        zIndex:2,
        maxWidth:'900px',
        margin:'auto'
      }}>

        {/* TITLE */}

        <p style={{
          color:'#00d5c0',
          letterSpacing:'3px'
        }}>
          AI CITIZEN ASSISTANT
        </p>

        <h1 style={{
          fontSize:'clamp(52px,8vw,90px)',
          lineHeight:'1.05',
          marginTop:'20px'
        }}>
          Talk With
          <span style={{
            color:'#00d5c0'
          }}>
            {' '}AI Assistant
          </span>
        </h1>

        <p style={{
          marginTop:'24px',
          color:'#dbeafe',
          lineHeight:'1.9',
          fontSize:'20px'
        }}>
          Citizens can share problems, suggestions
          and development ideas directly through AI assistance.
        </p>

        {/* CHAT BOX */}

        <div style={{
          marginTop:'50px',
          background:'rgba(255,255,255,0.04)',
          border:'1px solid rgba(255,255,255,0.06)',
          borderRadius:'34px',
          padding:'30px',
          backdropFilter:'blur(14px)'
        }}>

          {/* MESSAGES */}

          <div style={{
            height:'500px',
            overflowY:'auto',
            paddingRight:'10px'
          }}>

            {

              messages.map((msg,index)=>(

                <div
                  key={index}
                  style={{
                    display:'flex',
                    justifyContent:
                    msg.sender === 'user'
                    ? 'flex-end'
                    : 'flex-start',
                    marginBottom:'18px'
                  }}
                >

                  <div style={{
                    maxWidth:'75%',
                    padding:'18px 22px',
                    borderRadius:'24px',
                    background:
                    msg.sender === 'user'
                    ? '#00d5c0'
                    : 'rgba(255,255,255,0.06)',
                    color:
                    msg.sender === 'user'
                    ? '#02131f'
                    : '#dbeafe',
                    lineHeight:'1.8',
                    whiteSpace:'pre-line',
                    fontSize:'17px'
                  }}>
                    {msg.text}
                  </div>

                </div>

              ))

            }

          </div>

          {/* INPUT */}

          <div style={{
            marginTop:'24px',
            display:'flex',
            gap:'14px',
            flexWrap:'wrap'
          }}>

            <input
              type="text"
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              placeholder="Type your message..."
              style={{
                flex:'1',
                minWidth:'220px',
                padding:'18px',
                borderRadius:'18px',
                border:'1px solid rgba(255,255,255,0.08)',
                background:'rgba(255,255,255,0.04)',
                color:'white',
                fontSize:'17px',
                outline:'none'
              }}
            />

            <button
              onClick={sendMessage}
              style={{
                background:'#00d5c0',
                color:'#02131f',
                border:'none',
                padding:'18px 28px',
                borderRadius:'18px',
                fontWeight:'800',
                fontSize:'17px',
                cursor:'pointer'
              }}
            >
              Send →
            </button>

          </div>

        </div>

      </div>

    </section>

  );

}
