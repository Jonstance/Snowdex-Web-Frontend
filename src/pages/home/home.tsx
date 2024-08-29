import React from 'react'
import './home.css'

function Home() {
    //alert('Home');
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Welcome to SnowDex</h1>
          <p className="hero-subtitle">Trade securely on the ICE Open Network</p>
          <button className="cta-button">Swap</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose SnowDex?</h2>
          <div className="features-grid">
            <div className="feature">
            <i className="fa-solid fa-money-bill-trend-up fa-beat-fade"></i>
                            <h3>Decentralized Trading</h3>
              <p>Experience true decentralization with no central authority controlling your assets.</p>
            </div>
            <div className="feature">
            <i className="fa-solid fa-coins fa-fade"></i>
              <h3>Low Fees</h3>
              <p>Trade with minimal transaction fees, ensuring more value in your hands.</p>
            </div>
            <div className="feature">
            <i className="fa-solid fa-tent-arrow-left-right fa-flip"></i>
              <h3>Fast Transactions</h3>
              <p>Enjoy lightning-fast transaction speeds on the ICE Open Network.</p>
            </div>
            <div className="feature">
            <i className="fa-solid fa-shield fa-beat"></i>
              <h3>Secure Platform</h3>
              <p>State-of-the-art security ensures your assets are always safe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta">
        <div className="container">
          <h2>Join the Future of Trading</h2>
          <p>Start trading on SnowDex today and be part of the decentralized revolution.</p>
          <button className="cta-button">Start Trading</button>
        </div>
      </section>
</div>
  )
}

export default Home