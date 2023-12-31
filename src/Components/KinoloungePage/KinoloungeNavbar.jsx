import { Link } from "react-router-dom";

export default function KinoloungeNavBar() {
  return (
    <>
      {/* <Link to="/kinolounge">
        <img
          id="kinoloungeHomeImg"
          src="https://kinolounge.shaw.sg/images/common/logo_homepage.png"
          alt="logo_homepage"
        />
      </Link> */}
      <header className="kinolounge-nav-header">
        <div>
          <ul className="kinolounge-nav-bar">
            <li>
              <Link to="/kinolounge/">Home</Link>
            </li>
            {/* <li> */}
            {/* <Link to="/kinolounge/#For-you"> */}
            {/* <a href="/kinolounge/#For-you">For you</a> */}
            {/* </Link> */}
            {/* </li> */}
            <li>
              <Link to="/kinolounge/page/sfs">SFS Picks</Link>
            </li>
            <li>
              <Link to="/kinolounge/page/le-french-cinema">
                Le French Cinema
              </Link>
            </li>
            <li>
              <Link to="/kinolounge/page/shaw-showcase">Shaw Showcase</Link>
            </li>
            <li>
              <Link to="/kinolounge/page/p-ramlee-classic">
                P Ramlee Classic Films
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
