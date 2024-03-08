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
                    href="https://github.com/edendeveloper/dollar-view"
                    target="_blank"
                  >
                    Dollar View
                  </a>
                </h1>
                <span>A simple dollar quotation graph.</span>
              </div>
              <img
                src="https://i1.sndcdn.com/artworks-zBr11a4yezBxycgy-ZtmezA-t500x500.jpg"
                alt=""
              />
            </li>

            <li className="works-item">
              <div className="works-description">
                <h1 className="gradient-text">
                  <a
                    href="https://github.com/edendeveloper/dollar-view"
                    target="_blank"
                  >
                    Dollar View
                  </a>
                </h1>
                <span>A simple dollar quotation graph.</span>
              </div>
              <img
                src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhI2B8MykLC4K1-h6uCTVEjVLJgEHQK0FMDfQemHVO93Spbc3Iv4n71DNZgZ2CN6hdKCjYnmDT-fCXoU4LoZD6jLBiQOURW7MNptbcWa3D7FiBEEwRAqZzUKsPcSkEEUWb4BpxekFyLQr2p/s1600/WhatsApp+Image+2018-01-19+at+21.55.13.jpeg"
                alt=""
              />
            </li>

            <li className="works-item">
              <div className="works-description">
                <h1 className="gradient-text">
                  <a
                    href="https://github.com/edendeveloper/dollar-view"
                    target="_blank"
                  >
                    Dollar View
                  </a>
                </h1>
                <span>A simple dollar quotation graph.</span>
              </div>
              <img
                src="https://i.ytimg.com/vi/fPo037sI1BY/maxresdefault.jpg"
                alt=""
              />
            </li>
          </div>

          <div className="right-side">
            <li className="works-item">
              <img
                src="https://i1.sndcdn.com/artworks-zBr11a4yezBxycgy-ZtmezA-t500x500.jpg"
                alt=""
                sizes="(max-width: 479px) 90vw, (max-width: 767px) 63vw, (max-width: 991px) 50vw, (max-width: 1439px) 340px, (max-width: 1919px) 417.234375px, 455px"
              />
            </li>

            <li className="works-item">
              <img
                src="https://vinilosargentinos.com/wp-content/uploads/2023/10/Screenshot_20231026-1115412.png"
                alt=""
              />
            </li>

            <li className="works-item">
              <img
                src="https://i.ytimg.com/vi/fPo037sI1BY/maxresdefault.jpg"
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