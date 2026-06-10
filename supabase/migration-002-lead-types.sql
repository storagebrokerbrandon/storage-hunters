-- Migration 002: lead types, scoring, and segmentation columns
-- Paste into Supabase SQL Editor and Run (safe to run more than once)

alter table public.leads
  add column if not exists lead_type text default 'buyer_profile',
  add column if not exists source_page text,
  add column if not exists buyer_type text,
  add column if not exists timeline text,
  add column if not exists deal_type text,
  add column if not exists open_to_rep text,
  add column if not exists interested_pro text,
  add column if not exists lead_score integer,
  add column if not exists extra jsonb;
