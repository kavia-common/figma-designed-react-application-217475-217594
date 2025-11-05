import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * SignInScreen
 * Translates assets/sign-in-11-235.html into JSX while injecting the original CSS/JS.
 * Keeps absolute positioning for pixel fidelity. Images are referenced from /assets/figmaimages.
 */
function SignInScreen() {
  useEffect(() => {
    // Inject CSS
    const cssId = 'sign-in-11-235-css';
    let linkEl = document.getElementById(cssId);
    if (!linkEl) {
      linkEl = document.createElement('link');
      linkEl.id = cssId;
      linkEl.rel = 'stylesheet';
      linkEl.href = `${process.env.PUBLIC_URL || ''}/assets/sign-in-11-235.css`;
      document.head.appendChild(linkEl);
    }
    // Inject JS
    const jsId = 'sign-in-11-235-js';
    let scriptEl = document.getElementById(jsId);
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = jsId;
      scriptEl.src = `${process.env.PUBLIC_URL || ''}/assets/sign-in-11-235.js`;
      scriptEl.async = true;
      document.body.appendChild(scriptEl);
    }
    return () => {
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    };
  }, []);

  return (
    <div id="screen" className="screen" role="document" aria-label="Sign In Screen">
      {/* Status Bar */}
      <div id="status-bar" className="status-bar" style={{ left: 0, top: 0, width: 375, height: 44 }}>
        <div className="time" style={{ left: 29.5, top: 12 }}>19:27</div>
        <div className="status-icons" aria-hidden="true">
          <div className="battery">
            <img src="/assets/figmaimages/figma_image_13_71_128_306.svg" alt="" />
            <img src="/assets/figmaimages/figma_image_13_71_128_307.svg" alt="" />
            <img src="/assets/figmaimages/figma_image_13_71_128_309.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Titles */}
      <h1 className="title-hello" style={{ left: 30, top: 94 }}>Hello,</h1>
      <h2 className="title-welcome" style={{ left: 30, top: 139 }}>Welcome Back!</h2>

      {/* Form */}
      <form id="signin-form" className="visually-noform" aria-label="Sign In form" autoComplete="on">
        {/* Email Field */}
        <div className="field" style={{ left: 30, top: 226, width: 315, height: 81 }}>
          <label className="field-label" htmlFor="email">Email</label>
          <div className="field-box" aria-hidden="true"></div>
          <input id="email" className="field-input" type="email" placeholder="Enter Email" aria-label="Email" inputMode="email" autoComplete="email" />
        </div>

        {/* Password Field */}
        <div className="field" style={{ left: 30, top: 337, width: 315, height: 81 }}>
          <label className="field-label" htmlFor="password">Enter Password</label>
          <div className="field-box" aria-hidden="true"></div>
          <input id="password" className="field-input" type="password" placeholder="Enter Password" aria-label="Password" autoComplete="current-password" />
        </div>

        {/* Forgot Password */}
        <button className="link-forgot" style={{ left: 40, top: 438 }} type="button" aria-label="Forgot Password">Forgot Password?</button>

        {/* Primary Button */}
        <button id="primary-btn" className="primary-btn" style={{ left: 30, top: 480, width: 315, height: 60 }} type="submit" aria-label="Sign In">
          <span className="primary-label">Sign In</span>
          <span className="primary-icon" aria-hidden="true">
            <img src="/assets/figmaimages/figma_image_54_668_53_625.svg" alt="" />
          </span>
        </button>
      </form>

      {/* Divider */}
      <div className="divider" style={{ left: 141, top: 560, width: 195, height: 17 }}>
        <div className="line left"></div>
        <div className="divider-text">Or Sign in With</div>
        <div className="line right"></div>
      </div>

      {/* Social Buttons */}
      <button className="social-btn" style={{ left: 131, top: 597, width: 44, height: 44 }} aria-label="Sign in with Google" type="button">
        <img className="social-bg" src="/assets/figmaimages/figma_image_13_36.svg" alt="" />
        <img className="social-icon" src="/assets/figmaimages/figma_image_13_48.svg" alt="Google" />
      </button>
      <button className="social-btn" style={{ left: 200, top: 597, width: 44, height: 44 }} aria-label="Sign in with Facebook" type="button">
        <div className="social-bg" aria-hidden="true"></div>
        <img className="social-icon" src="/assets/figmaimages/figma_image_13_61.svg" alt="Facebook" />
      </button>

      {/* Bottom CTA */}
      <div className="bottom-cta" style={{ left: 99, top: 696, width: 177, height: 17 }}>
        <span className="cta-text">Don’t have an account? </span><a className="cta-link" href="#" role="link">Sign up</a>
      </div>

      {/* Home Indicator */}
      <div className="home-indicator" style={{ left: 0, top: 778, width: 375, height: 34 }}>
        <div className="home-line"></div>
      </div>
    </div>
  );
}

export default SignInScreen;
