import React from 'react'
import logo from './assets/blip-logo.png'

const capabilities = [
  {
    title: 'Market-aware generation',
    text: 'Builds questionnaires using country context, category dynamics, local brands, cultural nuance, and current market realities.',
  },
  {
    title: 'Research-grade logic',
    text: 'Includes screeners, skip logic, fraud checks, full-scale labels, and LOI-aware questionnaire structure.',
  },
  {
    title: 'Analysis-ready design',
    text: 'Questions are aligned to segmentation, driver analysis, regression, clustering, and cross-tab needs.',
  },
  {
    title: 'Export-ready output',
    text: 'Delivers questionnaires in Word, HTML, or JSON for review, deployment, and integration into other survey tools.',
  },
]

const processSteps = [
  ['01', 'Input the brief', 'Define objective, market, category, country, target audience, LOI, and research requirements.'],
  ['02', 'Read the context', 'BLIP AI interprets brands, market shifts, regulation signals, and category context before generation begins.'],
  ['03', 'Build the questionnaire', 'Generate a structured instrument with logic, fraud checks, analysis guidance, and better question flow.'],
  ['04', 'Export and deploy', 'Send the final instrument to HTML, JSON, or document-ready formats for research workflows.'],
]

const samplePoints = [
  'Researcher notes under each question',
  'Fraud checks and terminations clearly marked',
  'Brand funnel, innovation, disruption, and product-testing sections',
  'Exportable HTML sample included in this project',
]

const futureBlips = [
  {
    title: 'Synthetic data from questionnaires',
    text: 'Take your generated questionnaire and directly create synthetic data sets for early testing, demoing, and scenario modelling.',
  },
  {
    title: 'Instant report generation',
    text: 'Move from survey output to polished insight summaries, visuals, and story-ready reporting in far less time.',
  },
  {
    title: 'Blip QPro',
    text: 'Qualitative data analytics for modern research teams: synthetic FGDs, transcript summaries, and advanced verbatim analytics.',
  },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/mo',
    points: ['20 AI-generated questionnaires', 'Basic logic and exports', 'Sample questionnaire preview', 'Email support'],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$199',
    period: '/mo',
    points: ['Unlimited generation', 'Advanced logic and fraud layer', 'Analysis mapping', 'Priority support'],
    cta: 'Request Demo',
    featured: true,
    tag: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    points: ['API and enterprise deployment', 'Custom workflows', 'Razorpay-ready subscriptions', 'Dedicated onboarding'],
    cta: 'Contact Sales',
    secondary: true,
  },
]

