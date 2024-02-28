import "./Cards.scss";
const Cards = () => {
  return (
    <div className="card-main">
      <p className="card-head">Related deals you might like for</p>
      <div className="card-containers">
        <div className="card-container">
          <div className="card-img">
            <img src="comp.png" alt="" />
          </div>
          <div className="card-info">
            <div className="card-off">
              <div
                className="card-off-item"
                style={{ height: "28px", width: "69px" }}
              >
                20% Off
              </div>
              <div
                className="card-off-item"
                style={{ height: "28px", width: "107px" }}
              >
                Limited time
              </div>
            </div>
            <div className="card-title">Webbuilder 1</div>
            <div className="card-text">
              Computer Modern clasic with wix support
            </div>
            <div className="card-price">
              <div style={{ fontSize: "20px", color: "#5C6874" }}>$39.96</div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#9FA9B3",
                  paddingTop: "6px",
                }}
              >
                $49.96
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#EF4C5D",
                  paddingTop: "7px",
                }}
              >
                $39.96
              </div>
            </div>
            <div>
              <button className="deal">View Deal</button>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card-img">
            <img src="comp.png" alt="" />
          </div>
          <div className="card-info">
            <div className="card-off">
              <div
                className="card-off-item"
                style={{ height: "28px", width: "69px" }}
              >
                20% Off
              </div>
              <div
                className="card-off-item"
                style={{ height: "28px", width: "107px" }}
              >
                Limited time
              </div>
            </div>
            <div className="card-title">Webbuilder 1</div>
            <div className="card-text">
              Computer Modern clasic with wix support
            </div>
            <div className="card-price">
              <div style={{ fontSize: "20px", color: "#5C6874" }}>$39.96</div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#9FA9B3",
                  paddingTop: "6px",
                }}
              >
                $49.96
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#EF4C5D",
                  paddingTop: "7px",
                }}
              >
                $39.96
              </div>
            </div>
            <div>
              <button className="deal">View Deal</button>
            </div>
          </div>
        </div>
        <div className="card-container">
          <div className="card-img">
            <img src="comp.png" alt="" />
          </div>
          <div className="card-info">
            <div className="card-off">
              <div
                className="card-off-item"
                style={{ height: "28px", width: "69px" }}
              >
                20% Off
              </div>
              <div
                className="card-off-item"
                style={{ height: "28px", width: "107px" }}
              >
                Limited time
              </div>
            </div>
            <div className="card-title">Webbuilder 1</div>
            <div className="card-text">
              Computer Modern clasic with wix support
            </div>
            <div className="card-price">
              <div style={{ fontSize: "20px", color: "#5C6874" }}>$39.96</div>
              <div
                style={{
                  fontSize: "14px",
                  color: "#9FA9B3",
                  paddingTop: "6px",
                }}
              >
                $49.96
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#EF4C5D",
                  paddingTop: "7px",
                }}
              >
                $39.96
              </div>
            </div>
            <div>
              <button className="deal">View Deal</button>
            </div>
          </div>
        </div>
      </div>
      <div className="signup">
        <div className="signup1">Sign up and get exclusive <br /> special deals</div>
        <div>
          <form>
            <input type="text" />
            <button>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cards;
