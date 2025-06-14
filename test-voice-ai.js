import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

async function testVoiceAI() {
  try {
    console.log('Testing AI voice conversation...');
    
    const call = await client.calls.create({
      twiml: `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">
    Hello! I'm calling on behalf of a customer who needs a same-day oil change appointment. 
    Do you have any availability this afternoon?
  </Say>
  <Pause length="2"/>
  <Gather input="speech dtmf" timeout="15" speechTimeout="auto" speechModel="experimental_conversations" action="https://appointment-scheduler-fouratoms369.replit.app/api/voice/vendor-response" method="POST">
    <Say voice="alice">Please say YES if you have availability, or NO if you're fully booked. You can also press 1 for yes or 2 for no.</Say>
  </Gather>
  <Say voice="alice">I didn't hear a response. Thank you for your time, I'll follow up shortly.</Say>
</Response>`,
      to: '+12164406890',
      from: fromNumber,
      timeout: 30,
      record: true
    });

    console.log('SUCCESS! AI voice call initiated:');
    console.log('Call SID:', call.sid);
    console.log('');
    console.log('You should now receive a call with the AI speaking.');
    console.log('When you answer, the AI will:');
    console.log('1. Ask about oil change availability');
    console.log('2. Listen for your response');
    console.log('3. Process your answer through the webhook');
    console.log('');
    console.log('Try responding with: "YES" or press 1 for yes, 2 for no');
    console.log('Watch the console logs below for webhook activity:');
    
  } catch (error) {
    console.error('Call failed:', error.message);
  }
}

testVoiceAI();