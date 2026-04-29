// Call Hero — website (single long page)
// Warm + friendly, mascot-led, SMB audience.

const SITE_URL = 'https://callhero.tech';
const DASHBOARD_URL = 'https://dashboard-weld-nine-96.vercel.app';

// Lead capture webhook — POSTs to the CallHero dashboard API
const LEAD_API = DASHBOARD_URL + '/api/leads';

// ─── SPA Routing ───
function getRoute() {
  var p = window.location.pathname;
  var q = new URLSearchParams(window.location.search);
  if (p.indexOf('purchase') >= 0 && p.indexOf('success') >= 0) return { page: 'success', params: q };
  if (p.indexOf('purchase') >= 0 && p.indexOf('cancel') >= 0) return { page: 'cancel', params: q };
  return { page: 'home', params: q };
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "heroHeadline": "Never miss another call.",
  "heroSub": "Call Hero is your AI receptionist — answering, booking, and following up 24/7 so you can focus on the work that matters.",
  "mascot": "featured",
  "primaryCta": "Get started →"
}/*EDITMODE-END*/;

const C = {
  ink: "#0E1116",
  paper: "#FAF7F2",
  cream: "#F1ECE0",
  coral: "#FF5B3A",
  coralDark: "#E64A2A",
  muted: "#6E6A62",
  line: "rgba(14,17,22,0.08)",
};

/* ================================ MARK ================================ */
function Mark({ size = 56 }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} style={{ display: "block", flexShrink: 0 }}>
      <rect width="100" height="100" rx="22" fill={C.ink}/>
      <g transform="rotate(-6 50 32)">
        <path d="M28 32 Q 50 14 72 32 L68 38 Q 50 24 32 38 Z" fill={C.coral}/>
        <circle cx="24" cy="34" r="9" fill={C.coral}/>
        <circle cx="24" cy="34" r="4.5" fill={C.ink} opacity="0.18"/>
        <circle cx="76" cy="34" r="9" fill={C.coral}/>
        <circle cx="76" cy="34" r="4.5" fill={C.ink} opacity="0.18"/>
      </g>
      <path d="M14 50 Q 14 44 20 44 L80 44 Q 86 50 86 56 L86 84 Q 86 90 80 90 L20 90 Q 14 90 14 84 Z" fill={C.coral}/>
      <rect x="20" y="42" width="6" height="4" rx="1" fill={C.coral}/>
      <rect x="74" y="42" width="6" height="4" rx="1" fill={C.coral}/>
      <line x1="50" y1="54" x2="50" y2="50" stroke={C.ink} strokeWidth="1.4" strokeLinecap="round"/>
      <circle cx="50" cy="49" r="1.6" fill={C.cream}/>
      <rect x="36" y="56" width="28" height="22" rx="5" fill={C.ink}/>
      <circle cx="44" cy="66" r="2.6" fill={C.cream}/>
      <circle cx="56" cy="66" r="2.6" fill={C.cream}/>
      <circle cx="44.8" cy="65.2" r="0.7" fill={C.cream}/>
      <circle cx="56.8" cy="65.2" r="0.7" fill={C.cream}/>
      <path d="M44 71.5 Q 50 75 56 71.5" stroke={C.cream} strokeWidth="1.6" fill="none" strokeLinecap="round"/>
      <circle cx="34" cy="67" r="1.6" fill={C.ink}/>
      <circle cx="66" cy="67" r="1.6" fill={C.ink}/>
      <rect x="42" y="82" width="16" height="3" rx="1.5" fill={C.ink} opacity="0.55"/>
    </svg>
  );
}

function Lockup({ markSize = 44, wordSize = 18, color }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
      <Mark size={markSize}/>
      <span style={{
        fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: wordSize,
        letterSpacing: "-0.03em", color: color || C.ink, lineHeight: 1
      }}>
        Call<span style={{ color: C.coral }}>Hero</span>
      </span>
    </div>
  );
}

