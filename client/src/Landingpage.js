import React from "react";
import macbook1 from "./assests/img/macbook1.png";
import landing1 from "./assests/img/1.png";
import landing2 from "./assests/img/2.png";
import landing3 from "./assests/img/3.png";
import landing4 from "./assests/img/4.png";
import landing5 from "./assests/img/5.png";
import landing6 from "./assests/img/8.png";
import landing7 from "./assests/img/Group14.png";
import landing8 from "./assests/img/8.png";
import logo from "./assests/img/logo.png";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

function Landingpage({ isAuthenticated }) {
  if (isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <div>
      <header>
        <div className="container">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <nav className="nav" style={{ marginLeft: "70%" }}>
            <Link to="/login" className="btn">
              Log In
            </Link>
            <Link to="/register" className="btn">
              Sign In
            </Link>
          </nav>
        </div>
      </header>
      <section id="home_hero">
        <div className="hero_text">
          <h1>
            Real-time Option Order Flow<span>.</span>
          </h1>
          <h2
            style={{
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto"
            }}
          >
            OptionFlo alerts you as notable orders take place on the stock and
            equity options markets. Remove the noise and zone in on what truly
            matters.
            <a href="/select-a-plan/" className="btn btn-primary">
              Try Two Weeks for $37
            </a>
            <p style={{ fontSize: "0.75rem", paddingTop: "1.5rem" }}>
              Two week trial offer ends February 15th. Plans starting at just
              $99/Month when paid annually.{" "}
            </p>
          </h2>
        </div>
        <div className="hero_img animated fadeInUp">
          <img src={macbook1} alt="macbook1" />
        </div>
        <div
          id="bg"
          className="animated fadeIn"
          style={{ animationDelay: "0.2s", animationDuration: "1s" }}
        ></div>
      </section>
      <section id="overview" className="page-panel">
        <div className="container">
          <h2 className="animated fadeIn wow">
            <span>_</span>Institutional-level Order Flow Data for the Retail
            Trader<span>.</span>
          </h2>
          <h3 className="animated fadeIn wow">
            OptionFlow is a data algorithm that tracks down smart money
            transactions in the stock and equity options markets. It actively
            monitors the tape(time and sales) market wide.
          </h3>

          <div className="columns icons-left divide-bottom">
            <div className="column">
              <div className="icon-container">
                <img
                  src={landing1}
                  alt="landing1"
                  className="icon wow fadeIn"
                />
              </div>
              <div className="content-container">
                <h4 className="decor">
                  Smart Money Transactions, Front and Center.
                </h4>
                <p>
                  OptionFlow identifies Smart Money transactions by analyzing
                  various data points on each order as they hit the tape(time
                  and sales) including the order type, order size, the speed of
                  the order, the pattern in which the order fills, the order
                  volume, average volume, among many more.
                </p>
              </div>
            </div>
            <div className="column">
              <div className="icon-container">
                <img
                  src={landing2}
                  alt="landing2"
                  className="icon wow fadeIn"
                />
              </div>
              <div className="content-container">
                <h4 className="decor">
                  Realtime, On-Demand, and Algorithmically Curated.
                </h4>
                <p>
                  OptionFlow tracks down only what's truly valuable. Leaving out
                  everything you don't want or need. Every order that FlowAlgo
                  reports to you has a high potential of being market moving.
                </p>
                <p>
                  You no longer have to dig for data or maintain complex
                  spreadsheets. Order data is alerted to you in realtime and
                  available at anytime, on-demand.{" "}
                </p>
              </div>
              <p></p>
            </div>
          </div>

          <h2 className="hl large">
            <span>_</span>OPtionFlow Tracks<span>.</span>
          </h2>

          <div className="columns ordertypes">
            <div className="column">
              <img src={landing3} alt="landing3" className="icon" />
              <h4>Intermarket Sweep Orders</h4>
              <p>
                The order type for stealth and execution speed. An indicator of
                urgency.
              </p>
              <a
                className="btn btn-primary"
                href="javascript:bookmarkscroll.scrollTo('intermarket-sweep')"
              >
                See How Sweeps Are Uncovered.
              </a>
            </div>
            <div className="column">
              <img src={landing4} alt="landing4" className="icon" />
              <h4>Option Block Trades</h4>
              <p>
                Privately negotiated option block trades. Substantial in size.
              </p>
              <a
                className="btn btn-primary"
                href="javascript:bookmarkscroll.scrollTo('option-blocks')"
              >
                See How Blocks Are Tracked.
              </a>
            </div>
            <div className="column">
              <img src={landing5} alt="landing5" className="icon" />
              <h4>Equity Blocks &amp; Darkpool Prints</h4>
              <p>
                Large equity block trades across lit(public) and dark(private)
                exchanges.
              </p>
              <a
                className="btn btn-primary"
                href="javascript:bookmarkscroll.scrollTo('darkflow')"
              >
                Shine Light on the Darkpool
              </a>
            </div>
          </div>

          {/* <div
            className="columns"
            style={{
              width: '1200px',
              margin: '5rem auto 0 auto',
              display: 'block',
              maxWidth: '100%',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '1rem'
            }}
          >
            <h2 className="hl large">
              <span>_</span>FlowAlgo Intraday Demo with Voice Alerts
              <span>.</span>
            </h2>
            <script
              src="https://fast.wistia.com/embed/medias/2hc4ki01ey.jsonp"
              async
            ></script>
            <script
              src="https://fast.wistia.com/assets/external/E-v1.js"
              async
            ></script>
            <div
              className="wistia_responsive_padding"
              style={{ padding: '56.25% 0 0 0', position: 'relative' }}
            >
              <div
                className="wistia_responsive_wrapper"
                style={{
                  height: '100%',
                  left: '0',
                  position: 'absolute',
                  top: '0',
                  width: '100%'
                }}
              >
                <div
                  className="wistia_embed wistia_async_2hc4ki01ey videoFoam=true"
                  style={{ height: '100%', width: '100%' }}
                >
                  &nbsp;
                </div>
              </div>
            </div>
          </div> */}

          {/* <div
            className="columns"
            style={{
              width: '1200px',
              margin: '5rem auto 0 auto',
              display: 'block',
              maxWidth: '100%',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              paddingTop: '1rem'
            }}
          >
            <h2 className="hl large">
              <span>_</span>Option flow is a leading indicator<span>.</span>
            </h2>
            <script
              src="https://fast.wistia.com/embed/medias/ublt3iwqml.jsonp"
              async
            ></script>
            <script
              src="https://fast.wistia.com/assets/external/E-v1.js"
              async
            ></script>
            <div
              className="wistia_responsive_padding"
              style={{ padding: '56.25% 0 0 0', position: 'relative' }}
            >
              <div
                className="wistia_responsive_wrapper"
                style={{
                  height: '100',
                  left: '0',
                  position: 'absolute',
                  top: '0',
                  width: '100%'
                }}
              >
                <div
                  className="wistia_embed wistia_async_ublt3iwqml videoFoam=true"
                  style={{
                    height: '100%',
                    position: 'relative',
                    width: '100%'
                  }}
                >
                  <div
                    className="wistia_swatch"
                    style={{
                      height: '100%',
                      left: '0',
                      opacity: '0',
                      overflow: 'hidden',
                      position: 'absolute',
                      top: '0',
                      transition: 'opacity 200ms',
                      width: '100%'
                    }}
                  >
                    <img
                      src="https://fast.wistia.com/embed/medias/ublt3iwqml/swatch"
                      style={{
                        filter: 'blur(5px)',
                        height: '100%',
                        objectFit: 'contain',
                        width: '100%'
                      }}
                      alt=""
                      onload="this.parentNode.style.opacity=1;"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section id="option-blocks" className="page-panel align-center">
        <div className="container">
          <h6 className="pill">The Option Block Trade</h6>
          <h2 className="panel-hl">
            <span>_</span>Track the trades of enormous size. So large, they are
            privately negotiated<span>.</span>
          </h2>
          <img src={landing6} className="icon-hero" />
          <span className="hl medium">
            Smart money moves volume<span>.</span>
          </span>
          <p className="lead constrain">
            Option block orders involve significantly large size. They are
            executed apart from the public auction market. Block trades were
            specifically designed for institutions and traders with major
            financial backing.
          </p>
          <hr />

          <span className="hl medium constrain">
            OptionFlo is always scanning, market wide. It alerts you of block
            trades as they happen<span>.</span>
          </span>

          <div className="flowreel animated fadeIn wow desktop-only">
            <div className="col dir">
              <img src={landing7} alt="landing7" />
            </div>
            {}
          </div>
        </div>
      </section>
      <section id="darkflow" className="page-panel align-center">
        <div className="container">
          <h6 className="pill">Equity Blocks &amp; Darkpool Prints</h6>
          <h2 className="panel-hl">
            <span>_</span>Shine light on the Dark Pool and reveal what goes on
            in the market shadows<span>.</span>
          </h2>
          <img
            src={landing8}
            alt="landing8"
            className="icon-hero wow animated zoomIn"
            style={{ animationDelay: "1.3s", animationDuration: "1s" }}
          />
          <span className="hl medium">
            It's time we flip the lights on<span>.</span>
          </span>
          <p className="lead constrain">
            Darkpools are private exchanges designed to conceal institutional
            trading activity from the public as well as from high frequency
            trading algorithms. FlowAlgo alerts you when it spots activity in
            the darkpool providing you the order data for each order. Dark pool
            order data is commonly referred to as "Dark pool prints".
          </p>

          <hr />

          <span className="hl medium constrain" style={{ padding: "0 2rem" }}>
            Dark pool prints can be used as key markers to help gauge direction
            <span>.</span>
          </span>
          <p className="lead constrain">
            They often act as support or resistance levels when tested. You can
            use them as key price levels on any timeframe. The more prints on a
            given level, the greater it's significance becomes.
          </p>

          <a
            data-toggle="darkprints-examples"
            data-toggle-text="Hide Example"
            className="btn btn-big btn-primary centerize"
          >
            Show Me.
          </a>

          <section id="darkprints-examples" className="hide">
            <em
              style={{
                textAlign: "center",
                fontSize: "0.8em",
                color: "rgba(255,255,255,0.65)",
                display: "block",
                fontStyle: "normal",
                padding: "1.5em",
                marginBottom: "0",
                background: "rgba(255,255,255,0.05)"
              }}
            >
              The information provided below is for educational purposes only
              and does not constitute investment advice. <br />
              For more info, see our full{" "}
              <a href="javascript:bookmarkscroll.scrollTo('disclaimer')">
                disclaimer.
              </a>
            </em>

            <div className="padify">
              <img
                className="flow-icon anim-icon anim-icon-init animated fadeInDown wow"
                src="https://flowalgocom.kinsta.com/wp-content/themes/flowalgo-v2/assets/images/darkpool-prints.png"
                alt="img"
                style={{
                  width: "170px",
                  height: "auto",
                  margin: "2em auto 2em auto"
                }}
              />

              <span className="hl medium">Utilizing dark pool print data.</span>
              <p className="lead constrain">
                Are they buying or selling? The answer is both. For every
                seller, there is a buyer and vice-versa so that doesn't
                necessarily matter. What does is the price action and behavior
                that follows after the transaction happens.
              </p>
              <p className="lead constrain">
                The purple line on the charts below indicates the price level
                where the "prints" or darkpool transaction(s) took place.
              </p>
              <br></br>
              <div className="columns divide-bottom">
                <div className="column">
                  <span className="hl medium">
                    <span>Bullish</span> above the prints.
                  </span>
                  <img
                    src="https://flowalgocom.kinsta.com/wp-content/themes/flowalgo-v2/assets/images/darkpool-bull.svg"
                    alt="img"
                    className="chart"
                  />
                  <p>
                    If the trend breaks above and continues through the darkpool
                    print level, it's an indication of bullishness.
                  </p>
                  <p>
                    In a bullish scenario, the darkpool print level may act as
                    resistance for some time but later breaks through it and
                    continues it's trend. After the break above, this level may
                    then become support.
                  </p>
                </div>
                <div className="column">
                  <span className="hl medium">
                    <span>Bearish</span> below the prints.
                  </span>
                  <img
                    src="https://flowalgocom.kinsta.com/wp-content/themes/flowalgo-v2/assets/images/darkpool-bear.svg"
                    alt="imge"
                    className="chart"
                  />
                  <p>
                    If the trend breaks below and continues past the darkpool
                    print level, it's an indication of bearishness.{" "}
                  </p>
                  <p>
                    In a bearish scenario, the darkpool print level may act as
                    support for some time but later fails to hold and confirms a
                    bearish trend. After the break below, this level may then
                    become resistance.
                  </p>
                </div>
              </div>

              <p className="hl small constrain">
                Obviously, this is a very simplified version of it. Dark pool
                prints are best used as an indicator alongside technicals and
                further data. They are only one part of the picture, and should
                not be used to form a trading decision on their own.
              </p>
            </div>
          </section>

          <hr />

          <span className="hl medium constrain">
            OptionFlo alerts you when it spots large blocks in the lit or dark
            markets.
          </span>
          <p className="lead constrain">
            The data all hits your dashboard as it becomes available. You can
            also filter through intraday and historical data by multiple tickers
            and date ranges.
          </p>

          <div className="flowreel darkpool animated slideInUp wow desktop-only">
            <div className="inner">
              <div className="flow-head">
                <div className="col">Time</div>
                <div className="col ticker">Ticker</div>
                <div className="col shares">Share QTY</div>
                <div className="col spot">Print Price</div>
              </div>
              <div
                className="flow-item animated fadeInUp wow"
                style={{ animationDelay: "0.1s", animationDuration: "1.5s" }}
              >
                <div className="col time">10:11:17</div>
                <div className="col ticker">AAPL</div>
                <div className="col shares">1,040,000</div>
                <div className="col spot">$152.239</div>
              </div>
              <div
                className="flow-item animated fadeInUp wow"
                style={{ animationDelay: "0.3s", animationDuration: "1.5s" }}
              >
                <div className="col time">10:10:02</div>
                <div className="col ticker">MSFT</div>
                <div className="col shares">178,000</div>
                <div className="col spot">$69.9669</div>
              </div>
              <div
                className="flow-item animated fadeInUp wow"
                style={{ animationDelay: "0.4s", animationDuration: "1.5s" }}
              >
                <div className="col time">09:59:23</div>
                <div className="col ticker">SPY</div>
                <div className="col shares">503,000</div>
                <div className="col spot">$242.7321</div>
              </div>
              <div
                className="flow-item animated fadeInUp wow"
                style={{ animationDelay: "0.5s", animationDuration: "1.5s" }}
              >
                <div className="col time">09:54:00</div>
                <div className="col ticker">AMD</div>
                <div className="col shares">150,000</div>
                <div className="col spot">$12.0199</div>
              </div>
              <div
                className="flow-item animated fadeInUp wow"
                style={{ animationDelay: "0.6s", animationDuration: "1.5s" }}
              >
                <div className="col time">09:49:19</div>
                <div className="col ticker">MCD</div>
                <div className="col shares">250,000</div>
                <div className="col spot">$141.2715</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="market-picture" className="page-panel align-center">
        <div className="container">
          <h2 className="panel-hl">
            <span>_</span>Simpler, yet far more powerful than anything else
            that's ever been publicly available<span>.</span>
          </h2>
          <p className="lead constrain">
            See the realtime now and look back to the past, on-demand.
          </p>

          <h6 className="pill">
            Accessible from any computer or device with a web browser.
          </h6>
          <img
            src={macbook1}
            alt="macbook1"
            className="hero wow animated fadeInUp"
          />
        </div>
      </section>
      <section id="closer" className="page-panel align-center">
        <div className="container">
          <h2 className="panel-hl" style={{ marginTop: "0px" }}>
            <span>_</span>Ready to Track Smart Money?<span>.</span>
          </h2>
          <p className="lead constrain" style={{ marginBottom: 0 }}>
            Try FlowAlgo for 2 full weeks for just $37.
          </p>
          <p
            style={{ marginTop: "0", marginBottom: "0" }}
            className="lead constrain"
          >
            After your trial, FlowAlgo is only{" "}
            <span style={{ textDecoration: "line-through", opacity: "0.5" }}>
              $199
            </span>
            $149/month.
          </p>
          <p className="lead constrain" style={{ marginTop: "0px" }}>
            No commitments and you can cancel at anytime without hassle.
          </p>
          <a
            href="/select-a-plan/"
            className="btn btn-primary wow pulse animated"
          >
            View Plans and Pricing.
          </a>
        </div>
      </section>
      <footer>
        <div className="inner">
          <div className="slim">
            <img src={logo} className="logo" alt="avgs" />

            <span className="copyright">
              &copy; 2020 OptionFlo LLC. All Rights Reserved.
            </span>
            <p className="disclaimer" id="disclaimer">
              <strong>
                <u>Legal Disclaimer:</u>
              </strong>
              OptionFlo LLC(OptionFlo) is not a registered investment advisor
              nor is licensed as such with any federal or state regulatory
              agency. OptionFlo does not manage client assets in any way.
              Information provided and opinions expressed on this website do not
              constitute investment advise. The ideas expressed on this site and
              related services are solely the opinions of FlowAlgo and are for
              educational purposes only. We advise everyone to know the risks
              involved with trading stocks and options. We encourage every
              visitor to the website to do his/her own research and to consult
              with his/her own financial advisor(s) prior to engaging in any
              investing activities, and to make sure he/she knows all the
              potential risks involved. Any investment decision that results in
              losses or gains made based on any information on this site or
              related services is not the responsibility of FlowAlgo. FlowAlgo
              is solely a data-provider and not a stock picks alert service.
            </p>

            <p className="sub">
              <sup>1</sup> Historical Data is available going back to our beta
              preview release(Feb 2020). The database is growing each day.
              Additional data going back further is planned to be added in the
              near future. If you are in need of data for a specific day, you
              can request it at anytime. We're here for you!
            </p>
            <p className="sub">
              <sup>2</sup> Realtime Data - While it's impossible to guarantee
              realtime speed 100% of the time, the majority of incoming data
              during market hours may be delayed anywhere from 500ms up to 15s
              depending on a variety of factors(network connection, network
              load, data processing time). Every effort is made to get the data
              to you as quickly as possible. Any data that is manually uncovered
              but considered a valuable addition for our customers may be
              manually added at anytime but will be timestamped according to
              when the transaction took place and will be alerted in your
              dashboard.
            </p>
            <p className="sub">
              <sup>3</sup> Dark Pool Data - Due to the nature of dark pools, it
              is not possible to report transactions in realtime. FlowAlgo will
              provide you the data as soon as the exchange reports the order or
              it is reported to FINRA's Alternative Display Facility(ADF) which
              may be a few hours later, the next day, or in some cases(when a
              dark pool transaction occurs on a Friday) it may not be reported
              until the next Monday. Please note that at the moment, equity
              block and print data is delayed up to 20 minutes due to exchange
              regulations. We are actively working on doing away with this
              delay. All data appearing under the Equity Block trades may not
              all be dark pool prints but the data is equally as valuable due to
              the nature of how trading algorithms collect and act on this data.
              You can tell dark pool prints apart from a normal block trade by
              checking the spot price. Dark pool prints will in most cases be
              filled at a long-tailed price(Example: $149.9554) and the spot
              price may also be outside of the stocks current day trading range.
              <strong>
                Update 09/06/17: FlowAlgo now identifies and highlights dark
                pool transactions within the dashboard.
              </strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, null)(Landingpage);
