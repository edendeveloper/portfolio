import "./works.css";

export default function Works() {
  return (
    <section className="works-container">
        <ul className="works-list">
          <div className="left-side">
            <li className="works-item">
              <div className="works-description">
                <h1 className="gradient-text">
                  <a
                    href="https://edendeveloper.github.io/dollar-view/"
                    target="_blank"
                  >
                    Dollar View
                  </a>
                </h1>
                <span>A simple dollar quotation graph.</span>
              </div>
              <img
                src="https://i.ibb.co/ZLxp0rY/dollar-view.png"
                alt=""
              />
            </li>

            <li className="works-item">
              <div className="works-description">
                <h1 className="gradient-text">
                  <a
                    href="https://edendeveloper.github.io/pokedex/"
                    target="_blank"
                  >
                    Pokedex
                  </a>
                </h1>
                <span>Pokedex made with pokeAPI</span>
              </div>
              <img
                src="https://github.com/edendeveloper/pokedex/raw/main/.github/example.png"
                alt=""
              />
            </li>
          </div>

          <div className="right-side">
          <li className="works-item">
              <div className="works-description">
                <h1 className="gradient-text">
                  <a
                    href="https://edendeveloper.github.io/nlw-setup/"
                    target="_blank"
                  >
                    NLW Setup
                  </a>
                </h1>
                <span>Habit tracker made in a rocketseat event.</span>
              </div>
              <img
                src="https://github.com/edendeveloper/nlw-setup/raw/main/.github/preview.jpg"
                alt=""
              />
            </li>
          </div>
        </ul>
        <div className="works-title">
          <h1 className="gradient-text">My work.</h1>
          <p>
            Improving abilities <i>while</i> having fun.
          </p>
        </div>
      </section>
  )
}