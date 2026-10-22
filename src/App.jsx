import React,{useState}from"react";
import{motion,AnimatePresence,useScroll,useTransform}from"framer-motion";
import{BadgeCheck,BarChart3,BriefcaseBusiness,Building2,Calculator,ChevronDown,FileCheck2,Landmark,Mail,MapPin,Menu,Phone,ReceiptIndianRupee,Scale,ShieldCheck,Sparkles,Users,X}from"lucide-react";
const services=[[ReceiptIndianRupee,"Income Tax Filing","Accurate, timely filing support for individuals, professionals and businesses."],[Calculator,"GST Services","GST registration, return filing, reconciliation and practical compliance support."],[BarChart3,"Tax Planning","Structured tax planning aligned with your income, investments and business goals."],[Building2,"Business Registration","Support for proprietorships, partnerships, LLPs and companies from setup onward."],[FileCheck2,"TDS & Compliance","TDS returns, notices, reconciliations and recurring statutory compliance assistance."],[Scale,"Notices & Representation","Professional support for assessments and tax notices."]];
const reasons=[[ShieldCheck,"Compliance-focused","Careful documentation and disciplined processes."],[Users,"Client-first advice","Clear explanations and practical options."],[BriefcaseBusiness,"Business perspective","Advice aligned with commercial priorities."],[BadgeCheck,"Reliable execution","A structured approach to records and deadlines."]];
const faqs=[["Who can use your services?","We support salaried individuals, professionals, entrepreneurs, startups, partnerships and established businesses."],["Can you help with GST registration and returns?","Yes. Support can cover registration, return filing, reconciliation and compliance guidance."],["What documents are needed?","The list depends on the service. PAN, Aadhaar, income records, tax statements, bank details and prior filings are useful starting points."],["Do you support tax notices?","Yes. Share the notice and supporting records so appropriate next steps can be discussed."]];
function Logo(){return <div className="flex items-center gap-4"><motion.div whileHover={{rotate:8,scale:1.08}} className="relative grid h-14 w-14 place-items-center overflow-hidden rounded-2xl border border-sky-400/30 bg-gradient-to-br from-[#0b2c52] to-[#020b18] shadow-[0_0_28px_rgba(69,182,255,.25)]"><span className="font-serif text-3xl font-bold">K</span><motion.span animate={{x:[-30,40],y:[28,-38]}} transition={{duration:2.6,repeat:Infinity,repeatDelay:2.2}} className="absolute h-[2px] w-20 -rotate-45 bg-gradient-to-r from-transparent via-sky-300 to-transparent"/></motion.div><div><div className="font-serif text-2xl font-bold tracking-wide sm:text-3xl">Kadam & Associates</div><div className="mt-1 text-[10px] font-semibold uppercase tracking-[.28em] text-sky-300 sm:text-xs">Tax • Compliance • Advisory</div></div></div>}
function Glow({className=""}){return <motion.div animate={{scale:[1,1.18,1],opacity:[.3,.55,.3]}} transition={{duration:7,repeat:Infinity}} className={`pointer-events-none absolute rounded-full bg-sky-500/20 blur-[100px] ${className}`}/>}
export default function App(){const[menu,setMenu]=useState(false),[faq,setFaq]=useState(0);const{scrollYProgress}=useScroll();const heroY=useTransform(scrollYProgress,[0,.25],[0,140]);const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMenu(false)};return <main className="min-h-screen overflow-x-hidden bg-[#020b18] text-white">
<motion.div style={{scaleX:scrollYProgress}} className="fixed left-0 right-0 top-0 z-[100] h-[3px] origin-left bg-gradient-to-r from-sky-500 via-cyan-300 to-white"/>
<nav className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#020b18]/80 backdrop-blur-2xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:justify-center lg:gap-6 lg:px-8">
    {/* Logo */}
    <button
      type="button"
      onClick={() => go("home")}
      aria-label="Kadam & Associates — Home"
      className="min-w-0 shrink lg:shrink-0"
    >
      <img
        src="/logo.png"
        alt="Kadam & Associates"
        className="block h-auto w-[280px] max-w-full object-contain sm:w-[360px] lg:w-[400px] xl:w-[440px]"
      />
    </button>

    {/* Desktop navigation */}
    <div className="hidden shrink-0 items-center gap-5 text-sm font-semibold text-slate-300 lg:flex xl:gap-6">
      {[
        ["Home", "home"],
        ["Services", "services"],
        ["About", "about"],
        ["Why Us", "why"],
        ["FAQs", "faqs"],
      ].map(([label, id]) => (
        <button
          key={id}
          type="button"
          onClick={() => go(id)}
          className="whitespace-nowrap transition-colors hover:text-white"
        >
          {label}
        </button>
      ))}

      <button
        type="button"
        onClick={() => go("contact")}
        className="whitespace-nowrap rounded-full bg-white px-5 py-3 font-bold text-[#020b18] transition-colors hover:bg-sky-100"
      >
        Contact Us
      </button>
    </div>

    {/* Mobile menu toggle */}
    <button
      type="button"
      onClick={() => setMenu(!menu)}
      aria-label={menu ? "Close navigation" : "Open navigation"}
      aria-expanded={menu}
      aria-controls="mobile-navigation"
      className="shrink-0 rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
    >
      {menu ? <X size={26} /> : <Menu size={26} />}
    </button>
  </div>

  {/* Mobile navigation */}
  <AnimatePresence>
    {menu && (
      <motion.div
        id="mobile-navigation"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden border-t border-white/10 bg-[#06172b] lg:hidden"
      >
        <div className="grid gap-1 p-4">
          {[
            ["Home", "home"],
            ["Services", "services"],
            ["About", "about"],
            ["Why Us", "why"],
            ["FAQs", "faqs"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              type="button"
              onClick={() => go(id)}
              className="rounded-lg px-4 py-3 text-left font-semibold text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {label}
            </button>
          ))}
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</nav>
<section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28"><motion.div style={{y:heroY}} className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1800&q=85')] bg-cover bg-center opacity-[.12]"/><div className="absolute inset-0 bg-gradient-to-r from-[#020b18] via-[#020b18]/95 to-[#06172b]/60"/><Glow className="-left-20 top-28 h-96 w-96"/><div className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-24 lg:grid-cols-[1.15fr_.85fr] lg:px-8"><motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:.8}}><div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-sky-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[.2em] text-sky-300"><Sparkles size={15}/> Smart Tax & Business Advisory</div><h1 className="font-serif text-5xl font-bold leading-[1.03] sm:text-6xl lg:text-7xl">Clarity for your taxes.<br/><span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">Confidence for your future.</span></h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">Practical, dependable guidance across tax, GST, compliance and business decisions.</p><div className="mt-9 flex flex-wrap gap-4"><button onClick={()=>go("contact")} className="rounded-full bg-white px-7 py-4 font-bold text-[#020b18]">Contact Us</button><button onClick={()=>go("services")} className="rounded-full border border-white/20 px-7 py-4">Explore Services</button></div></motion.div><motion.div animate={{y:[0,-12,0]}} transition={{duration:5,repeat:Infinity}} className="hidden rounded-[2rem] border border-white/10 bg-white/[.06] p-8 backdrop-blur-2xl lg:block"><Landmark className="text-sky-300"/><h3 className="mt-6 font-serif text-3xl font-bold">Make compliance feel manageable.</h3><p className="mt-4 text-slate-300">Start with your requirement. We help organise the information and define practical next steps.</p></motion.div></div></section>
<section id="services" className="py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="text-center"><p className="text-sm font-bold uppercase tracking-[.25em] text-sky-400">Our Expertise</p><h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">Professional services, delivered with clarity.</h2></div><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(([Icon,t,d],i)=><motion.article key={t} initial={{opacity:0,y:35}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} whileHover={{y:-10,scale:1.015}} className="rounded-[1.7rem] border border-white/10 bg-white/[.045] p-7"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-400/10 text-sky-300"><Icon/></div><h3 className="mt-6 font-serif text-2xl font-bold">{t}</h3><p className="mt-3 leading-7 text-slate-400">{d}</p></motion.article>)}</div></div></section>
<section id="about" className="border-y border-white/10 bg-[#06172b]/55 py-28"><div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8"><img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=85" alt="Professional consultation" className="h-[520px] w-full rounded-[2rem] object-cover opacity-80"/><div><p className="text-sm font-bold uppercase tracking-[.25em] text-sky-400">About the Firm</p><h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">A dependable partner for financial decisions.</h2><p className="mt-6 text-lg leading-8 text-slate-300">Kadam & Associates provides practical, dependable and well-organised tax and compliance support.</p></div></div></section>
<section id="why" className="py-28"><div className="mx-auto max-w-7xl px-5 lg:px-8"><h2 className="font-serif text-4xl font-bold sm:text-5xl">Professional support without unnecessary complexity.</h2><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{reasons.map(([Icon,t,d])=><motion.div key={t} whileHover={{y:-8}} className="rounded-[1.7rem] border border-white/10 bg-white/[.04] p-7"><Icon className="text-sky-300"/><h3 className="mt-5 font-serif text-xl font-bold">{t}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{d}</p></motion.div>)}</div></div></section>
<section id="faqs" className="border-y border-white/10 bg-[#06172b]/55 py-28"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2 lg:px-8"><h2 className="font-serif text-4xl font-bold sm:text-5xl">Everything starts with a clear conversation.</h2><div className="space-y-3">{faqs.map(([q,a],i)=><div key={q} className="rounded-2xl border border-white/10 bg-white/[.04]"><button onClick={()=>setFaq(faq===i?-1:i)} className="flex w-full justify-between p-5 text-left font-bold">{q}<ChevronDown/></button>{faq===i&&<p className="px-5 pb-5 text-slate-400">{a}</p>}</div>)}</div></div></section>
<section id="contact" className="relative py-28"><Glow className="-bottom-32 left-1/3 h-[500px] w-[500px]"/><div className="relative mx-auto max-w-7xl px-5 lg:px-8"><div className="mx-auto max-w-4xl text-center"><p className="text-sm font-bold uppercase tracking-[.25em] text-sky-400">Let's Talk</p><h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl">Ready for clearer tax and compliance support?</h2><div className="mt-10 grid gap-4 text-left md:grid-cols-3"><a href="tel:+918097791090" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-5 hover:border-sky-400/40"><Phone className="text-sky-300"/> +91 80977 91090</a><a href="mailto:s28kadam@gmail.com" className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-5 hover:border-sky-400/40"><Mail className="text-sky-300"/> s28kadam@gmail.com</a><div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-5"><MapPin className="text-sky-300"/> Panvel, Navi Mumbai, Maharashtra</div></div></div></div></section>
<footer className="border-t border-white/10 bg-[#010711] px-5 py-11"><div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between"><Logo/><div className="text-sm text-slate-500">© {new Date().getFullYear()} Kadam & Associates. All rights reserved.</div></div></footer></main>}
