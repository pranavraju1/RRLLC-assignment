import "./Footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="foot-container">
        <div className="foot-section">
          <div style={{ fontSize: "16px", color: "white" }}>CATERGORIES</div>
          <div style={{ color: "#B6BDC4", fontSize: "13px" }}>Web Builder</div>
          <div style={{ color: "#B6BDC4", fontSize: "13px" }}>Hosting</div>
          <div style={{ color: "#B6BDC4", fontSize: "13px" }}>Data Center</div>
          <div style={{ color: "#B6BDC4", fontSize: "13px" }}>
            Robotic-Automation
          </div>
        </div>
        <div className="foot-section">
          <div style={{ fontSize: "16px", color: "white" }}>CONTACT</div>
          <div style={{ color: "#B6BDC4", fontSize: "13px" }}>Contact</div>
          <div style={{ color: "#B6BDC4", fontSize: "13px" }}>
            Privacy Policy
          </div>
          <div style={{ color: "#B6BDC4", fontSize: "13px" }}>
            Terms Of Service
          </div>
          <div style={{ color: "#B6BDC4", fontSize: "13px" }}>Categories</div>
          <div style={{ color: "#B6BDC4", fontSize: "13px" }}>About</div>
        </div>
        <div className="foot-section country">
          <div>United States <img src="downfoot.png" alt="" style={{marginLeft:"10px"}} /></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
