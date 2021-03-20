import "./index.css";

function App() {
  return (
    <>
      <header id="header-wrapper">
        <div id="header" class="container">
          <div id="logo">
            <h1>
              <a href="">DigitaLab</a>
            </h1>
          </div>
          <section id="menu">
            <ul>
              <li>
                <a href="" accesskey="1" title="">
                  HOME
                </a>
              </li>
              <li>
                <a href="" accesskey="2" title="">
                  Kursevi
                </a>
              </li>
              <li>
                <a href="" accesskey="3" title="">
                  O nama
                </a>
              </li>
              <li>
                <a href="" accesskey="4" title="">
                  Kontakt
                </a>
              </li>
            </ul>
          </section>
        </div>
        <section id="banner" class="container">
          <p>
            Mi smo <strong>DigitaLab</strong>, grupa mladih ljudi blabla truc
            truc.
          </p>
        </section>
      </header>
      <main id="page-wrapper">
        <div id="featured" class="container">
          <div class="title">
            <h2>Svi kursevi na jednom mestu!</h2>
          </div>
          <div class="tbox1">
            <div class="padding-bottom">
              <h2>Kurs JavaScript-a!</h2>
              <img
                src="https://www.webprogramiranje.org/wp-content/uploads/javascript_logo-250.png"
                alt=""
              />
              <p>Kurs JS namenjen je blabal truc truc...</p>
              <a href="" class="button">
                Saznaj više
              </a>
            </div>
            <div>
              <h2>Python kurs!</h2>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png"
                alt=""
                width="250"
                height="250"
              />
              <p>Kurs iz Pythona namenjen je blabla truc</p>
              <a href="" class="button">
                Saznaj više
              </a>
            </div>
          </div>
          <div class="tbox2">
            <div class="padding-bottom">
              <h2>Kurs iz Jave!</h2>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <p>Kurs iz Jave namenjen je blabla truc</p>
              <a href="" class="button">
                Saznaj više
              </a>
            </div>
            <div>
              <h2>Kurs iz GoLang-a!</h2>
              <img
                src="https://miro.medium.com/max/920/1*CdjOgfolLt_GNJYBzI-1QQ.jpeg"
                alt=""
                width="400"
                height="250"
              />
              <p>Kurs iz GoLang-a namenjen je blabla truc</p>
              <a href="" class="button">
                Saznaj više
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer id="copyright">
        <p>&copy; DIGITALAB. All rights reserved. 2021 |</p>
      </footer>
    </>
  );
}

export default App;