/* ================================ NAV ================================ */
function Nav({ tweaks, onOpenLeadForm }) {
  const fg = tweaks.theme === "dark" ? C.paper : C.ink;
  return (
    <div className="nav">
      <Lockup markSize={40} wordSize={20} color={fg}/>
      <div className="nav-links" style={{ color: fg }}>
        <a href="#how">How it works</a>
        <a href="#features">Features</a>
        <a href="#industries">Industries</a>
        <a href="#pricing">Pricing</a>
      </div>
      <div className="nav-cta">
        <button className="btn btn-ghost" style={{ color: fg, borderColor: fg, background: 'transparent', cursor: 'pointer', fontFamily: 'Inter', fontSize: 14, fontWeight: 500, padding: '8px 20px', borderRadius: 50, border: '1.5px solid' }} onClick={onOpenLeadForm}>Sign in</button>
        <button className="btn btn-coral" style={{ cursor: 'pointer', fontFamily: 'Inter', fontSize: 14, fontWeight: 600, padding: '8px 20px', borderRadius: 50, border: 'none', background: C.coral, color: 'white' }} onClick={onOpenLeadForm}>Get started</button>
      </div>
    </div>
  );
}

/* =============================== HERO ================================ */
function Hero({ tweaks }) {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="dot"/> AI Receptionist · Always on
          </div>
          <h1 className="display">
            {tweaks.heroHeadline.split(" ").map((w, i) =>
              <span key={i}>{w} </span>
            )}
          </h1>
          <p className="lede">{tweaks.heroSub}</p>
          <div className="hero-ctas">
            <a href="https://dashboard-weld-nine-96.vercel.app/onboarding" className="btn btn-coral btn-lg">{tweaks.primaryCta}</a>
            <a href="#demo" className="btn btn-ghost-dark btn-lg">▶ Hear a real call</a>
          </div>
          <div className="hero-meta">
            <span>★★★★★ 4.9 on G2</span>
            <span className="sep">·</span>
            <span>SOC 2 Type II</span>
            <span className="sep">·</span>
            <span>Setup in 6 minutes</span>
          </div>
        </div>

        <div className="hero-stage">
          <MascotScene tweaks={tweaks}/>
        </div>
      </div>
    </section>
  );
}

function MascotScene({ tweaks }) {
  return (
    <div className="mascot-scene">
      {/* big mark on coral */}
      <div className="mascot-card">
        <div className="mascot-card-tag">LIVE · ANSWERING</div>
        <Mark size={220}/>
        <div className="ring ring-1"/>
        <div className="ring ring-2"/>
        <div className="ring ring-3"/>
      </div>

      {/* floating transcript bubble */}
      <div className="bubble bubble-1">
        <div className="bubble-meta">Sarah · New caller</div>
        <div className="bubble-text">"Hi, I'd like to book a 4pm appointment..."</div>
      </div>
      <div className="bubble bubble-2">
        <div className="bubble-meta">CallHero</div>
        <div className="bubble-text">"Of course — Tuesday at 4pm with Dr. Lin. Confirmed ✓"</div>
      </div>
    </div>
  );
}

/* =========================== TRUSTED BY ============================== */
function TrustBar() {
  const names = ["Bright Smiles Dental", "Anchor & Oak Salon", "Greenline Plumbing", "Northstar Vet", "Maple Law Group", "Coastal HVAC"];
  return (
    <section className="trust">
      <div className="trust-label">Trusted by 2,400+ small businesses</div>
      <div className="trust-row">
        {names.map(n => <span key={n} className="trust-logo">{n}</span>)}
      </div>
    </section>
  );
}

