import React from 'react'
import logo from './assets/blip-logo.png'

const features = [
  {
    title: 'Market-aware generation',
    text: 'Country context, local brands, cultural nuance, and category realities built into the questionnaire itself.',
  },
  {
    title: 'Research-grade logic',
    text: 'Screeners, skip logic, fraud checks, full-scale labels, and LOI-aware structure designed for real MR workflows.',
  },
  {
    title: 'Analysis-ready design',
    text: 'Questions aligned to segmentation, driver analysis, regression, clustering, and cross-tab requirements.',
  },
  {
    title: 'Live category sensing',
    text: 'New launches, disruption signals, policy shifts, reputation risks, and innovation cues reflected in the survey.',
  },
]

const aboutPoints = [
  'Built to create an AI-powered market research ecosystem.',
  'Fast, efficient, and innovative by design.',
  'No legacy tech stack mindset.',
  'This is where AI meets MR.',
]

const workflow = [
  {
    step: '01',
    title: 'Input the research brief',
    text: 'Define objective, category, country, target audience, LOI, methodology, and analysis needs.',
  },
  {
    step: '02',
    title: 'Interpret the market',
    text: 'BLIP AI reads brand landscape, market dynamics, regulation cues, and category context.',
  },
  {
    step: '03',
    title: 'Build the instrument',
    text: 'Generate a structured questionnaire with screening, logic, fraud checks, and analysis-linked question design.',
  },
  {
    step: '04',
    title: 'Export and deploy',
    text: 'Output in Word, HTML, or JSON for survey platforms and downstream research workflows.',
  },
]

const sampleHighlights = [
  'Researcher notes under each question',
  'Fraud checks and terminations clearly marked',
  'Brand funnel, innovation, disruption, and product testing sections',
  'Exportable HTML sample included inside this project',
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
    text: 'Qualitative data analytics for modern research teams: test hypotheses with synthetic FGDs, generate instant qual reports from transcripts, and unlock advanced verbatim analytics.',
  },
]

