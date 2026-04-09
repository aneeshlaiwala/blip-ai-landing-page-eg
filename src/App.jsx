import React from 'react'
import logo from './assets/blip-logo.png'

const features = [
  {
    title: 'Market-aware questionnaire generation',
    text: 'Creates questionnaires grounded in country context, local brands, cultural nuance, and category realities instead of generic AI output.',
  },
  {
    title: 'Policy and regulation intelligence',
    text: 'Brings relevant policy shifts, compliance cues, subsidies, tax changes, and market disruptions into the survey design where they matter.',
  },
  {
    title: 'Research rigor built in',
    text: 'Includes screeners, skip logic, fraud checks, logic consistency, full scale labels, and LOI-aware structure for professional research use.',
  },
  {
    title: 'Live category sensing',
    text: 'Flags new launches, innovation shifts, reputation risk, and disruption insights so the questionnaire reflects the market as it exists now.',
  },
  {
    title: 'Analysis-ready by design',
    text: 'Maps questions to analytics such as segmentation, regression, driver analysis, factor analysis, clustering, and cross-tabs.',
  },
  {
    title: 'Export-ready workflow',
    text: 'Deliver polished outputs in Word, HTML, or JSON so researchers can review, share, or port directly into other survey platforms.',
  },
]

const workflow = [
  {
    step: '01',
    title: 'Input the research brief',
    text: 'Define objective, category, country, target audience, methodology, incidence, LOI, and desired analyses.',
  },
  {
    step: '02',
    title: 'BLIP AI reads the market',
    text: 'The engine interprets local brand landscapes, market shifts, regulatory context, and country-specific nuance.',
  },
  {
    step: '03',
    title: 'Build a research-ready questionnaire',
    text: 'It constructs a structured instrument with screeners, skips, fraud checks, scales, and analysis-linked question design.',
  },
  {
    step: '04',
    title: 'Export and deploy',
    text: 'Deliver the questionnaire in Word, HTML, or JSON for downstream use across research and survey platforms.',
  },
]

const outputPoints = [
  'Structured questionnaire with screener, skips, and logic',
  'Question-level analytics recommendations',
  'Country-relevant brands and demographics',
  'Fraud checks clearly embedded and flagged',
  'Export to Word, HTML, and JSON',
]

const audience = [
  'Market research agencies',
  'Enterprise insights teams',
  'Innovation and concept testing teams',
  'Brand and CX researchers',
  'Global localization studies',
  'Survey operations and platform teams',
]

const previewHighlights = [
  'Researcher notes embedded under each question',
  'Fraud checks and terminations clearly marked',
  'Brand funnel, innovation, disruption, and product testing sections',
  'Exportable HTML sample included inside this project',
]

