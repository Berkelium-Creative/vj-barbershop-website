import { Abril_Fatface, Plus_Jakarta_Sans, Caveat } from "next/font/google";
import content from "../data/content.json";

const display = Abril_Fatface({ subsets: ["latin"], weight: ["400"], variable: "--font-display" });
const body = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-body" });
const script = Caveat({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-script" });

const TEAL = "#134E4A";
const TEAL_DARK = "#042F2E";
const CORAL = "#F87171";
const SAND = "#FDFCEC";
const STONE = "#1C1917";
const MUTED = "#57534E";

const HERO_PHOTO = "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1800&q=80&auto=format&fit=crop";
const SHOP_PHOTO = "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200&q=80&auto=format&fit=crop";

export default function Page() {
  const c = content as any;
  return (
    <main className={`${display.variable} ${body.variable} ${script.variable} min-h-screen`} style={{ backgroundColor: SAND, color: STONE, fontFamily: "var(--font-body)" }}>
      <style jsx global>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes drift { 0%, 100% { transform: translateX(0); } 50% { transform: translateX(-2px); } }
        .fade-up { animation: fadeUp 0.9s ease-out both; }
        .delay-1 { animation-delay: 0.12s; }
        .delay-2 { animation-delay: 0.24s; }
        .delay-3 { animation-delay: 0.36s; }
        .delay-4 { animation-delay: 0.48s; }
        .pole-stripe { background: repeating-linear-gradient(45deg, ${CORAL}, ${CORAL} 12px, ${SAND} 12px, ${SAND} 24px); animation: drift 2s linear infinite; }
        .display-text { font-family: var(--font-display); }
        .script-text { font-family: var(--font-script); }
        .arch-img { border-radius: 280px 280px 8px 8px; }
      `}</style>

      <header className="border-b" style={{ borderColor: TEAL, backgroundColor: SAND }}>
        <div className="h-2 pole-stripe" />
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <div className="display-text text-2xl" style={{ color: TEAL }}>VJ Barbershop</div>
            <div className="text-[10px] uppercase tracking-[0.4em] mt-1" style={{ color: MUTED }}>Glendale · Est. 2005</div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" style={{ color: STONE }}>The Shop</a>
            <a href="#cuts" style={{ color: STONE }}>Cuts</a>
            <a href="#reviews" style={{ color: STONE }}>Reviews</a>
            <a href="#visit" style={{ color: STONE }}>Visit</a>
          </div>
          <a href={c.hero.ctaLink} className="px-5 py-2.5 rounded-full text-sm font-semibold" style={{ backgroundColor: CORAL, color: SAND }}>{c.hero.ctaText}</a>
        </nav>
      </header>

      <section className="relative overflow-hidden border-b" style={{ borderColor: TEAL }}>
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 fade-up">
            <div className="text-xs uppercase tracking-[0.5em] mb-6" style={{ color: CORAL }}>{c.hero.eyebrow}</div>
            <h1 className="display-text text-6xl md:text-8xl leading-[0.95] mb-8" style={{ color: TEAL_DARK }}>
              {c.hero.heading}
            </h1>
            <p className="text-lg leading-relaxed max-w-xl mb-10" style={{ color: MUTED }}>{c.hero.subheading}</p>
            <div className="flex flex-wrap items-center gap-5">
              <a href={c.hero.ctaLink} className="px-8 py-4 rounded-full text-base font-semibold inline-flex items-center gap-2" style={{ backgroundColor: TEAL, color: SAND }}>
                {c.hero.ctaText}
                <span>→</span>
              </a>
              <span className="script-text text-2xl" style={{ color: CORAL }}>walk-ins welcome.</span>
            </div>
          </div>
          <div className="md:col-span-5 fade-up delay-2">
            <div className="relative">
              <div className="arch-img overflow-hidden border-4" style={{ borderColor: TEAL, height: 540 }}>
                <div className="w-full h-full" style={{ backgroundImage: `url("${HERO_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center" style={{ backgroundColor: CORAL, color: SAND }}>
                <div className="display-text text-3xl leading-none">4.4★</div>
                <div className="text-[10px] uppercase tracking-widest mt-1">31 reviews</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 border-b" style={{ borderColor: TEAL, backgroundColor: SAND }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.5em] mb-3" style={{ color: CORAL }}>{c.about.label}</div>
          <h2 className="display-text text-5xl md:text-6xl leading-[1.05] mb-12 max-w-3xl" style={{ color: TEAL_DARK }}>{c.about.heading}</h2>
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-7 space-y-6 text-lg leading-relaxed" style={{ color: STONE }}>
              {c.about.paragraphs.map((p: string, i: number) => <p key={i}>{p}</p>)}
            </div>
            <div className="md:col-span-5">
              <div className="border-4 rounded-3xl overflow-hidden" style={{ borderColor: TEAL }}>
                <div className="w-full h-80" style={{ backgroundImage: `url("${SHOP_PHOTO}")`, backgroundSize: "cover", backgroundPosition: "center" }} />
              </div>
              <div className="mt-6 px-6 py-5 rounded-2xl" style={{ backgroundColor: TEAL, color: SAND }}>
                <div className="text-xs uppercase tracking-widest mb-1 opacity-70">Open every single day</div>
                <div className="display-text text-3xl">Mon–Sun 8 to 7</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="cuts" className="py-24 border-b" style={{ borderColor: TEAL, backgroundColor: TEAL }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-6">
            <div>
              <div className="text-xs uppercase tracking-[0.5em] mb-3" style={{ color: CORAL }}>The menu</div>
              <h2 className="display-text text-5xl md:text-6xl leading-tight" style={{ color: SAND }}>Cuts, beards, & the works.</h2>
            </div>
            <div className="script-text text-2xl" style={{ color: CORAL }}>cash or card. same price.</div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {c.services.map((s: any, i: number) => (
              <article key={i} className="rounded-3xl p-8 flex flex-col h-full" style={{ backgroundColor: SAND }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="text-[10px] uppercase tracking-[0.35em]" style={{ color: MUTED }}>№ {String(i + 1).padStart(2, "0")}</div>
                  <div className="display-text text-2xl" style={{ color: CORAL }}>{s.price}</div>
                </div>
                <h3 className="display-text text-3xl mb-4 leading-tight" style={{ color: TEAL_DARK }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: MUTED }}>{s.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 border-b" style={{ borderColor: TEAL, backgroundColor: SAND }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.5em] mb-3" style={{ color: CORAL }}>The neighbors</div>
          <h2 className="display-text text-5xl md:text-6xl leading-tight mb-14" style={{ color: TEAL_DARK }}>What Glendale says.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {c.reviews.map((r: any, i: number) => (
              <figure key={i} className="border-4 rounded-3xl p-8 flex flex-col h-full" style={{ borderColor: TEAL }}>
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: r.rating }).map((_, j) => <span key={j} style={{ color: CORAL }}>★</span>)}
                </div>
                <blockquote className="text-lg leading-relaxed mb-6 flex-grow" style={{ color: STONE }}>"{r.text}"</blockquote>
                <figcaption>
                  <div className="display-text text-xl" style={{ color: TEAL_DARK }}>{r.name}</div>
                  <div className="text-xs uppercase tracking-[0.3em] mt-1" style={{ color: MUTED }}>{r.context}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="py-24" style={{ backgroundColor: CORAL }}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.5em] mb-4" style={{ color: SAND }}>Find us</div>
            <h2 className="display-text text-5xl md:text-7xl leading-[0.95] mb-8" style={{ color: SAND }}>Come by the shop.</h2>
            <p className="text-lg leading-relaxed mb-10 max-w-md" style={{ color: SAND }}>One block off Glendale Boulevard. Plenty of street parking. Walk in or call ahead — we hold the chair either way.</p>

            <dl className="space-y-5 mb-10">
              <div>
                <dt className="text-xs uppercase tracking-[0.35em] mb-1" style={{ color: SAND, opacity: 0.7 }}>Address</dt>
                <dd className="text-xl" style={{ color: SAND }}>{c.contact.address}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.35em] mb-1" style={{ color: SAND, opacity: 0.7 }}>Phone</dt>
                <dd className="display-text text-3xl"><a href={`tel:${c.contact.phone.replace(/\D/g, "")}`} style={{ color: SAND }}>{c.contact.phone}</a></dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.35em] mb-2" style={{ color: SAND, opacity: 0.7 }}>Hours</dt>
                <dd>
                  <table className="text-sm" style={{ color: SAND }}>
                    <tbody>
                      {Object.entries(c.contact.hours).map(([day, hours]) => (
                        <tr key={day}>
                          <td className="pr-8 py-1 font-semibold">{day}</td>
                          <td>{String(hours)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </dd>
              </div>
            </dl>
          </div>
          <div className="rounded-3xl overflow-hidden border-4" style={{ borderColor: SAND, minHeight: 420 }}>
            <iframe src={`https://maps.google.com/maps?output=embed&q=${encodeURIComponent(c.contact.mapEmbedQuery || c.contact.address)}`} width="100%" height="500" style={{ border: 0 }} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
        </div>
      </section>

      <footer className="py-12 text-center" style={{ backgroundColor: TEAL_DARK, color: SAND }}>
        <div className="display-text text-2xl mb-2">VJ Barbershop</div>
        <div className="script-text text-xl mb-4" style={{ color: CORAL }}>since 2005, family-run.</div>
        <div className="text-xs uppercase tracking-[0.4em] opacity-70">© {new Date().getFullYear()} VJ Barbershop · Glendale, CA</div>
      </footer>
    </main>
  );
}
