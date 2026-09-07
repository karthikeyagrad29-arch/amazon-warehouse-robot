import robotsImage from "../assets/robots.png"

function Header() {
  return (
    <section className="header">
      <div className="header-top">
        <div className="brand-label">
          <span className="brand-amazon">Amazon</span> Warehouse robots
        </div>
        <a
          className="learn-more"
          href="https://www.aboutamazon.com/news/operations/amazon-robotics-robots-fulfillment-center"
          target="_blank"
          rel="noreferrer"
        >
          Learn More
        </a>
      </div>
      <h1>DeepFleet: AI that powers Amazon</h1>

      <p>
          AI can help the world...
      </p>
      <div className="header-image-container">
        <img className="header-image" src={robotsImage} alt="Robots working in an Amazon warehouse" />
      </div>
    </section>
  )
}

export default Header;