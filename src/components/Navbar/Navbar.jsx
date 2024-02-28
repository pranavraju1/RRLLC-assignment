import "./Navbar.scss";
const NavigationBar = () => {
  return (
    <div className="navigation">
      <div>
        <input type="text" />
      </div>
      <div className="tags">Categories</div>
      <div className="tags">Website Builders</div>
      <div className="tags">Today's deals</div>
    </div>
  );
};

export default NavigationBar;
