# Next 13 App Router Fetching PoC with Revalidate

## Tecnologies

- `Nextjs 13.5.6 with app directory`
- `Nodejs v18.17.0+`

## Steps to setup

- Create a new .env file based on the template .env.template

## Getting Started

First, run the development server:

```bash
npm install

npm run dev
```

## Important

### Next.js 13.5.6 + Node 16.14.0

- Vercel
  - ISR -> WORKING BUT NOT RESPECT THE SETTED TIME
  - Force revalidate -> NOT WORKING
- Local
  - ISR -> NOT WORKING
  - Force revalidate -> NOT WORKING

### Next.js 13.5.6 + Node 18.17.0

- Vercel
  - ISR -> OK!
  - Force revalidate -> NOT WORKING
- Local
  - ISR -> OK!
  - Force revalidate -> OK!

### Next.js 14.0.4 + Node 18.17.0

- Vercel
  - ISR -> OK!
  - Force revalidate -> OK!
- Local
  - ISR -> OK!
  - Force revalidate -> OK!
