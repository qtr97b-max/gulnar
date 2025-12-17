# Gulnar (جلنار) – Bahrain-first food marketplace (PWA starter)

This is a **ready-to-run MVP starter** (web + mobile-friendly PWA) for:
- Home cooks + restaurants
- Pickup OR Delivery
- Order ratings (1–5)
- AI Support (demo UI) + Ticketing (next step)

## 1) Run locally
```bash
npm install
npm run dev
```
Open: http://localhost:3000/ar or http://localhost:3000/en

## 2) Deploy without Google Play (fast)
**Vercel**:
- Create a GitHub repo, push this folder.
- Import the repo in Vercel and deploy.
- Add environment variables (below).

## 3) Backend (recommended): Supabase (not Google)
Create a Supabase project and add:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 4) Next steps to make it production
- Real auth (customer/seller/driver roles)
- Database tables (vendors, menu_items, orders, order_items, ratings, wallet_ledger, tickets)
- Payments: integrate a Bahrain gateway (Benefit, Tap, etc.)
- Delivery routing + ETA and order status updates
- AI Support: connect OpenAI API + knowledge base + ticket escalation

## Brand assets
See `/assets/` for splash + icon images (generated from your logo).
