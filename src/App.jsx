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

export default function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            <img src={logo} alt="BLIP AI logo" className="brand-logo" />
            <div>
              <div className="brand-name">BLIP AI</div>
              <div className="brand-tagline">Where signals generate your insights</div>
            </div>
          </div>

          <nav className="nav">
            <a href="#capabilities">Capabilities</a>
            <a href="#workflow">Workflow</a>
            <a href="#outputs">Outputs</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="nav-actions">
            <a className="btn btn-secondary" href="#outputs">See Sample</a>
            <a className="btn btn-primary" href="#contact">Request Demo</a>
          </div>
        </div>
      </header>

      <section className="hero">
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
              <a className="btn btn-secondary btn-large" href="#outputs">See Sample Output</a>
            </div>

            <div className="checks">
              <div className="check">Country-specific brands and demographics</div>
              <div className="check">Cultural nuance and market dynamics</div>
              <div className="check">Fraud checks and skip logic</div>
              <div className="check">Question-level analytics guidance</div>
            </div>
          </div>

          <div className="hero-card-wrap">
            <div className="hero-card">
              <div className="hero-card-head">
                <div className="hero-card-brand">
                  <img src={logo} alt="BLIP AI" className="card-logo" />
                  <div>
                    <div className="card-title">BLIP AI Questionnaire Engine</div>
                    <div className="card-tag">Where signals generate your insights</div>
                  </div>
                </div>
                <span className="status-pill">Live intelligence layer</span>
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

      <section className="section cta-section" id="contact">
        <div className="container cta">
          <div className="cta-copy">
            <div className="brand">
              <img src={logo} alt="BLIP AI logo" className="brand-logo small" />
              <div>
                <div className="brand-name">BLIP AI</div>
                <div className="brand-tagline">Where signals generate your insights</div>
              </div>
            </div>
            <h2>Ready to make your questionnaire design smarter, faster, and more market-aware?</h2>
            <p>
              Show your teams how AI can improve research design quality with country context,
              category intelligence, and analysis-ready structure built in.
            </p>
          </div>

          <div className="cta-box">
            <a className="btn btn-primary btn-large" href="mailto:hello@blipai.com">Request a Demo</a>
            <a className="btn btn-secondary btn-large" href="#outputs">Download Sample Questionnaire</a>
            <p className="tiny-note">
              Replace the demo email with your actual email or demo booking link before publishing.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
