import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

console.log('Testing Twilio connection...');
console.log('Account SID:', accountSid?.substring(0, 10) + '...');

const client = twilio(accountSid, authToken);

// First test - verify account access
async function verifyAccount() {
  try {
    const account = await client.api.accounts(accountSid).fetch();
    console.log('✓ Account access verified');
    console.log('Account status:', account.status);
    console.log('Account type:', account.type);
    return true;
  } catch (error) {
    console.log('✗ Account access failed:', error.message);
    console.log('Error code:', error.code);
    return false;
  }
}

// Second test - list phone numbers
async function listPhoneNumbers() {
  try {
    const phoneNumbers = await client.incomingPhoneNumbers.list();
    console.log('✓ Phone numbers found:', phoneNumbers.length);
    phoneNumbers.forEach(number => {
      console.log(`  - ${number.phoneNumber} (${number.friendlyName})`);
    });
    return phoneNumbers;
  } catch (error) {
    console.log('✗ Phone number listing failed:', error.message);
    return [];
  }
}

// Run verification
async function runTests() {
  const accountOk = await verifyAccount();
  if (accountOk) {
    await listPhoneNumbers();
  }
}

runTests();