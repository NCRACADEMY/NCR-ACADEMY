-- Schéma indicatif Supabase pour une future version connectée

create table profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  role text check (role in ('stagiaire','formateur','admin')) default 'stagiaire',
  job text,
  created_at timestamp with time zone default now()
);

create table modules (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  level text,
  duration_minutes int default 0,
  sort_order int default 0
);

create table module_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  module_id uuid references modules(id) on delete cascade,
  completed boolean default false,
  completed_at timestamp with time zone
);

create table prompts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  role text,
  goal text,
  level text,
  content text not null,
  created_at timestamp with time zone default now()
);

create table diagnostic_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  score int not null,
  answers jsonb not null,
  recommendation text,
  created_at timestamp with time zone default now()
);

create table quiz_results (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references profiles(id) on delete cascade,
  score int not null,
  passed boolean default false,
  answers jsonb,
  created_at timestamp with time zone default now()
);

create table documents (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  file_url text not null,
  category text,
  visible boolean default true,
  created_at timestamp with time zone default now()
);
