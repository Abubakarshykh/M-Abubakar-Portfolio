import { useEffect, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (sectionId: string) => {
    setIsMenuOpen(false);
    if (smoother) {
      smoother.scrollTo(sectionId, true, "top top");
    }
  };
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-logo" data-cursor="disable">
          <img src="/images/logo.svg" alt="Abubakar Logo" />
        </a>
        <a
          href="mailto:sheikhabubaker498@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          sheikhabubaker498@gmail.com
        </a>

        {/* Desktop Menu */}
        <ul className="desktop-nav">
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className={`menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <IoClose size={28} /> : <HiOutlineMenuAlt3 size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`nav-overlay ${isMenuOpen ? "open" : ""}`}>
        <div className="nav-overlay-content">
          <ul>
            <li onClick={() => closeMenu("#about")}>
              <span className="nav-number">01</span>
              <span className="nav-text">ABOUT</span>
            </li>
            <li onClick={() => closeMenu("#work")}>
              <span className="nav-number">02</span>
              <span className="nav-text">WORK</span>
            </li>
            <li onClick={() => closeMenu("#contact")}>
              <span className="nav-number">03</span>
              <span className="nav-text">CONTACT</span>
            </li>
          </ul>
          <div className="nav-footer">
            <p>GET IN TOUCH</p>
            <a href="mailto:sheikhabubaker498@gmail.com">
              sheikhabubaker498@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
