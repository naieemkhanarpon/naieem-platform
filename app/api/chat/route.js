import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {

  try {

    const body = await req.json();

    const completion = await openai.chat.completions.create({

      model: 'gpt-4.1-mini',

      messages: [
        {
          role:'system',
          content:`
You are Naieem AI Citizen Assistant.

You help Bangladeshi citizens politely.

You support:
- development ideas
- jobs
- education
- healthcare
- agriculture
- Islamic values
- political questions

Always answer professionally.
`
        },

        {
          role:'user',
          content:body.message
        }

      ]

    });

    return Response.json({

      reply:completion.choices[0].message.content

    });

  }

  catch(error) {

    return Response.json({

      reply:'AI server error.'

    });

  }

}
