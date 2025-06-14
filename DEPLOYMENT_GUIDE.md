# SameDay Deployment Guide

## Production Deployment Checklist

### 1. Cloudflare Setup
- Domain configured with Cloudflare DNS
- SSL/TLS encryption enabled
- Security rules configured for API protection
- Rate limiting enabled (100 req/min per IP)

### 2. Environment Variables Required
```
DATABASE_URL=postgresql://... (PostgreSQL connection string)
TWILIO_ACCOUNT_SID=AC... (Twilio account identifier)
TWILIO_AUTH_TOKEN=... (Twilio authentication token)
TWILIO_PHONE_NUMBER=+1... (Twilio phone number for calls)
OPENAI_API_KEY=sk-... (OpenAI API key for AI voice)
ELEVENLABS_API_KEY=sk_... (ElevenLabs for premium voice)
STRIPE_SECRET_KEY=sk_live_... (Stripe secret key for payments)
VITE_STRIPE_PUBLIC_KEY=pk_live_... (Stripe public key)
SESSION_SECRET=... (Random 32-character string for sessions)
```

### 3. Database Migration
Run before first deployment:
```bash
npm run db:push
```

### 4. Deployment Commands
```bash
# Build for production
npm run build

# Start production server
npm start
```

### 5. Post-Deployment Verification
- [ ] Location detection works
- [ ] Voice calling system functional
- [ ] Payment processing active
- [ ] Ohio geographic restrictions enforced
- [ ] SSL certificate valid
- [ ] Database connections stable

### 6. Cloudflare Configuration
- Page Rules: Cache static assets, bypass API routes
- Security Level: Medium
- Bot Fight Mode: Enabled
- Always Use HTTPS: Enabled

### 7. Monitoring Setup
- Uptime monitoring
- Error tracking
- Performance metrics
- Call success rates

## Go-Live Process
1. Deploy to Replit
2. Configure custom domain in Cloudflare
3. Update DNS records
4. Test all systems
5. Enable Ohio rollout