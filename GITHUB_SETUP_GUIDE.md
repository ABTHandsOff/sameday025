# Push SameDay Code to GitHub for Cloudflare Deployment

## Step 1: Create GitHub Repository

1. **In GitHub (github.com):**
   - Click the green "New" button (or + icon → New repository)
   - Repository name: `sameday025`
   - Description: `AI-powered same-day appointment booking platform for Ohio`
   - Set to **Public** (required for free Cloudflare Pages)
   - Don't initialize with README, .gitignore, or license
   - Click "Create repository"

## Step 2: Connect Replit to GitHub

1. **In your Replit project:**
   - Click the "Version Control" tab in the left sidebar (git icon)
   - Click "Create a Git Repo"
   - Click "Connect to GitHub"
   - Authorize Replit to access your GitHub account
   - Select your `sameday025` repository
   - Click "Connect"

## Step 3: Initial Commit and Push

1. **In Replit Version Control:**
   - You'll see all your files listed
   - Add a commit message: "Initial SameDay025 deployment"
   - Click "Commit & Push"

## Step 4: Verify Repository

1. **Check GitHub:**
   - Go to github.com/yourusername/sameday025
   - Verify all your files are there:
     - client/ folder
     - server/ folder
     - shared/ folder
     - package.json
     - All deployment files I created

## Step 5: Connect to Cloudflare Pages

1. **In Cloudflare Dashboard:**
   - Go to Pages → "Create a project"
   - Click "Connect to Git"
   - Choose GitHub
   - Select `sameday025` repository
   - Configure build settings:
     ```
     Framework preset: Vite
     Build command: npm run build
     Build output directory: dist/public
     Root directory: /
     ```

## Alternative: Manual Upload (if GitHub connection fails)

1. **Download from Replit:**
   - In Replit, click the three dots menu
   - Select "Download as zip"
   - Extract the zip file

2. **Upload to GitHub:**
   - In your empty GitHub repository
   - Click "uploading an existing file"
   - Drag and drop all your project files
   - Commit with message: "Initial SameDay025 deployment"

3. **Connect to Cloudflare:**
   - Follow Step 5 above

## Environment Variables for Cloudflare

Once connected, add these to Cloudflare Pages → Settings → Environment Variables:

```
NODE_ENV=production
DATABASE_URL=[from Neon dashboard]
TWILIO_ACCOUNT_SID=[from Twilio console] 
TWILIO_AUTH_TOKEN=[from Twilio console]
TWILIO_PHONE_NUMBER=[your Twilio number]
OPENAI_API_KEY=[from OpenAI dashboard]
ELEVENLABS_API_KEY=[from ElevenLabs dashboard]
SESSION_SECRET=[generate random 32 characters]
```

## Next Steps After GitHub Setup

1. Repository created and code pushed ✓
2. Connect to Cloudflare Pages
3. Configure environment variables
4. Set up domain DNS
5. Enable SSL
6. Test deployment

Your repository URL will be: `https://github.com/yourusername/sameday025`