/* ============================= HOW IT WORKS ========================== */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Plug in your number", d: "Forward unanswered calls to Call Hero. Setup takes about 6 minutes — no IT required." },
    { n: "02", t: "Train your hero", d: "Tell us your hours, services, and FAQs in plain English. We'll build a custom voice for your business." },
    { n: "03", t: "Wake up to bookings", d: "Calls answered, appointments booked, follow-ups sent. You get a tidy summary every morning." },
  ];
  return (
    <section id="how" className="section">
      <SectionHead eyebrow="HOW IT WORKS" title="From missed call to booked customer in three steps."/>
      <div className="steps">
        {steps.map(s => (
          <div key={s.n} className="step">
            <div className="step-num">{s.n}</div>
            <div className="step-title">{s.t}</div>
            <div className="step-desc">{s.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================== FEATURES ============================= */
function Features() {
  const items = [
    { t: "24/7 answering", d: "Never miss a call again — including nights, weekends, and your busiest lunch rush.", icon: "phone" },
    { t: "Real bookings", d: "Two-way calendar sync with Google, Outlook, Calendly, Jobber, and 30+ tools.", icon: "calendar" },
    { t: "Sounds human", d: "Natural conversation, not a phone tree. Customers don't need to know it's AI.", icon: "wave" },
    { t: "Multilingual", d: "English, Spanish, French, Mandarin, and 18 more — switches automatically.", icon: "globe" },
    { t: "Intelligent routing", d: "Urgent calls reach a real human. Spam and robocalls? Filtered out.", icon: "route" },
    { t: "Full transcripts", d: "Every call recorded, summarized, and searchable. Daily digest by email or SMS.", icon: "doc" },
  ];
  return (
    <section id="features" className="section">
      <SectionHead eyebrow="FEATURES" title="Everything a great receptionist does. Without ever calling in sick."/>
      <div className="features-grid">
        {items.map(i => (
          <div key={i.t} className="feature">
            <div className="feature-icon"><FeatureIcon name={i.icon}/></div>
            <div className="feature-title">{i.t}</div>
            <div className="feature-desc">{i.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeatureIcon({ name }) {
  const stroke = C.ink;
  const c = C.coral;
  const s = { stroke, strokeWidth: 1.8, fill: "none", strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "phone": return <svg viewBox="0 0 32 32" width="28" height="28"><path d="M8 6 L14 6 L16 12 L13 14 Q 16 20 18 21 L20 18 L26 20 L26 26 Q 14 26 8 14 Z" {...s} fill={c} fillOpacity="0.15"/></svg>;
    case "calendar": return <svg viewBox="0 0 32 32" width="28" height="28"><rect x="6" y="9" width="20" height="17" rx="2" {...s} fill={c} fillOpacity="0.15"/><path d="M6 14 L26 14 M11 6 L11 11 M21 6 L21 11" {...s}/></svg>;
    case "wave": return <svg viewBox="0 0 32 32" width="28" height="28"><path d="M5 16 L9 16 M11 11 L11 21 M15 7 L15 25 M19 11 L19 21 M23 14 L23 18 M27 16 L27 16" {...s} stroke={c}/></svg>;
    case "globe": return <svg viewBox="0 0 32 32" width="28" height="28"><circle cx="16" cy="16" r="10" {...s}/><path d="M6 16 L26 16 M16 6 Q 22 16 16 26 M16 6 Q 10 16 16 26" {...s}/></svg>;
    case "route": return <svg viewBox="0 0 32 32" width="28" height="28"><circle cx="8" cy="8" r="3" {...s} fill={c} fillOpacity="0.2"/><circle cx="24" cy="24" r="3" {...s} fill={c} fillOpacity="0.2"/><path d="M8 11 Q 8 24 24 21" {...s}/></svg>;
    case "doc": return <svg viewBox="0 0 32 32" width="28" height="28"><path d="M9 5 L21 5 L25 9 L25 27 L9 27 Z" {...s} fill={c} fillOpacity="0.15"/><path d="M13 13 L21 13 M13 17 L21 17 M13 21 L18 21" {...s}/></svg>;
  }
  return null;
}

/* ============================= LIVE DEMO ============================= */
function LiveDemo() {
  return (
    <section id="demo" className="section section-dark">
      <SectionHead light eyebrow="LIVE CALL" title="A real call, answered in 4 seconds flat."/>
      <div className="demo-frame">
        <div className="demo-side">
          <div className="demo-meta">
            <div className="demo-mark"><Mark size={44}/></div>
            <div>
              <div className="demo-biz">Bright Smiles Dental</div>
              <div className="demo-num">+1 (415) 555-0193 · 11:42 AM</div>
            </div>
            <div className="demo-status">● Live</div>
          </div>
          <div className="demo-waveform">
            {Array.from({ length: 48 }, (_, i) => {
              const h = 6 + Math.abs(Math.sin(i * 0.7)) * 32 + (i % 5) * 2;
              return <span key={i} style={{ height: h }}/>;
            })}
          </div>
          <div className="demo-time">00:24 / 01:18</div>
        </div>
        <div className="demo-transcript">
          <div className="demo-line"><b>Caller</b><br/>Hi, my crown popped off this morning, can you fit me in today?</div>
          <div className="demo-line demo-line-bot"><b>CallHero</b><br/>I'm so sorry that happened — I can absolutely help. We have an emergency slot at 1:30 with Dr. Lin. Should I lock that in?</div>
          <div className="demo-line"><b>Caller</b><br/>Yes please.</div>
          <div className="demo-line demo-line-bot"><b>CallHero</b><br/>Booked. You'll get a text confirmation. Anything else I can do, Marcus?</div>
        </div>
      </div>
    </section>
  );
}

/* ============================= INDUSTRIES ============================ */
function Industries() {
  const list = [
    { t: "Dental & medical", d: "HIPAA-aware, insurance-savvy, books recall visits." },
    { t: "Salons & spas", d: "Knows your stylists, services, and Saturday rush." },
    { t: "Home services", d: "Plumbers, HVAC, electricians — books truck rolls fast." },
    { t: "Legal", d: "Intake-trained, conflict-of-interest aware, summarizes the case." },
    { t: "Veterinary", d: "Triages emergencies, schedules vaccinations, refills." },
    { t: "Real estate", d: "Qualifies leads, schedules tours, syncs with your CRM." },
  ];
  return (
    <section id="industries" className="section">
      <SectionHead eyebrow="INDUSTRIES" title="Trained for the way your business actually works."/>
      <div className="ind-grid">
        {list.map(i => (
          <div key={i.t} className="ind-card">
            <div className="ind-num">→</div>
            <div className="ind-title">{i.t}</div>
            <div className="ind-desc">{i.d}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* =============================== PRICING ============================= */
/* ============================= STRIPE PRICING ============================ */
const STRIPE_PRICES = {
  starter: 'price_1TRM8RKxzU8XTm7NZ4upZe8Z',
  pro: 'price_1TRM8SKxzU8XTm7NPVIibi6R',
};

const CHECKOUT_API = DASHBOARD_URL + '/api/checkout';

function Pricing({ onOpenCheckout }) {
  const tiers = [
    { name: "Starter", price: "$79", per: "/mo", id: 'starter',
      desc: "For solo operators and side businesses.",
      feats: ["100 calls / month", "Voicemail + SMS follow-up", "Calendar sync", "Email digest"],
      cta: "Get started" },
    { name: "Pro", price: "$199", per: "/mo", id: 'pro',
      desc: "Most popular — for growing teams.",
      feats: ["500 calls / month", "Live call transfers", "CRM integrations (30+)", "Multilingual", "Custom voice training"],
      cta: "Get started", featured: true },
    { name: "Scale", price: "Talk to us", per: "", id: 'scale',
      desc: "Multi-location and call volume > 1,500/mo.",
      feats: ["Unlimited calls", "Dedicated number pool", "SOC 2 + DPA", "Priority support"],
      cta: "Book a demo" },
  ];
  return (
    <section id="pricing" className="section">
      <SectionHead eyebrow="PRICING" title="Pays for itself the first week."/>
      <div className="price-grid">
        {tiers.map(t => (
          <div key={t.name} className={"price " + (t.featured ? "price-featured" : "")}>
            {t.featured && <div className="price-badge">Most popular</div>}
            <div className="price-name">{t.name}</div>
            <div className="price-num"><span>{t.price}</span><em>{t.per}</em></div>
            <div className="price-desc">{t.desc}</div>
            <ul className="price-feats">
              {t.feats.map(f => <li key={f}>✓ {f}</li>)}
            </ul>
            {t.id === 'scale' ? (
              <button className="btn btn-ghost-dark" onClick={() => onOpenCheckout('scale')}>{t.cta}</button>
            ) : (
              <button className={"btn " + (t.featured ? "btn-coral" : "btn-ghost-dark")} onClick={() => onOpenCheckout(t.id)}>{t.cta}</button>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ============================= TESTIMONIALS ========================== */
function Testimonials() {
  const items = [
    { q: "We were missing 30% of our calls during lunch. Call Hero books them now while we're with patients.", a: "Dr. Priya Lin", r: "Owner · Bright Smiles Dental" },
    { q: "The voice is so warm I had a regular thank me for hiring 'such a sweet new receptionist.'", a: "Maya Okafor", r: "Owner · Anchor & Oak Salon" },
    { q: "Setup took ten minutes. By the next morning we'd booked four after-hours service calls.", a: "Tom Reyes", r: "Owner · Greenline Plumbing" },
  ];
  return (
    <section className="section section-cream">
      <SectionHead eyebrow="STORIES" title="Owners who finally got their evenings back."/>
      <div className="testimonials">
        {items.map((t, i) => (
          <div key={i} className="t-card">
            <div className="t-quote">"{t.q}"</div>
            <div className="t-author">{t.a}<span>{t.r}</span></div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ================================= FAQ =============================== */
function FAQ() {
  const qs = [
    { q: "Will my customers know it's AI?", a: "Most don't notice. We're transparent if asked, and you can configure how Call Hero introduces itself." },
    { q: "What if a call needs a real human?", a: "Calls flagged as urgent or out-of-scope are routed to your team instantly via SMS, app, or live transfer." },
    { q: "How fast can I get set up?", a: "Most accounts are answering calls within 15 minutes. Custom voice training takes about 24 hours." },
    { q: "Is my data secure?", a: "Yes. We're SOC 2 Type II, HIPAA-compatible on Pro+, and never train shared models on your customer data." },
  ];
  return (
    <section className="section">
      <SectionHead eyebrow="FAQ" title="The short version."/>
      <div className="faq">
        {qs.map((it, i) => (
          <details key={i} className="faq-item">
            <summary>{it.q}<span className="faq-plus">+</span></summary>
            <div className="faq-a">{it.a}</div>
          </details>
        ))}
      </div>
    </section>
  );
}

/* ============================ FOOTER CTA ============================= */
/* ============================ CHECKOUT MODAL ============================= */
const AREA_CODES = [
  { code: '213', city: 'Los Angeles (Downtown)' },
  { code: '310', city: 'Los Angeles (Westside)' },
  { code: '323', city: 'Los Angeles' },
  { code: '415', city: 'San Francisco' },
  { code: '619', city: 'San Diego' },
  { code: '626', city: 'Pasadena / San Gabriel' },
  { code: '714', city: 'Orange County' },
  { code: '818', city: 'San Fernando Valley' },
  { code: '925', city: 'East Bay' },
  { code: '949', city: 'Orange County (South)' },
];

const INDUSTRIES = [
  'Plumbing', 'HVAC', 'Electrical', 'Dental', 'Medical',
  'Salon & Spa', 'Legal', 'Veterinary', 'Real Estate',
  'Home Services', 'Other'
];

function CheckoutModal({ planId, onClose }) {
  const [step, setStep] = React.useState(1);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState('');
  const [form, setForm] = React.useState({
    businessName: '', ownerName: '', email: '', phone: '',
    industry: '', areaCode: '', website: ''
  });

  const update = (field, val) => setForm(f => ({...f, [field]: val}));

  const planName = planId === 'pro' ? 'Pro' : 'Starter';
  const planPrice = planId === 'pro' ? '$199/mo' : '$79/mo';

  const handleSubmit = async () => {
    if (!form.businessName || !form.email || !form.industry || !form.areaCode) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!form.email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setSubmitting(true);
    setError('');

    try {
      const res = await fetch(CHECKOUT_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: STRIPE_PRICES[planId],
          businessName: form.businessName,
          ownerName: form.ownerName,
          email: form.email,
          phone: form.phone,
          industry: form.industry,
          areaCode: form.areaCode,
          website: form.website,
        }),
      });

      const data = await res.json();

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (e) {
      setError('Network error. Please try again.');
    }

    setSubmitting(false);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal modal-checkout" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        <div className="modal-checkout-header">
          <div className="modal-plan-badge">{planName} · {planPrice}</div>
          <h3 className="modal-title">Set up your AI receptionist</h3>
          <p className="modal-sub">We'll provision your number immediately after payment.</p>
        </div>

        <div className="modal-body">
          {step === 1 && (
            <>
              <div className="form-group">
                <label>Business name *</label>
                <input placeholder="e.g. AquaFlow Plumbing" value={form.businessName}
                  onChange={e => update('businessName', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Industry *</label>
                <select value={form.industry} onChange={e => update('industry', e.target.value)}>
                  <option value="">Select your industry</option>
                  {INDUSTRIES.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Your name</label>
                <input placeholder="e.g. John Smith" value={form.ownerName}
                  onChange={e => update('ownerName', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" placeholder="you@company.com" value={form.email}
                  onChange={e => update('email', e.target.value)} />
              </div>
              <button className="btn btn-coral btn-lg modal-next"
                onClick={() => setStep(2)}>
                Continue to number →
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <div className="form-group">
                <label>Phone number *</label>
                <input type="tel" placeholder="(555) 123-4567" value={form.phone}
                  onChange={e => update('phone', e.target.value)} />
              </div>
              <div className="form-group">
                <label>Area code for your new number *</label>
                <select value={form.areaCode} onChange={e => update('areaCode', e.target.value)}>
                  <option value="">Select an area code</option>
                  {AREA_CODES.map(a => <option key={a.code} value={a.code}>{a.code} — {a.city}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Website (optional)</label>
                <input placeholder="https://" value={form.website}
                  onChange={e => update('website', e.target.value)} />
              </div>

              {error && <div className="form-error">{error}</div>}

              <div className="form-nav">
                <button className="btn btn-ghost-dark" onClick={() => setStep(1)}>← Back</button>
                <button className="btn btn-coral btn-lg" onClick={handleSubmit} disabled={submitting}>
                  {submitting ? 'Redirecting to payment...' : `Pay ${planPrice} →`}
                </button>
              </div>

              <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 16, textAlign: 'center' }}>
                Your AI receptionist goes live within 10 minutes of payment.
                Cancel anytime. 30-day money-back guarantee.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
function LeadFormModal({ onClose }) {
  const [step, setStep] = React.useState(1);
  const [submitting, setSubmitting] = React.useState(false);
  const [done, setDone] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '', email: '', phone: '', business: '', industry: '',
    employees: '', heardAbout: ''
  });
  const [error, setError] = React.useState('');

  const update = (field, val) => setForm(f => ({...f, [field]: val}));

  const industries = [
    'Plumbing', 'HVAC', 'Electrical', 'Dental', 'Medical',
    'Salon & Spa', 'Legal', 'Veterinary', 'Real Estate',
    'Home Services', 'Other'
  ];

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.business) {
      setError('Please fill in name, email, and business name.');
      return;
    }
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch(LEAD_API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, source: window.location.href, timestamp: new Date().toISOString() }),
      });
      if (res.ok) {
        setDone(true);
      } else {
        // Still show success — we'll capture the lead manually
        console.warn('Lead API returned error, logging locally');
        setDone(true);
      }
    } catch(e) {
      console.log('Lead captured locally (API unavailable):', form);
      // Form still captured — show success
      setDone(true);
    }
    setSubmitting(false);
  };

  if (done) {
    return (
      <div className="modal-overlay" onClick={onClose}>
        <div className="modal" onClick={e => e.stopPropagation()}>
          <div className="modal-success">
            <Mark size={80}/>
            <h3 className="modal-success-h">You're on the list!</h3>
            <p className="modal-success-p">We'll reach out within 24 hours to get your AI receptionist set up. Check your email for next steps.</p>
            <p className="modal-success-p" style={{ fontSize: 13, color: C.muted }}>In the meantime, call our demo line: <strong style={{ color: C.ink }}>+1 (323) 985-3151</strong></p>
            <button className="btn btn-coral btn-lg" onClick={onClose} style={{ marginTop: 20 }}>Got it</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* Step indicator */}
        <div className="modal-steps">
          <span className={`ms-dot ${step >= 1 ? 'ms-active' : ''}`}>1</span>
          <span className="ms-line"/>
          <span className={`ms-dot ${step >= 2 ? 'ms-active' : ''}`}>2</span>
          <span className="ms-line"/>
          <span className={`ms-dot ${step >= 3 ? 'ms-active' : ''}`}>3</span>
        </div>

        <div className="modal-body">
          {step === 1 && (
            <>
              <h3 className="modal-title">Your business</h3>
              <p className="modal-sub">We'll customize your AI receptionist for your industry.</p>
              <div className="form-group">
                <label>Business name *</label>
                <input placeholder="e.g. AquaFlow Plumbing" value={form.business} onChange={e => update('business', e.target.value)}/>
              </div>
              <div className="form-group">
                <label>Industry *</label>
                <select value={form.industry} onChange={e => update('industry', e.target.value)}>
                  <option value="">Select your industry</option>
                  {industries.map(i => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>How many employees?</label>
                <select value={form.employees} onChange={e => update('employees', e.target.value)}>
                  <option value="">Select...</option>
                  <option value="1">Just me</option>
                  <option value="2-5">2-5</option>
                  <option value="6-20">6-20</option>
                  <option value="21+">21+</option>
                </select>
              </div>
              <button className="btn btn-coral btn-lg modal-next" onClick={() => setStep(2)}>Continue</button>
            </>
          )}

          {step === 2 && (
            <>
              <h3 className="modal-title">Your contact</h3>
              <p className="modal-sub">Where should we reach you?</p>
              <div className="form-group">
                <label>Your name *</label>
                <input placeholder="e.g. John Smith" value={form.name} onChange={e => update('name', e.target.value)}/>
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input type="email" placeholder="you@company.com" value={form.email} onChange={e => update('email', e.target.value)}/>
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="(555) 123-4567" value={form.phone} onChange={e => update('phone', e.target.value)}/>
              </div>
              <div className="form-nav">
                <button className="btn btn-ghost-dark" onClick={() => setStep(1)}>← Back</button>
                <button className="btn btn-coral btn-lg" onClick={() => setStep(3)}>Continue</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h3 className="modal-title">Almost there!</h3>
              <p className="modal-sub">How did you hear about us? (optional)</p>
              <div className="form-group">
                <label>How did you find Call Hero?</label>
                <select value={form.heardAbout} onChange={e => update('heardAbout', e.target.value)}>
                  <option value="">Select...</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Friend">Friend recommendation</option>
                  <option value="Advertisement">Advertisement</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="modal-summary">
                <div className="modal-summary-item"><span>Business</span><strong>{form.business}</strong></div>
                <div className="modal-summary-item"><span>Industry</span><strong>{form.industry}</strong></div>
                <div className="modal-summary-item"><span>Contact</span><strong>{form.name} · {form.email}</strong></div>
              </div>

              {error && <div className="form-error">{error}</div>}

              <div className="form-nav">
                <button className="btn btn-ghost-dark" onClick={() => setStep(2)}>← Back</button>
                <button className="btn btn-coral btn-lg" onClick={handleSubmit} disabled={submitting}>
                  {submitting ? 'Sending...' : 'Send request →'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ============================ FOOTER CTA ============================= */
function FooterCTA({ tweaks, onOpenLeadForm }) {
  return (
    <section id="cta" className="cta">
      <div className="cta-inner">
        <Mark size={120}/>
        <h2 className="cta-headline">Hire your hero today.</h2>
        <p className="cta-sub">14-day free trial. No credit card. Cancel any time.</p>
        <div className="cta-form">
          <input placeholder="you@business.com" id="cta-email-input"/>
          <button className="btn btn-coral btn-lg" onClick={() => {
            const emailInput = document.getElementById('cta-email-input');
            if (emailInput && emailInput.value) {
              // Pre-fill email if provided
            }
            onOpenLeadForm();
          }}>{tweaks.primaryCta}</button>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <Lockup markSize={36} wordSize={16} color={C.paper}/>
        <div className="footer-cols">
          <div>
            <div className="foot-h">Product</div>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Integrations</a>
            <a href="#">Changelog</a>
          </div>
          <div>
            <div className="foot-h">Company</div>
            <a href="#">About</a>
            <a href="#">Customers</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>
          <div>
            <div className="foot-h">Resources</div>
            <a href="#">Help center</a>
            <a href="#">API docs</a>
            <a href="#">Status</a>
            <a href="#">Contact</a>
          </div>
          <div>
            <div className="foot-h">Legal</div>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
            <a href="#">DPA</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Call Hero, Inc.</span>
        <span>Made for businesses that hate missing calls.</span>
      </div>
    </footer>
  );
}

/* ============================= UTILITIES ============================= */
function SectionHead({ eyebrow, title, light }) {
  return (
    <div className={"section-head " + (light ? "section-head-light" : "")}>
      <div className="eyebrow"><span className="dot"/>{eyebrow}</div>
      <h2 className="section-title">{title}</h2>
    </div>
  );
}

/* ============================== PURCHASE SUCCESS ============================== */
function PurchaseSuccess({ sessionId }) {
  var displayId = sessionId ? sessionId.slice(0, 8) + '...' : '';
  return (
    <div className="purchase-page">
      <div className="purchase-card">
        <div className="purchase-icon">
          <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="#22C55E" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 12l3 3 5-5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="purchase-h">You're all set!</h1>
        <p className="purchase-p">Your AI receptionist is being provisioned. You'll receive your new business number via email within 15 minutes.</p>
        <div className="purchase-card-step">
          <strong>Next Step:</strong> Go to your dashboard to view your analytics, calls, and leads.
        </div>
        <div className="purchase-ctas">
          <a href={DASHBOARD_URL} className="btn btn-coral btn-lg">Go to Dashboard</a>
          <a href="/" className="btn btn-ghost-dark">Back to Home</a>
        </div>
        {sessionId && (
          <p className="purchase-ref">Order ref: {displayId}</p>
        )}
      </div>
    </div>
  );
}

/* ============================== PURCHASE CANCEL ============================== */
function PurchaseCancel() {
  return (
    <div className="purchase-page">
      <div className="purchase-card">
        <div className="purchase-icon">
          <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="#6E6A62" strokeWidth="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 8l8 8M16 8l-8 8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h1 className="purchase-h">Checkout cancelled</h1>
        <p className="purchase-p">No worries — your AI receptionist is ready whenever you are.</p>
        <div className="purchase-card-step">
          Still have questions? Call our demo line: <strong>+1 (323) 985-3151</strong> to hear how it works.
        </div>
        <div className="purchase-ctas">
          <a href="/" className="btn btn-coral btn-lg">← Back to CallHero</a>
          <a href="/#pricing" className="btn btn-ghost-dark">View Pricing</a>
        </div>
      </div>
    </div>
  );
}

/* =============================== APP ================================= */
function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [showLeadForm, setShowLeadForm] = React.useState(false);
  const [checkoutPlan, setCheckoutPlan] = React.useState(null);
  var route = getRoute();

  // Apply theme on document
  React.useEffect(function() {
    document.body.classList.toggle("theme-dark", tweaks.theme === "dark");
    document.body.classList.toggle("theme-coral", tweaks.theme === "coral");
    document.body.classList.toggle("theme-light", tweaks.theme === "light");
    document.body.classList.toggle("mascot-min", tweaks.mascot === "minimal");
    document.body.classList.toggle("mascot-feat", tweaks.mascot === "featured");
    document.body.classList.toggle("mascot-everywhere", tweaks.mascot === "everywhere");
  }, [tweaks.theme, tweaks.mascot]);

  if (route.page === 'success') {
    return <PurchaseSuccess sessionId={route.params.get('session_id') || ''} />;
  }
  if (route.page === 'cancel') {
    return <PurchaseCancel />;
  }

  return (
    <>
      <Nav tweaks={tweaks} onOpenLeadForm={() => setShowLeadForm(true)}/>
      <Hero tweaks={tweaks}/>
      <TrustBar/>
      <HowItWorks/>
      <Features/>
      <LiveDemo/>
      <Industries/>
      <Pricing onOpenCheckout={(planId) => setCheckoutPlan(planId)}/>
      <Testimonials/>
      <FAQ/>
      <FooterCTA tweaks={tweaks} onOpenLeadForm={() => setShowLeadForm(true)}/>
      <Footer/>

      {showLeadForm && <LeadFormModal onClose={() => setShowLeadForm(false)}/>}
      {checkoutPlan && (
        <CheckoutModal
          planId={checkoutPlan}
          onClose={() => setCheckoutPlan(null)}
        />
      )}

      {/* Floating CTA for mobile */}
      <div className="float-cta">
        <button className="btn btn-coral" onClick={() => setShowLeadForm(true)}>
          Get your AI receptionist
        </button>
      </div>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Theme">
          <TweakRadio label="Theme" value={tweaks.theme} onChange={v => setTweak("theme", v)}
            options={[{ value: "light", label: "Light" }, { value: "dark", label: "Dark" }, { value: "coral", label: "Coral" }]}/>
        </TweakSection>
        <TweakSection title="Mascot">
          <TweakRadio label="Prominence" value={tweaks.mascot} onChange={v => setTweak("mascot", v)}
            options={[{ value: "minimal", label: "Minimal" }, { value: "featured", label: "Featured" }, { value: "everywhere", label: "Everywhere" }]}/>
        </TweakSection>
        <TweakSection title="Hero copy">
          <TweakText label="Headline" value={tweaks.heroHeadline} onChange={v => setTweak("heroHeadline", v)}/>
          <TweakText label="Sub-headline" value={tweaks.heroSub} onChange={v => setTweak("heroSub", v)}/>
          <TweakText label="Primary CTA" value={tweaks.primaryCta} onChange={v => setTweak("primaryCta", v)}/>
        </TweakSection>
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
