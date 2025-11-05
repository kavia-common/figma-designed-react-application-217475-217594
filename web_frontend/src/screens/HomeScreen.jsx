import React, { useEffect } from 'react';

/**
 * PUBLIC_INTERFACE
 * HomeScreen
 * This component mirrors assets/home-17-80.html using the same class names and
 * root-relative image paths so styling remains pixel-accurate. It dynamically
 * loads /assets/home-17-80.css and /assets/home-17-80.js from public assets.
 */
function HomeScreen() {
  useEffect(() => {
    // Inject CSS
    const cssId = 'home-17-80-css';
    let linkEl = document.getElementById(cssId);
    if (!linkEl) {
      linkEl = document.createElement('link');
      linkEl.id = cssId;
      linkEl.rel = 'stylesheet';
      linkEl.href = `${process.env.PUBLIC_URL || ''}/assets/home-17-80.css`;
      document.head.appendChild(linkEl);
    }
    // Inject JS (self-initializing handlers)
    const jsId = 'home-17-80-js';
    let scriptEl = document.getElementById(jsId);
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = jsId;
      scriptEl.src = `${process.env.PUBLIC_URL || ''}/assets/home-17-80.js`;
      scriptEl.async = true;
      document.body.appendChild(scriptEl);
    }

    // Cleanup not removing CSS to prevent FOUC when navigating back/forward,
    // but remove script tag to avoid duplicate listeners on remount.
    return () => {
      if (scriptEl && scriptEl.parentNode) {
        scriptEl.parentNode.removeChild(scriptEl);
      }
    };
  }, []);

  // Baseline 375x812 canvas using classes from the asset CSS
  return (
    <div id="screen" className="screen" style={{ ['--screen-w']: 375, ['--screen-h']: 812 }}>
      <div className="canvas" id="home-canvas" role="group" aria-label="Home screen canvas">
        {/* Status Bar */}
        <header className="status-bar" data-id="17:126" data-x="0" data-y="0" role="banner" aria-label="Status bar">
          <div className="time" aria-label="Current time">19:27</div>
          <div className="status-icons" aria-hidden="true">
            <span className="wifi" aria-hidden="true"></span>
            <span className="signal" aria-hidden="true"></span>
            <span className="battery" aria-hidden="true"></span>
          </div>
        </header>

        {/* Main content */}
        <main id="main" className="main" role="main">
          {/* Greeting */}
          <section className="greeting-row" data-x="30" data-y="64" data-w="315" data-h="52" aria-label="Greeting">
            <div className="greeting">
              <h1 className="title">Hello Jega</h1>
              <p className="subtitle">What are you cooking today?</p>
            </div>
            <button className="avatar-btn" aria-label="Open profile" data-id="18:301">
              <img
                src="/assets/figmaimages/figma_image_18_302.svg"
                alt="User avatar"
                width="40"
                height="40"
                loading="eager"
                decoding="async"
              />
            </button>
          </section>

          {/* Search row */}
          <section className="search-row" data-x="30" data-y="146" data-w="315" data-h="40" aria-label="Search section">
            <div className="search" role="search" data-id="38:586" aria-label="Search recipes">
              <span className="search-icon" aria-hidden="true"></span>
              <input type="search" placeholder="Search recipe" aria-label="Search recipe" inputMode="search" />
            </div>
            <button className="filter-btn" aria-label="Open filters" data-id="18:312">
              <img
                src="/assets/figmaimages/figma_image_18_331.svg"
                alt=""
                width="20"
                height="20"
                loading="eager"
                decoding="async"
              />
            </button>
          </section>

          {/* Categories */}
          <nav className="categories" aria-label="Categories" data-id="81:1026">
            <ul className="chip-list" role="listbox" aria-label="Recipe categories">
              <li><button className="chip chip--active" role="option" aria-selected="true" aria-pressed="true">All</button></li>
              <li><button className="chip" role="option" aria-selected="false" aria-pressed="false">Indian</button></li>
              <li><button className="chip" role="option" aria-selected="false" aria-pressed="false">Italian</button></li>
              <li><button className="chip" role="option" aria-selected="false" aria-pressed="false">Asian</button></li>
              <li><button className="chip" role="option" aria-selected="false" aria-pressed="false">Chinese</button></li>
              <li><button className="chip" role="option" aria-selected="false" aria-pressed="false">Fruit</button></li>
              <li><button className="chip" role="option" aria-selected="false" aria-pressed="false">Vegetables</button></li>
              <li><button className="chip" role="option" aria-selected="false" aria-pressed="false">Protein</button></li>
              <li><button className="chip" role="option" aria-selected="false" aria-pressed="false">Cereal</button></li>
              <li><button className="chip" role="option" aria-selected="false" aria-pressed="false">Local Dishes</button></li>
            </ul>
          </nav>

          {/* Dishes */}
          <section className="dishes" aria-label="Top dishes" data-id="22:265">
            <div className="cards" role="list" aria-label="Dish cards">
              {/* Card 1 */}
              <article className="dish-card" role="listitem" aria-label="Classic Greek Salad, 15 minutes, rated 4.5">
                <div className="hero" aria-hidden="true">
                  <div className="circle">
                    <img
                      className="circle-img"
                      src="/assets/figmaimages/figma_image_18_436.png"
                      alt="Greek salad"
                      width="110"
                      height="110"
                      loading="eager"
                      decoding="async"
                    />
                  </div>
                  <img
                    className="hero-rect"
                    src="/assets/figmaimages/figma_image_18_424.png"
                    alt=""
                    width="150"
                    height="176"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="badge rating-pill" aria-label="Rating">4.5</div>
                  <button className="bookmark" aria-label="Bookmark Classic Greek Salad">
                    <img src="/assets/figmaimages/figma_image_18_426.svg" alt="" width="24" height="24" loading="lazy" decoding="async" />
                    <img className="bookmark-icon" src="/assets/figmaimages/figma_image_18_427.svg" alt="" width="16" height="16" loading="lazy" decoding="async" />
                  </button>
                </div>
                <h3 className="dish-title">Classic Greek Salad</h3>
                <div className="meta" aria-label="Metadata">
                  <span className="meta-label">Time</span>
                  <span className="meta-value">15 Mins</span>
                  <span className="meta-rating" aria-label="Rating 4.5 out of 5">
                    <img src="/assets/figmaimages/figma_image_20_541.svg" alt="" width="10" height="10" loading="lazy" decoding="async" aria-hidden="true" />
                    <span>4.5</span>
                  </span>
                </div>
              </article>

              {/* Card 2 */}
              <article className="dish-card" role="listitem" aria-label="Crunchy Nut Coleslaw, 10 minutes, rated 3.5">
                <div className="hero" aria-hidden="true">
                  <div className="circle">
                    <img className="circle-img" src="/assets/figmaimages/figma_image_18_494.png" alt="Crunchy Nut Coleslaw" width="110" height="110" loading="lazy" decoding="async" />
                  </div>
                  <div className="hero-rect placeholder" aria-hidden="true"></div>
                  <div className="badge rating-pill" aria-label="Rating">3.5</div>
                  <button className="bookmark" aria-label="Bookmark Crunchy Nut Coleslaw"></button>
                </div>
                <h3 className="dish-title">Crunchy Nut Coleslaw</h3>
                <div className="meta" aria-label="Metadata">
                  <span className="meta-label">Time</span>
                  <span className="meta-value">10 Mins</span>
                  <span className="meta-rating" aria-label="Rating 3.5 out of 5"><span className="star" aria-hidden="true"></span><span>3.5</span></span>
                </div>
              </article>

              {/* Card 3 */}
              <article className="dish-card" role="listitem" aria-label="Shrimp Chicken Andouille Sausage Jambalaya, 10 minutes, rated 3.0">
                <div className="hero" aria-hidden="true">
                  <div className="circle">
                    <img className="circle-img" src="/assets/figmaimages/figma_image_20_574.png" alt="Jambalaya" width="115" height="121" loading="lazy" decoding="async" />
                  </div>
                  <div className="hero-rect placeholder" aria-hidden="true"></div>
                  <div className="badge rating-pill" aria-label="Rating">3.0</div>
                  <button className="bookmark" aria-label="Bookmark Shrimp Chicken Andouille Sausage Jambalaya"></button>
                </div>
                <h3 className="dish-title">Shrimp Chicken Andouille Sausage Jambalaya</h3>
                <div className="meta" aria-label="Metadata">
                  <span className="meta-label">Time</span>
                  <span className="meta-value">10 Mins</span>
                  <span className="meta-rating" aria-label="Rating 3.0 out of 5"><span className="star" aria-hidden="true"></span><span>3.0</span></span>
                </div>
              </article>

              {/* Card 4 */}
              <article className="dish-card" role="listitem" aria-label="Barbecue Chicken Jollof Rice, 10 minutes, rated 4.5">
                <div className="hero" aria-hidden="true">
                  <div className="circle">
                    <img className="circle-img" src="/assets/figmaimages/figma_image_22_221.png" alt="Barbecue Chicken Jollof Rice" width="142" height="138" loading="lazy" decoding="async" />
                  </div>
                  <div className="hero-rect placeholder" aria-hidden="true"></div>
                  <div className="badge rating-pill" aria-label="Rating">4.5</div>
                  <button className="bookmark" aria-label="Bookmark Barbecue Chicken Jollof Rice"></button>
                </div>
                <h3 className="dish-title">Barbecue Chicken Jollof Rice</h3>
                <div className="meta" aria-label="Metadata">
                  <span className="meta-label">Time</span>
                  <span className="meta-value">10 Mins</span>
                  <span className="meta-rating" aria-label="Rating 4.5 out of 5"><span className="star" aria-hidden="true"></span><span>4.5</span></span>
                </div>
              </article>

              {/* Card 5 */}
              <article className="dish-card" role="listitem" aria-label="Portuguese Piri Piri Chicken, 10 minutes, rated 4.5">
                <div className="hero" aria-hidden="true">
                  <div className="circle">
                    <img className="circle-img" src="/assets/figmaimages/figma_image_22_256.png" alt="Portuguese Piri Piri Chicken" width="138" height="133" loading="lazy" decoding="async" />
                  </div>
                  <div className="hero-rect placeholder" aria-hidden="true"></div>
                  <div className="badge rating-pill" aria-label="Rating">4.5</div>
                  <button className="bookmark" aria-label="Bookmark Portuguese Piri Piri Chicken"></button>
                </div>
                <h3 className="dish-title">Portuguese Piri Piri Chicken</h3>
                <div className="meta" aria-label="Metadata">
                  <span className="meta-label">Time</span>
                  <span className="meta-value">10 Mins</span>
                  <span className="meta-rating" aria-label="Rating 4.5 out of 5"><span className="star" aria-hidden="true"></span><span>4.5</span></span>
                </div>
              </article>
            </div>
          </section>

          {/* New Recipes */}
          <section className="new-recipes" aria-label="New Recipes">
            <h2 className="section-title">New Recipes</h2>
            <div className="hcards" role="list" aria-label="New recipe cards">
              {/* Card A */}
              <article className="hcard" role="listitem" aria-label="Steak with tomato sauce and bulgur rice. 20 mins, by James Milner">
                <div className="hcard-image circle" aria-hidden="true">
                  <img className="circle-img" src="/assets/figmaimages/figma_image_30_841.png" alt="Steak with tomato sauce" width="106" height="94" loading="lazy" decoding="async" />
                </div>
                <div className="hcard-body">
                  <h3 className="hcard-title">Steak with tomato sauce and bulgur rice.</h3>
                  <div className="hcard-meta" aria-label="Meta information">
                    <span className="stars" aria-hidden="true">
                      <img src="/assets/figmaimages/figma_image_30_834_9_1609.svg" alt="" width="12" height="12" loading="lazy" decoding="async" />
                      <img src="/assets/figmaimages/figma_image_30_834_9_1609.svg" alt="" width="12" height="12" loading="lazy" decoding="async" />
                      <img src="/assets/figmaimages/figma_image_30_834_9_1609.svg" alt="" width="12" height="12" loading="lazy" decoding="async" />
                      <img src="/assets/figmaimages/figma_image_30_834_9_1609.svg" alt="" width="12" height="12" loading="lazy" decoding="async" />
                      <img src="/assets/figmaimages/figma_image_30_834_9_1609.svg" alt="" width="12" height="12" loading="lazy" decoding="async" />
                    </span>
                    <span className="creator"><img className="creator-avatar" src="/assets/figmaimages/figma_image_30_848.png" alt="" width="25" height="25" loading="lazy" decoding="async" /> <span aria-label="By">By</span> James Milner</span>
                    <span className="time"><span className="timer-ico" aria-hidden="true"></span>20 mins</span>
                  </div>
                </div>
              </article>

              {/* Card B */}
              <article className="hcard" role="listitem" aria-label="Pilaf sweet with lamb-and-raisins. 20 mins, by Laura Wilson">
                <div className="hcard-image circle" aria-hidden="true">
                  <img className="circle-img" src="/assets/figmaimages/figma_image_30_811.png" alt="Pilaf with lamb" width="137" height="110" loading="lazy" decoding="async" />
                </div>
                <div className="hcard-body">
                  <h3 className="hcard-title">Pilaf sweet with lamb-and-raisins</h3>
                  <div className="hcard-meta" aria-label="Meta information">
                    <span className="stars" aria-hidden="true">
                      <img src="/assets/figmaimages/figma_image_30_804_9_1609.svg" alt="" width="12" height="12" loading="lazy" decoding="async" />
                      <img src="/assets/figmaimages/figma_image_30_804_9_1609.svg" alt="" width="12" height="12" loading="lazy" decoding="async" />
                      <img src="/assets/figmaimages/figma_image_30_804_9_1609.svg" alt="" width="12" height="12" loading="lazy" decoding="async" />
                      <img src="/assets/figmaimages/figma_image_30_804_9_1609.svg" alt="" width="12" height="12" loading="lazy" decoding="async" />
                      <img src="/assets/figmaimages/figma_image_30_804_9_1609.svg" alt="" width="12" height="12" loading="lazy" decoding="async" />
                    </span>
                    <span className="creator">By Laura Wilson</span>
                    <span className="time">20 mins</span>
                  </div>
                </div>
              </article>

              {/* Card C */}
              <article className="hcard" role="listitem" aria-label="Rice Pilaf, Broccoli and Chicken. 20 mins, by Lucas Moura">
                <div className="hcard-image circle" aria-hidden="true">
                  <img className="circle-img" src="/assets/figmaimages/figma_image_22_276.png" alt="Rice Pilaf, Broccoli and Chicken" width="117" height="100" loading="lazy" decoding="async" />
                </div>
                <div className="hcard-body">
                  <h3 className="hcard-title">Rice Pilaf, Broccoli and Chicken</h3>
                  <div className="hcard-meta" aria-label="Meta information">
                    <span className="stars" aria-hidden="true">
                      <img src="/assets/figmaimages/figma_image_30_743_9_1609.svg" alt="" width="12" height="12" loading="lazy" decoding="async" />
                    </span>
                    <span className="creator">By Lucas Moura</span>
                    <span className="time">20 mins</span>
                  </div>
                </div>
              </article>

              {/* Card D */}
              <article className="hcard" role="listitem" aria-label="Chicken meal with sauce. 20 mins, by Issabella Ethan">
                <div className="hcard-image circle" aria-hidden="true">
                  <img className="circle-img" src="/assets/figmaimages/figma_image_30_781.png" alt="Chicken meal with sauce" width="130" height="106" loading="lazy" decoding="async" />
                </div>
                <div className="hcard-body">
                  <h3 className="hcard-title">Chicken meal with sauce</h3>
                  <div className="hcard-meta" aria-label="Meta information">
                    <span className="stars" aria-hidden="true">
                      <img src="/assets/figmaimages/figma_image_30_774_9_1609.svg" alt="" width="12" height="12" loading="lazy" decoding="async" />
                    </span>
                    <span className="creator">By Issabella Ethan</span>
                    <span className="time">20 mins</span>
                  </div>
                </div>
              </article>

              {/* Card E */}
              <article className="hcard" role="listitem" aria-label="Stir-fry chicken with broccoli in sweet and sour sauce and rice. 20 mins, by Miquel Ferran">
                <div className="hcard-image circle" aria-hidden="true">
                  <img className="circle-img" src="/assets/figmaimages/figma_image_30_750.png" alt="Stir-fry chicken with broccoli" width="130" height="100" loading="lazy" decoding="async" />
                </div>
                <div className="hcard-body">
                  <h3 className="hcard-title">Stir-fry chicken with broccoli in sweet and sour sauce and rice.</h3>
                  <div className="hcard-meta" aria-label="Meta information">
                    <span className="stars" aria-hidden="true">
                      <img src="/assets/figmaimages/figma_image_30_743_9_1609.svg" alt="" width="12" height="12" loading="lazy" decoding="async" />
                    </span>
                    <span className="creator">By Miquel Ferran</span>
                    <span className="time">20 mins</span>
                  </div>
                </div>
              </article>
            </div>
          </section>
        </main>

        {/* Bottom Navigation */}
        <nav className="bottom-nav" role="navigation" aria-label="Bottom navigation">
          <button className="nav-btn active" aria-current="page" aria-label="Home">
            <img src="/assets/figmaimages/figma_image_30_595_22_648.svg" alt="" width="24" height="24" loading="eager" decoding="async" />
          </button>
          <button className="fab" aria-label="Add new">
            <img className="fab-bg" src="/assets/figmaimages/figma_image_30_595_30_362_22_771.svg" alt="" width="48" height="48" loading="eager" decoding="async" />
            <img className="fab-plus" src="/assets/figmaimages/figma_image_30_595_30_362_22_772.svg" alt="+" width="21" height="21" loading="eager" decoding="async" />
          </button>
          <button className="nav-btn" aria-label="Notifications">
            <img src="/assets/figmaimages/figma_image_30_595_22_650.svg" alt="" width="24" height="24" loading="lazy" decoding="async" />
          </button>
          <button className="nav-btn" aria-label="Bookmarks">
            <img src="/assets/figmaimages/figma_image_30_595_30_363_22_751.svg" alt="" width="24" height="24" loading="lazy" decoding="async" />
          </button>
          <button className="nav-btn" aria-label="Profile">
            <img src="/assets/figmaimages/figma_image_30_595_257_2245.svg" alt="" width="24" height="24" loading="lazy" decoding="async" />
          </button>
        </nav>

        {/* Home indicator */}
        <div className="home-indicator" aria-hidden="true">
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeScreen;