const pricingPlans = [
  {
    name: 'Starter',
    price: '$49',
    period: '/mo',
    points: [
      '20 AI-generated questionnaires',
      'Basic skip logic and exports',
      'Sample questionnaire preview',
      'Email support',
    ],
    cta: 'Get Started',
  },
  {
    name: 'Professional',
    price: '$199',
    period: '/mo',
    tag: 'Most Popular',
    points: [
      'Unlimited generation',
      'Advanced logic branching',
      'Analysis mapping and fraud layer',
      'Direct integrations and priority support',
    ],
    cta: 'Request Demo',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    points: [
      'Custom workflows and model tuning',
      'API and enterprise deployment',
      'Razorpay-ready subscription flow',
      'Dedicated onboarding and partnership support',
    ],
    cta: 'Contact Sales',
    secondary: true,
  },
]

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#top">
            <img src={logo} alt="BLIP AI logo" className="brand-logo" />
            <div>
              <div className="brand-name">BLIP AI</div>
              <div className="brand-tagline">Where signals generate your insights</div>
            </div>
          </a>

          <nav className="nav">
            <a href="#about">About Blip</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#preview">Sample Preview</a>
            <a href="#future-blips">Future Blips</a>
            <a href="#pricing">Pricing</a>
          </nav>

          <div className="nav-actions">
            <a className="btn btn-ghost" href="#login">Login</a>
            <a className="btn btn-primary" href="#contact">Request Demo</a>
          </div>
        </div>
      </header>

      <section className="hero-panel" id="top">
        <div className="hero-orb hero-orb-left"></div>
        <div className="hero-orb hero-orb-right"></div>
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>
              Turn market signals into
              <span> research-ready questionnaires.</span>
            </h1>
            <p className="hero-text">
              BLIP AI transforms complex market research requirements into structured, context-aware quantitative questionnaires — grounded in country context, category intelligence, local brands, regulations, cultural nuance, and real market shifts.
            </p>
            <div className="hero-proof">
              <div className="proof-pill">Country-aware</div>
              <div className="proof-pill">Research-grade logic</div>
              <div className="proof-pill">Analysis-ready design</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section light-section about-section" id="about">
        <div className="container split-layout">
          <div className="section-copy">
            <div className="section-kicker">About Blip</div>
            <h2>This is where AI meets market research.</h2>
            <p>
              BLIP AI’s vision is to create an entire AI-powered MR ecosystem that is faster, more efficient, and more innovative than legacy research workflows.
            </p>
            <p>
              We are building a modern stack for researchers who want sharper tools, faster output, and an AI-native way of working across the market research lifecycle.
            </p>
          </div>

          <div className="spotlight-card">
            <div className="spotlight-grid">
              {aboutPoints.map((item) => (
                <div className="spotlight-item" key={item}>{item}</div>
              ))}
            </div>
            <div className="spotlight-note">AI-native product thinking for the next generation of MR workflows.</div>
          </div>
        </div>
      </section>

      <section className="section dark-section capabilities-section" id="capabilities">
        <div className="container">
          <div className="section-header center">
            <div className="section-kicker dark">Capabilities</div>
            <h2>What makes BLIP AI different.</h2>
            <p>
              Built for serious research teams that need relevance, structure, and market context baked into every questionnaire.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="feature-icon"></div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section light-section workflow-section">
        <div className="container split-layout reverse">
          <div className="workflow-stack">
            {workflow.map((item) => (
              <div className="workflow-card" key={item.step}>
                <div className="step">{item.step}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="section-copy sticky-copy">
            <div className="section-kicker">Process</div>
            <h2>From brief to export — without the clutter.</h2>
            <p>
              BLIP AI behaves like a smart research partner, translating the brief into a usable instrument rather than producing generic AI text.
            </p>
          </div>
        </div>
      </section>

      <section className="section dark-section sample-section" id="preview">
        <div className="container">
          <div className="section-header center">
            <div className="section-kicker dark">Sample Preview</div>
            <h2>See what a BLIP AI output actually looks like.</h2>
            <p>
              A live sample is the strongest proof. Review the questionnaire structure, researcher notes, fraud flags, and export-ready format in one place.
            </p>
          </div>

          <div className="preview-layout">
            <div className="preview-sidebar">
              <div className="sample-brand">
                <img src={logo} alt="BLIP AI" className="card-logo" />
                <div>
                  <div className="sample-title">BLIP AI Questionnaire Engine</div>
                  <div className="sample-sub">Where signals generate your insights</div>
                </div>
              </div>

              <div className="mini-grid">
                <div className="mini-box">
                  <span>Country</span>
                  <strong>Canada</strong>
                </div>
                <div className="mini-box">
                  <span>Category</span>
                  <strong>Electric Vehicles</strong>
                </div>
                <div className="mini-box">
                  <span>Target Group</span>
                  <strong>18–45 urban commuters</strong>
                </div>
                <div className="mini-box">
                  <span>LOI</span>
                  <strong>20 minutes</strong>
                </div>
              </div>

              <div className="sample-list">
                {sampleHighlights.map((item) => (
                  <div className="sample-list-item" key={item}>{item}</div>
                ))}
              </div>

              <div className="single-cta-group">
                <a className="btn btn-primary btn-large" href="/sample-questionnaire.html" target="_blank" rel="noreferrer">Open Full Sample</a>
                <a className="btn btn-secondary btn-large" href="/sample-questionnaire.html" download>Download HTML Sample</a>
              </div>
            </div>

            <div className="preview-browser">
              <div className="browser-top">
                <span></span><span></span><span></span>
              </div>
              <iframe
                title="BLIP AI Sample Questionnaire"
                src="/sample-questionnaire.html"
                className="preview-frame"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section gradient-section future-section" id="future-blips">
        <div className="container">
          <div className="section-header center light">
            <div className="section-kicker dark">Future Blips</div>
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
            <h3>Looking for partners who share the vision.</h3>
            <p>
              We are looking for partners who want to help disrupt the market research ecosystem. If this resonates, let’s get on a call.
            </p>
            <div className="partner-actions">
              <a className="btn btn-primary btn-large" href="mailto:invest@blip-ai.io">Email invest@blip-ai.io</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section light-section pricing-section" id="pricing">
        <div className="container">
          <div className="section-header center">
            <div className="section-kicker">Pricing</div>
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

      <section className="section dark-section final-cta" id="contact">
        <div className="container final-cta-inner">
          <div className="section-header light">
            <div className="section-kicker dark">Get in touch</div>
            <h2>Ready to explore BLIP AI?</h2>
            <p>
              For demos, partnerships, or ecosystem conversations, reach out directly and let’s discuss how BLIP AI can fit into your research workflow.
            </p>
          </div>

          <div className="final-cta-actions">
            <a className="btn btn-primary btn-large" href="mailto:invest@blip-ai.io?subject=Request%20a%20Demo%20for%20BLIP%20AI">Request a Demo</a>
            <a className="btn btn-ghost btn-large" id="login" href="#top">Login</a>
          </div>
        </div>
      </section>
    </div>
  )
}
