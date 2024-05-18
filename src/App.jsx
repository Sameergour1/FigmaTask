import './App.css';

function App() {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="header-content">
          <img src="./images/Frame.png" alt="Your Image" className="header-image" />
          <h1 className="header-heading">Our Leadership</h1>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <section>
          <div className="main-content">
            {/* Left Section */}
            <img src="./images/grelements.png" alt="Your Image" className="main-element" />

            {/* Right Section */}
                         <img src="./images/rtimg.png" alt="Your Image" className="Right-image" />

            {/* Middle Section */}
            <div className="middle-section">
              <img src="./images/image1.png" alt="Your Image" className="main-image" />
              <div className='para-content'>
                <h2 className='image-heading'>COMMITTED TO INTEGRITY BY UPHOLDING <br /> GOVERNANCE STANDARDS THROUGH <br />RESPONSIBLE LEADERSHIP</h2>
                <p className='para-heading'>Four vital groups support and monitor our work. Our board of directors, executive committee, audit <br/>committee, and nomination and remuneration committee assure our integrity—one of our core values. </p>
              </div>
            </div>

            {/* Right Section */}
            <div className="right-section">
              <h2 className="right-heading">CHAIRMAN MESSAGE</h2>
              <p className="right-paragraph">“Riyadh Holding Company (RHC) has been instrumental in <br/>regenerating central Riyadh. The company's pioneering<br/> commercial developments and significant public-good <br/>projects have not only transformed the city but also set new<br/> standards for urban development.
                <br/><br/>"As we enter a new strategic era, RHC is poised for <br/>transformative growth, prioritizing ecosystem development<br/> to empower key sectors and enhance citizen experiences.<br/> Our commitment to sustainable urban growth and citizen-<br/>centric solutions is how we gauge success.”</p>
                
              <h2 className='prince-heading'><br/>
                <br/>HIS HIGHNESS PRINCE <br/> FAISAL BIN ABDULAZIZ BIN AYYAF, PHD   <br/> MAYOR OF RIYADH, CHAIRMAN OF THE BOARD</h2>
            </div>
          </div>
        </section>

        {/* Description */}
        <section  className='mid'>
          
        <section className="description">
        <img src="./logo/line-top-lft.png" alt="Your Image" className="li-tp-lft" />
        <img src="./logo/line-top-rt.png" alt="Your Image" className="li-tp-rt" />
        <img src="./logo/line-btm-lft.png" alt="Your Image" className="li-btm-lft" />
        <img src="./logo/line-btm-rt.png" alt="Your Image" className="li-btm-rt" />

  <div className="para para1">
    
    <div>
      <h3  className='margin' style={{color: '#154466',fontSize: '30px'}}>01</h3>
    </div>
    <div>
      
      <h4 style={{color: '#154466',fontSize: '20px'}}>BOARD OF DIRECTOR</h4>
      <p style={{color: '#3C729C'}}>Managing the company and defining its <br/> direction to achieve key objectives.</p>
      <p style={{color: '#3C729C'}}>Delegating specific tasks to one of his <br/> members or others.</p>
    </div>
  </div>
  <div className="para para2">
    <div>
      <h3  className='margin' style={{color: '#154466',fontSize: '30px'}}>02</h3>
    </div>
    <div>
      <h4 style={{color: '#154466',fontSize: '20px'}}>EXECUTIVE COMMITTEE</h4>
      <p style={{color: '#3C729C'}}>Overseeing the company’s strategic plan, mission, <br/> vision, objectives, initiatives, and annual budget.</p>
      <p style={{color: '#3C729C'}}>Providing related recommendations to the BoD.</p>
    </div>
  </div>
  <div className="para para3">
    <div>
      <h3  className='margin' style={{color: '#154466',fontSize: '30px'}}>03</h3>
    </div>
    <div>
      <h4 style={{color: '#154466',fontSize: '20px'}}>NOMINATION & REMUNERATION COMMITTEE</h4>
      <p style={{color: '#3C729C'}}>Supervising the N&R processes as well as the <br/> succession plan.</p>
      <p style={{color: '#3C729C'}}>Offering recommendations to the BoD related to <br/> compensations and board membership policies.</p>
    </div>
  </div>
  <div className="para para4">
    <div>
      <h3 className='margin' style={{color: '#154466',fontSize: '30px'}}>04</h3>
    </div>
    <div>
      <h4 style={{color: '#154466',fontSize: '20px'}}>AUDIT COMMITTEE</h4>
      <p style={{color: '#3C729C'}}>Monitoring the company’s financial.</p>
      <p style={{color: '#3C729C'}}>Ensure the effectiveness and efficiency of<br/> auditing tools.</p>
    </div>
  </div>
</section>

 {/* Footer */}
 <footer>
        <section className='foot'>
         
          <div className="footer-content">
            <h2  style={{color: '#C2AB80',fontSize: '25px'}}>INSPIRED TO SERVE OUR <br/> PARTNER AND COMMUNITY</h2>
            <p  style={{color: '#154466',fontSize: '15px'}} >“At RHC, we shape ecosystems and enrich communities with a Riyadh-First <br/> approach, proud of enhancing experiences for all citizens. As we expand our <br/>footprint, our future path is clear, driven by dedicated teams bringing ambitions <br/>to fruition, delighting in the growing positive impact on millions.”</p>
            <h3  style={{color: '#154466',fontSize: '20px'}}>ASSIM ALSUHAIBANI <br/>
CEO, RIYADH HOLDING COMPANY</h3>
          </div>
        </section>

        <section>
        <div className="bottom-image">
          <img src="./images/image2.png" alt="Your Image" className="btm-image" />
        </div>
          <div className='last-para'>
          <img src="./logo/ch-rt.png" alt="Your Image" className="che-rt" />
          <img src="./logo/ch-lfti.png" alt="Your Image" className="che-lft" />

            <h3  style={{color: '#124566',fontSize: '20px'}}>EXECUTIVE COMMITTEE</h3>
            <h2  style={{color: '#C2AB80',fontSize: '25px'}}>A SEASONED TEAM WITH AN ACCOMPLISHED <br/> TRACK RECORD AND ORGANIZATIONAL IMPACT</h2>
          </div>
        </section>
        <section>
          <div className='images-bottom'>
          <img src="./images/btmimg1.png" alt="Your Image" className="img-scr1" />
          <img src="./images/btmimg2.png" alt="Your Image" className="img-scr2" />
          <img src="./images/btmimg3.png" alt="Your Image" className="img-scr3" />
          <img src="./images/btmimg4.png" alt="Your Image" className="img-scr4" />

          </div>

          <div className='heading-bottom1'>
            <h2 style={{color: '#154466',fontSize: '20px'}}>Ahmed AlNaeem</h2>
            <h6 style={{color: '#154466',fontSize: '12px',marginTop: '25px'}}>Chief Strategy and Investment Officer</h6>
          </div>
          <div className='heading-bottom2'>
            <h2 style={{color: '#154466',fontSize: '20px'}}>Hassan AlOmran</h2>
            <h6 style={{color: '#154466',fontSize: '13px'}}>Chief Operating Officer</h6>
            <p style={{color: '#154466',fontSize: '12px'}}>Hassan has been the Executive Vice President of <br/>Operations at RHC since 2014. He has 20+ years of <br/>experience; he joined the company in 2002 as <br/>Director of Marketing and Public Relations. His<br/> previous experience was in the field of Marketing<br/> and Public Relations at Al-Hayat Newspaper and <br/>Wirily Wireless Company.</p>

          </div>
          <div className='heading-bottom3'>
            <h2 style={{color: '#154466',fontSize: '20px'}}>Fahad AlZouman</h2>
            <h6 style={{color: '#154466',fontSize: '12px'}}>Director of Finance</h6>
          </div>
          <div className='heading-bottom4'>
            <h2 style={{color: '#154466',fontSize: '20px'}}>Ali AlKadi</h2>
            <h6 style={{color: '#154466',fontSize: '12px'}}>Chief Shared Services Officer</h6>

          </div>
        </section>
      </footer>
</section>
      </main>

     
    </div>
  );
}

export default App;