const navItems = [
  ['About Blip', '#about'],
  ['Capabilities', '#capabilities'],
  ['Sample Preview', '#sample'],
  ['Future Blips', '#future'],
  ['Pricing', '#pricing'],
]

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#top">
            <img src={logo} alt="BLIP AI logo" className="brand-logo" />
            <div className="brand-copy">
              <div className="brand-name">BLIP AI</div>
              <div className="brand-tagline">Where signals generate your insights</div>
            </div>
          </a>

          <nav className="nav desktop-nav">
            {navItems.map(([label, href]) => (
              <a key={label} href={href}>{label}</a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="btn btn-soft" href="#login">Login</a>
            <a className="btn btn-primary" href="#contact">Request Demo</a>
          </div>
        </div>

        <div className="mobile-nav-wrap">
          <div className="container">
            <nav className="mobile-nav" aria-label="Mobile section navigation">
              {navItems.map(([label, href]) => (
                <a key={label} href={href}>{label}</a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-glow hero-glow-left"></div>
        <div className="hero-glow hero-glow-right"></div>
        <div className="container hero-inner">
          <h1>Turn market signals into research-ready questionnaires.</h1>
          <p>
            BLIP AI transforms complex market research requirements into structured, context-aware quantitative questionnaires grounded in country context, category intelligence, local brands, regulations, cultural nuance, and real market shifts.
          </p>
        </div>
      </section>

      <section className="section section-light" id="about">
        <div className="container two-col about-layout">
          <div className="section-copy">
            <div className="section-label">About Blip</div>
            <h2>This is where AI meets market research.</h2>
            <p>
              BLIP AI’s vision is to create an entire AI-powered market research ecosystem that is fast, efficient, and innovative — without legacy tech stack thinking holding it back.
            </p>
            <p>
              We are building a modern stack for research teams that want sharper tools, faster outputs, and an AI-native way of working across the market research lifecycle.
            </p>
          </div>

          <div className="about-panel">
            <div className="about-card">Built to create an AI-powered market research ecosystem</div>
            <div className="about-card">Fast, efficient, and innovative by design</div>
            <div className="about-card">No legacy tech stack mindset</div>
            <div className="about-card">AI-native product thinking for modern MR teams</div>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="capabilities">
        <div className="container">
          <div className="section-head center light-text">
            <div className="section-label dark">Capabilities</div>
            <h2>Built for real research rigor.</h2>
            <p>
              Stronger logic, sharper context, and better questionnaire output quality — built into the product, not patched in later.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((item) => (
              <div className="capability-card" key={item.title}>
                <div className="capability-icon"></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container two-col process-layout">
          <div className="process-panel">
            {processSteps.map(([step, title, text]) => (
              <div className="process-card" key={step}>
                <div className="process-step">{step}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="section-copy process-copy">
            <div className="section-label">How it works</div>
            <h2>From brief to export, cleanly.</h2>
            <p>
              BLIP AI behaves like a smart research partner, translating the brief into a usable instrument rather than producing generic AI text.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-dark" id="sample">
        <div className="container">
          <div className="section-head center light-text">
            <div className="section-label dark">Sample Preview</div>
            <h2>See the output in action.</h2>
            <p>
              Review the questionnaire structure, researcher notes, fraud flags, and export-ready format in one place.
            </p>
          </div>

          <div className="sample-layout">
            <div className="sample-sidebar">
              <div className="sample-brand">
                <img src={logo} alt="BLIP AI logo" className="sample-logo" />
                <div>
                  <div className="sample-title">BLIP AI Questionnaire Engine</div>
                  <div className="sample-subtitle">Where signals generate your insights</div>
                </div>
              </div>

              <div className="sample-boxes">
                <div className="sample-box"><span>Country</span><strong>Canada</strong></div>
                <div className="sample-box"><span>Category</span><strong>Electric Vehicles</strong></div>
                <div className="sample-box"><span>Target Group</span><strong>18–45 urban commuters</strong></div>
                <div className="sample-box"><span>LOI</span><strong>20 minutes</strong></div>
              </div>

              <div className="sample-points">
                {samplePoints.map((point) => (
                  <div className="sample-point" key={point}>{point}</div>
                ))}
              </div>

              <div className="sample-actions">
                <a className="btn btn-primary btn-large" href="/sample-questionnaire.html" target="_blank" rel="noreferrer">Open Full Sample</a>
                <a className="btn btn-secondary btn-large" href="/sample-questionnaire.html" download>Download HTML Sample</a>
              </div>
            </div>

            <div className="browser">
              <div className="browser-top">
                <span></span><span></span><span></span>
              </div>
              <iframe title="BLIP AI Sample Questionnaire" src="/sample-questionnaire.html" className="sample-frame" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-gradient" id="future">
        <div className="container">
          <div className="section-head center light-text">
            <div className="section-label dark">Future Blips</div>
            <h2>Beyond questionnaire generation.</h2>
            <p>
              BLIP AI is evolving into a larger AI-powered MR ecosystem designed to compress time-to-insight across quantitative and qualitative workflows.
            </p>
          </div>

          <div className="future-grid">
            {futureBlips.map((item) => (
              <div className="future-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="partner-panel">
            <div>
              <h3>Looking for partners who share the vision.</h3>
              <p>
                We are looking for partners who want to help disrupt the market research ecosystem. If this resonates, let’s get on a call.
              </p>
            </div>
            <a className="btn btn-primary btn-large" href="mailto:invest@blip-ai.io">Email invest@blip-ai.io</a>
          </div>
        </div>
      </section>

      <section className="section section-light" id="pricing">
        <div className="container">
          <div className="section-head center">
            <div className="section-label">Pricing</div>
            <h2>Simple, scalable pricing.</h2>
            <p>
              Start lean, scale fast, and connect the payment flow to Razorpay later at the backend.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan) => (
              <div className={plan.featured ? 'price-card featured' : 'price-card'} key={plan.name}>
                {plan.tag ? <div className="price-tag">{plan.tag}</div> : null}
                <div className="price-name">{plan.name}</div>
                <div className="price-row">
                  <span className="price-value">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
                <div className="price-points">
                  {plan.points.map((point) => (
                    <div className="price-point" key={point}>{point}</div>
                  ))}
                </div>
                <a className={plan.secondary ? 'btn btn-secondary btn-block' : 'btn btn-primary btn-block'} href="#contact">
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark final-cta" id="contact">
        <div className="container final-cta-inner">
          <div className="section-head center light-text">
            <div className="section-label dark">Get in touch</div>
            <h2>Ready to explore BLIP AI?</h2>
            <p>
              For demos, partnerships, or ecosystem conversations, reach out directly and let’s discuss how BLIP AI can fit into your research workflow.
            </p>
          </div>

          <div className="final-actions">
            <a className="btn btn-primary btn-large" href="mailto:invest@blip-ai.io?subject=Request%20a%20Demo%20for%20BLIP%20AI">Request a Demo</a>
            <a className="btn btn-soft btn-large" id="login" href="#top">Login</a>
          </div>
        </div>
      </section>
    </div>
  )
}
