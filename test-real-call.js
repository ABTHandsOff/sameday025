import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_PHONE_NUMBER;

console.log('Using Account SID:', accountSid?.substring(0, 8) + '...');
console.log('Using Phone Number:', fromNumber);

if (!accountSid || !authToken || !fromNumber) {
  console.error('Missing Twilio credentials in environment variables');
  process.exit(1);
}

const client = twilio(accountSid, authToken);

// Test real call to your vendor number
async function testRealCall() {
  try {
    console.log('=== INITIATING REAL AI CALL ===');
    console.log('Calling vendor at: +12164406890');
    console.log('Using webhook: https://appointment-scheduler-fouratoms369.replit.app/api/voice/vendor-response');
    
    const call = await client.calls.create({
      twiml: `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Say voice="alice">
    Hello! I'm calling on behalf of a customer who needs a same-day oil change appointment. 
    Do you have any availability this afternoon for an oil change?
  </Say>
  <Pause length="3"/>
  <Gather input="speech" timeout="10" speechTimeout="3" action="https://appointment-scheduler-fouratoms369.replit.app/api/voice/vendor-response" method="POST">
    <Say voice="alice">Please let me know if you have any openings today.</Say>
  </Gather>
  <Say voice="alice">Thank you for your time. I'll follow up shortly.</Say>
</Response>`,
      to: '+12164406890',  // Your vendor number (you will receive this call)
      from: fromNumber, // Your Twilio phone number
      timeout: 30,
      record: true
    });

    console.log('SUCCESS! Call initiated:');
    console.log('Call SID:', call.sid);
    console.log('Status:', call.status);
    console.log('');
    console.log('YOU SHOULD RECEIVE A CALL NOW AT 216-440-6890');
    console.log('');
    console.log('When you answer:');
    console.log('1. You will hear the AI agent asking about oil change availability');
    console.log('2. Respond with "Yes, we have availability at 3 PM" or similar');
    console.log('3. The AI will ask for time confirmation');
    console.log('4. Say your preferred time');
    console.log('5. The call will complete successfully');
    
  } catch (error) {
    console.error('Call failed:', error.message);
    if (error.code) {
      console.error('Error code:', error.code);
    }
  }
}

testRealCall();