const comingSoon = [
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
    tag: '',
    points: [
      '20 AI-generated questionnaires',
      'Basic skip logic and exports',
      'Sample questionnaire preview',
      'Email support',
    ],
    cta: 'Get Started',
    secondary: false,
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
    secondary: false,
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    tag: '',
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
            <a href="#about">About</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#workflow">Workflow</a>
            <a href="#preview">Sample Preview</a>
            <a href="#pricing">Pricing</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <a className="btn btn-ghost" href="#login">Login</a>
            <a className="btn btn-primary" href="#contact">Request Demo</a>
          </div>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-bg hero-bg-1"></div>
        <div className="hero-bg hero-bg-2"></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">Intelligent questionnaire generation for market research</div>
            <h1>Turn market signals into research-ready questionnaires.</h1>
            <p className="hero-text">
              BLIP AI creates professional quantitative questionnaires using country context,
              category intelligence, local brands, regulations, cultural nuance, and real market shifts.
            </p>
            <p className="hero-subtext">
              Not a generic AI question writer. A research design engine built for teams that need stronger questionnaires, faster.
            </p>

            <div className="hero-actions">
              <a className="btn btn-primary btn-large" href="#contact">Book a Demo</a>
              <a className="btn btn-secondary btn-large" href="/sample-questionnaire.html" target="_blank" rel="noreferrer">See Sample Output</a>
            </div>

            <div className="checks">
              <div className="check">Country-specific brands and demographics</div>
              <div className="check">Cultural nuance and market dynamics</div>
              <div className="check">Fraud checks and skip logic</div>
              <div className="check">Question-level analytics guidance</div>
            </div>
          </div>

          <div className="about-card" id="about">
            <div className="eyebrow eyebrow-soft">About BLIP AI</div>
            <h2>This is where AI meets market research.</h2>
            <p>
              BLIP AI’s vision is to create an entire AI-powered market research ecosystem that is fast,
              efficient, and innovative — with no legacy tech stack holding it back.
            </p>
            <p>
              We are building for modern research teams that want sharper tools, faster outputs, and a fundamentally
              different operating model for the MR ecosystem.
            </p>
            <p>
              We are looking for partners who share our vision and want to help disrupt the market research ecosystem.
              If this resonates, let’s get on a call.
            </p>

            <div className="about-actions">
              <a className="btn btn-primary btn-large" href="mailto:invest@blip-ai.io">Email invest@blip-ai.io</a>
              <a className="btn btn-secondary btn-large" href="#coming-soon">Explore Vision</a>
            </div>

            <div className="about-note">
              Fast. Efficient. Innovative. Built natively for AI-first research workflows.
            </div>
          </div>
        </div>
      </section>

      <section className="metrics">
        <div className="container metric-grid">
          <div className="metric-card">
            <div className="metric-value">40%+</div>
            <div className="metric-label">faster questionnaire drafting</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">Global</div>
            <div className="metric-label">country-context adaptability</div>
          </div>
          <div className="metric-card">
            <div className="metric-value">3</div>
            <div className="metric-label">export formats for workflow flexibility</div>
          </div>
        </div>
      </section>

      <section className="section" id="capabilities">
        <div className="container">
          <div className="section-intro">
            <div className="eyebrow eyebrow-soft">Why BLIP AI is different</div>
            <h2>Built for real research rigor, not generic AI output.</h2>
            <p>
              BLIP AI is designed for serious market research teams that need relevance, structure,
              and context built into every questionnaire.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <div className="icon-badge"></div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt" id="workflow">
        <div className="container two-col">
          <div className="section-intro left">
            <div className="eyebrow eyebrow-soft">How it works</div>
            <h2>A clean workflow from brief to questionnaire export.</h2>
            <p>
              BLIP AI works like a smart research partner, interpreting the study inputs
              and converting them into a structured, analysis-ready instrument.
            </p>
          </div>

          <div className="workflow-list">
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
        </div>
      </section>

      <section className="section" id="preview">
        <div className="container">
          <div className="section-intro">
            <div className="eyebrow eyebrow-soft">Sample questionnaire</div>
            <h2>Show prospects what a BLIP AI output actually looks like.</h2>
            <p>
              The live sample below demonstrates how BLIP AI outputs structured, research-ready questionnaires with analysis notes and modern export quality.
            </p>
          </div>

          <div className="preview-grid">
            <div className="panel">
              <div className="sample-header">
                <div className="sample-brand">
                  <img src={logo} alt="BLIP AI" className="card-logo" />
                  <div>
                    <div className="subhead">BLIP AI Questionnaire Engine</div>
                    <div className="muted-line">Where signals generate your insights</div>
                  </div>
                </div>
                <span className="status-pill">Live intelligence layer</span>
              </div>

              <div className="mini-grid top-gap-sm">
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

              <div className="signal-panel">
                <div className="signal-header">
                  <div>
                    <div className="signal-title">Questionnaire intelligence generated</div>
                    <div className="signal-subtitle">Context-aware signals built into the instrument</div>
                  </div>
                  <span className="export-pill">Word · HTML · JSON</span>
                </div>
                <div className="signal-list">
                  <div className="signal-item">Local EV brands and competitive frame included</div>
                  <div className="signal-item">Policy shifts and charging infrastructure cues surfaced</div>
                  <div className="signal-item">Fraud checks and skip logic inserted</div>
                  <div className="signal-item">Question-level analytics guidance mapped</div>
                </div>
              </div>

              <div className="list">
                {previewHighlights.map((item) => (
                  <div className="list-item" key={item}>{item}</div>
                ))}
              </div>

              <div className="hero-actions top-gap">
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

      <section className="section section-dark" id="coming-soon">
        <div className="container">
          <div className="section-intro section-intro-dark">
            <div className="eyebrow eyebrow-dark">Coming soon</div>
            <h2>The beginning of a larger AI-powered MR ecosystem.</h2>
            <p>
              BLIP AI is not stopping at questionnaire generation. We are building an ecosystem designed to radically compress time-to-insight across quantitative and qualitative research workflows.
            </p>
          </div>

          <div className="coming-grid">
            {comingSoon.map((item) => (
              <div className="coming-card" key={item.title}>
                <div className="coming-badge">Coming Soon</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="outputs">
        <div className="container two-col">
          <div className="panel">
            <div className="eyebrow eyebrow-soft">Output quality</div>
            <h2>Professional outputs ready for the next step in your workflow.</h2>
            <div className="list">
              {outputPoints.map((item) => (
                <div className="list-item" key={item}>{item}</div>
              ))}
            </div>
          </div>

          <div className="panel">
            <div className="eyebrow eyebrow-gray">Ideal for</div>
            <h2>Teams that need better questionnaires without losing research rigor.</h2>
            <div className="audience-grid">
              {audience.map((item) => (
                <div className="audience-item" key={item}>{item}</div>
              ))}
            </div>

            <div className="promise">
              <div className="promise-label">BLIP AI promise</div>
              <div className="promise-title">Where signals generate your insights.</div>
              <p>
                Transform scattered market signals into sharper questionnaires that are faster to build and stronger to deploy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="container">
          <div className="section-intro center">
            <div className="eyebrow eyebrow-soft">Pricing</div>
            <h2>Simple, scalable pricing for every stage of growth.</h2>
            <p>
              Start lean, scale fast, and later connect the payment flow to Razorpay at the backend.
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
                <a
                  className={plan.secondary ? 'btn btn-secondary btn-block' : 'btn btn-primary btn-block'}
                  href="#contact"
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-section" id="contact">
        <div className="container cta">
          <div className="cta-copy">
            <a className="brand" href="#top">
              <img src={logo} alt="BLIP AI logo" className="brand-logo small" />
              <div>
                <div className="brand-name">BLIP AI</div>
                <div className="brand-tagline">Where signals generate your insights</div>
              </div>
            </a>
            <h2>Ready to make your questionnaire design smarter, faster, and more market-aware?</h2>
            <p>
              Show your teams how AI can improve research design quality with country context,
              category intelligence, and analysis-ready structure built in.
            </p>
          </div>

          <div className="cta-box">
            <a className="btn btn-primary btn-large btn-block" href="mailto:invest@blip-ai.io?subject=Request%20a%20Demo%20for%20BLIP%20AI">Request a Demo</a>
            <a className="btn btn-secondary btn-large btn-block" href="/sample-questionnaire.html" target="_blank" rel="noreferrer">View Sample Questionnaire</a>
            <a className="btn btn-ghost btn-large btn-block" id="login" href="#top">Login</a>
            <p className="tiny-note">
              For demos, partnerships, or ecosystem conversations, write to <strong>invest@blip-ai.io</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
