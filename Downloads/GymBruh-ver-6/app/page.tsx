'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icons';

export default function HomePage() {
const [mounted, setMounted] = useState(false);

useEffect(() => {
setMounted(true);
}, []);

// ✅ CRITICAL FIX — prevents SSR mismatch (Vercel 404 issue)
if (!mounted) return null;

return ( <div className="landing-page">
{/* Floating particles */} <div className="particles">
{[...Array(5)].map((_, i) => (
<div key={i} className={`particle particle-${i}`} />
))} </div>

```
  {/* Header */}
  <header className="landing-header">
    <span className="logo-main">
      Gym<span className="logo-accent">Bruh</span>
    </span>

    <div className="header-actions">
      <Link href="/login" className="glass-btn glass-btn-sm">
        Login
      </Link>
      <Link href="/signup" className="glass-btn glass-btn-primary">
        Sign Up
      </Link>
    </div>
  </header>

  {/* Hero */}
  <main className="landing-hero">
    <div className={`hero-content animate-fade-in`}>
      <div className="hero-badge">
        <Icon name="sparkles" size={16} />
        AI Powered Fitness
      </div>

      <h1 className="hero-title">
        Your Health,<br />
        <span className="hero-accent">Reimagined.</span>
      </h1>

      <p className="hero-subtitle">
        Scan food with AI. Get personalized diet & workout plans.
        Track your macros effortlessly. All wrapped in a beautiful experience.
      </p>

      <div className="hero-actions">
        <Link href="/signup" className="glass-btn glass-btn-primary">
          Get Started
        </Link>

        <Link href="/login" className="glass-btn">
          Already have an account
        </Link>
      </div>
    </div>
  </main>
</div>
```

);
}
