// Debug Twilio credentials
console.log('Environment variables check:');
console.log('TWILIO_ACCOUNT_SID length:', process.env.TWILIO_ACCOUNT_SID?.length || 0);
console.log('TWILIO_AUTH_TOKEN length:', process.env.TWILIO_AUTH_TOKEN?.length || 0);
console.log('TWILIO_PHONE_NUMBER:', process.env.TWILIO_PHONE_NUMBER);

console.log('\nAccount SID format check:');
console.log('Starts with AC:', process.env.TWILIO_ACCOUNT_SID?.startsWith('AC'));
console.log('Length should be 34:', process.env.TWILIO_ACCOUNT_SID?.length === 34);

console.log('\nAuth Token format check:');
console.log('Token length should be 32:', process.env.TWILIO_AUTH_TOKEN?.length === 32);