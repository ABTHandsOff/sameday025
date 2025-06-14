# SameDay025.com - Quick Deployment Checklist

## Step 1: Cloudflare Pages Setup (5 minutes)

1. **Login to Cloudflare Dashboard**
   - Go to dash.cloudflare.com
   - Navigate to "Pages" in the left sidebar

2. **Create New Project**
   - Click "Create a project"
   - Select "Connect to Git"
   - Choose your SameDay repository
   - Click "Begin setup"

3. **Build Configuration**
   ```
   Project name: sameday025
   Production branch: main
   Framework preset: Vite
   Build command: npm run build
   Build output directory: dist/public
   Root directory: /
   ```

4. **Environment Variables** (Critical - Add these in Pages settings)
   ```
   NODE_ENV=production
   DATABASE_URL=[Get from your Neon dashboard]
   TWILIO_ACCOUNT_SID=[From Twilio console]
   TWILIO_AUTH_TOKEN=[From Twilio console]
   TWILIO_PHONE_NUMBER=[Your Twilio number]
   OPENAI_API_KEY=[From OpenAI dashboard]
   ELEVENLABS_API_KEY=[From ElevenLabs dashboard]
   SESSION_SECRET=[Generate 32 random characters]
   ```

## Step 2: Domain Configuration (3 minutes)

1. **In Cloudflare DNS Settings**
   - Add CNAME record:
     - Name: `@` (or `sameday025.com`)
     - Target: `sameday025.pages.dev` (your Pages URL)
     - Proxy: Orange cloud (Proxied)

   - Add CNAME record:
     - Name: `www`
     - Target: `sameday025.com`
     - Proxy: Orange cloud (Proxied)

2. **SSL Configuration**
   - Go to SSL/TLS → Overview
   - Set encryption mode: "Full (strict)"
   - Go to SSL/TLS → Edge Certificates
   - Enable "Always Use HTTPS"

## Step 3: Production Database Setup

1. **Create Production Database**
   - Login to Neon (neon.tech)
   - Create new database: "sameday-production"
   - Copy connection string to Cloudflare environment variables

2. **Run Database Migration**
   ```bash
   npm run db:push
   ```

## Step 4: Test Deployment

1. **Check these URLs work:**
   - https://sameday025.com
   - https://www.sameday025.com
   - https://sameday025.com/search/plumbing

2. **Verify functionality:**
   - Location detection works
   - Phone calls connect
   - Database queries return data
   - Admin dashboard accessible

## Step 5: Go Live

1. **Enable monitoring:**
   - Cloudflare Analytics
   - Error tracking
   - Performance monitoring

2. **Launch marketing:**
   - Import GoHighLevel content
   - Start social media campaigns
   - Begin vendor outreach

## Environment Variable Sources:

**DATABASE_URL:** Neon dashboard → Database → Connection string
**TWILIO_ACCOUNT_SID:** Twilio Console → Account Info
**TWILIO_AUTH_TOKEN:** Twilio Console → Account Info
**TWILIO_PHONE_NUMBER:** Twilio Console → Phone Numbers
**OPENAI_API_KEY:** OpenAI dashboard → API keys
**ELEVENLABS_API_KEY:** ElevenLabs dashboard → Profile → API Key
**SESSION_SECRET:** Generate at random.org or use: openssl rand -base64 32

## Troubleshooting:

**Build fails:** Check package.json scripts and dependencies
**Site not loading:** Verify DNS propagation (use whatsmydns.net)
**API errors:** Check environment variables are set correctly
**Database errors:** Verify connection string and run migrations
**Phone calls fail:** Check Twilio credentials and webhook URLs

Total deployment time: 15-20 minutes