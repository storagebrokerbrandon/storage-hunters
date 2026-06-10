-- Storage Hunters lead intake table
-- Run this once in the Supabase SQL Editor (Dashboard -> SQL Editor -> New query -> paste -> Run)

create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  phone text,
  markets text,
  target_states text,
  budget text,
  equity text,
  financing_status text,
  first_time_buyer boolean,
  notes text,
  source text default 'website'
);

-- Lock the table down: no public/anon access.
-- The website inserts server-side with the service role key, which bypasses RLS.
alter table public.leads enable row level security;
