import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

async function makeTestCall() {
  try {
    console.log('Initiating call...');
    console.log('From:', fromNumber);
    console.log('To: +12164406890');
    
    const call = await client.calls.create({
      url: 'http://demo.twilio.com/docs/voice.xml', // Simple test TwiML
      to: '+12164406890',
      from: fromNumber
    });

    console.log('SUCCESS!');
    console.log('Call SID:', call.sid);
    console.log('Status:', call.status);
    console.log('Your phone should ring now at 216-440-6890');
    
  } catch (error) {
    console.log('FAILED:');
    console.log('Error:', error.message);
    console.log('Code:', error.code);
    console.log('Status:', error.status);
    console.log('More info:', error.moreInfo);
  }
}

makeTestCall();