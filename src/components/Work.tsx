import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding + 200;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>AI Hand Gesture Recognition</h4>
                  <p>AI & Computer Vision</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, TensorFlow, OpenCV, MediaPipe, PyTorch</p>
            </div>
            <WorkImage image="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=60&w=1000&auto=format&fit=crop" alt="AI Hand Gesture Recognition" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>University Yearbook Platform</h4>
                  <p>Web Platform</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>PHP, MySQL, Tailwind CSS, XAMPP</p>
            </div>
            <WorkImage image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=60&w=1000&auto=format&fit=crop" alt="University Yearbook Platform" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Treasure Hunt Game Server</h4>
                  <p>Socket Programming</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>C++, Sockets, REST APIs, Graph Navigation (BFS)</p>
            </div>
            <WorkImage image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=60&w=1000&auto=format&fit=crop" alt="Treasure Hunt Game Server" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Vulnerability Detection Tool</h4>
                  <p>Cybersecurity</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Python, Security Scanning, Prototype Development</p>
            </div>
            <WorkImage image="https://images.unsplash.com/photo-1563986768609-322da13575f3?q=60&w=1000&auto=format&fit=crop" alt="Vulnerability Detection Tool" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
