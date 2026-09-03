import robotsImage from "../assets/robots.png"

function Header() {
  return (
    <section className="header">
      <h1>Deepfleet: AI that powers the world</h1>

      <p>
          AI can help the world...
      </p>
      <img className="header-image" src={robotsImage} alt="Robots working in an Amazon warehouse" />
    </section>
  )
}

export default Header;