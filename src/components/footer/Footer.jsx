import socialData from "../../data/socialData";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="content">
        <div className="top">
          <div className="logo-details">
            {/* <img src={logo} className="imgfooter" /> */}
            <span className="logo_name">Synchronicity - S1</span>
          </div>

          <div className="media-icons">
            <a target="_blank" href={socialData.discord}>
              <i className="iconlink fab fa-discord"></i>
            </a>
            <a target="_blank" href={socialData.twitter}>
              <i className="iconlink fab fa-twitter"></i>
            </a>
            <a target="_blank" href={socialData.instagram}>
              <i className="iconlink fab fa-instagram"></i>
            </a>
            <a target="_blank" href={socialData.linkedin}>
              <i className="iconlink fab fa-linkedin-in"></i>
            </a>
            <a target="_blank" href={socialData.email}>
              <i className="iconlink fa-solid fa-envelope"></i>
            </a>
          </div>
        </div>
        <ul className="my-3">
          <img
            src="https://admission.jdvu.ac.in/fatadmission/frontend/image/logo-black.png"
            className="imgfooterdsc"
          />
        </ul>
      </div>
      <div className="bottom-details">
        <div className="bottom_text">
          <span className="copyright_text">
            Copyright © {new Date().getFullYear()} JU ACM Student Chapter, All
            rights reserved.
          </span>
          <span className="policy_terms">Made with ❤️</span>
        </div>
      </div>
    </footer>
  );
}
