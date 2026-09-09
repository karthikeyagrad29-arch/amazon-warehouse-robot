import robotsImage from "../assets/robots.png"
import TypingTitle from "./TypingTitle"

function Header() {
  return (
    <section className="header">
      <div className="header-intro">
        <div className="header-top">
          <div className="brand-label">
            <span className="brand-amazon">Amazon</span> Warehouse robots
          </div>
          <div className="header-links">
            <a className="header-link" href="#impacts">Impacts</a>
            <a className="header-link" href="#recommendations">Recommendations</a>
            <a
              className="header-link"
              href="https://www.aboutamazon.com/news/operations/amazon-robotics-robots-fulfillment-center"
              target="_blank"
              rel="noreferrer"
            >
              Learn More
            </a>
          </div>
        </div>
        <TypingTitle text="DeepFleet: AI that powers Amazon" />

        <p>
            AI can help the world...
        </p>
      </div>
      <div className="header-image-container">
        <img className="header-image" src={robotsImage} alt="Robots working in an Amazon warehouse" />
      </div>
    </section>
  )
}

export default Header;