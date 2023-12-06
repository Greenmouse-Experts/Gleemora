import React from "react";
import "../Stylesheet/home.css";
import fig1 from "../Image/img1.svg";
import fig2 from "../Image/img2.svg";
import fig3 from "../Image/img3.svg";
import fig4 from "../Image/img4.svg";
import icon1 from "../Image/icon1.png";
import icon2 from "../Image/icon2.png";
import icon3 from "../Image/icon3.png";
import { Link } from "react-router-dom";
import float from "../Image/Float.png";
import pinky from "../Image/Pinky.png";
import found from "../Image/found.png";
import white from "../Image/Grid.png";
import orange from "../Image/Grid1.png";
import did from "../Image/Rectangle.png";
import Join from "../components/Join";

const Main = () => {
  const findimg = [
    {
      id: 1,
      image: icon1,
      head: "Exclusive one-on-one access to celebrity-driven support",
      body: "Discover and connect with celebrated figures who’ve braved your health journey",
    },
    {
      id: 2,
      image: icon2,
      head: "Secured Heart-to-Heart sessions",
      body: "All video calls are conducted within our web app, ensuring encryption and strong backend security. Your privacy and safety of all users is our top priority.",
    },
    {
      id: 3,
      image: icon3,
      head: "Flexibility",
      body: "Schedule sessions based on your availability, ensuring every conversation happens at the right time.",
    },
  ];

  return (
    <div className="main">
      <div className="why">
        <h2>Why celebrities & influential figures?</h2>
        <p className="para_text">
          They aren't just about the glamour and the spotlight. Behind the
          scenes, they face challenges like everyone else. Their journey from
          pain to empowerment inspires and resonates. Our empowering figures —
          from celebrities to influencers and authors — will soon share their
          personal journeys with fibroids, hysterectomy, endometriosis, PCOS,
          and breast cancer. Be the first to connect with them.
        </p>
        <div className="why_img">
          <img src={fig1} alt="images" />
          <img src={fig2} alt="images" />
          <img src={fig3} alt="images" />
          <img src={fig4} alt="images" />
        </div>
      </div>
      <div className="find padding">
        <h2>Find strength in shared experiences</h2>
        <p className="para_text">
          If you're navigating the challenges of breast cancer, coping with
          uterine fibroids, or seeking understanding amidst endometriosis or
          PCOS, Gleemora's platform is for you. Amidst the physical and
          emotional battles, there lies a universal yearning for understanding,
          relatability, and a beacon of hope. At Gleemora, we bridge this gap.
        </p>

        <div className="find_img">
          {findimg.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt="" />
              <h3>{item.head}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="draw padding">
        <div className="part">
          <div>
            <h2>
              Drawing strength from celebrities & influential figures has never
              been more  accessible
            </h2>
            <Link to='about' className="button_link"> Be among the first to know</Link>
          </div>
          <img src={float} alt="" />
        </div>
        <div className="part par">
          <img src={pinky} alt="" />
          <div className="draw_text">
            <h2>Our Promise</h2>
            <p>
              {" "}
              From that first unsettling symptom, through the anxious moments
              awaiting a diagnosis, the weight of the weeks leading up to
              surgery, and the tender days of recovery — Gleemora will be there
              with you, every heartbeat, every tear, every step of the way. You
              will never walk this journey alone!
            </p>
          </div>
        </div>
      </div>
      <div className="founder padding">
        <div>
          <h2>Founder's Story</h2>
          <p>
            "I was wheeled into the theatre with fear and uncertainty. The
            medical experts did their part, but I yearned for someone who had
            walked my path. That's the void Gleemora aims to fill. Dive deeper
            into my journey and the genesis of this platform."
          </p>
          <div className="beyond">
            <Link to='/story' className="button_link">Beyond the Medical</Link>
            <span>My Personal Quest for Emotional Support</span>
          </div>
        </div>
        <img src={found} alt="" />
      </div>
      <div className="did">
        <div className="did_img">
          <h2>Did You Know?</h2>
          <div>
            <img className="rect" src={did} alt="" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="87"
              height="12"
              viewBox="0 0 87 12"
              fill="none"
            >
              <path
                d="M87 6L77 0.226497V11.7735L87 6ZM0 7H78V5H0L0 7Z"
                fill="#0D0D0D"
              />
            </svg>
            <img className="white" src={white} alt="" />
            <img className="orange" src={orange} alt="" />
          </div>
        </div>
        <div className="did_text">
          <p>
            Fibroids are the most commonly overlooked tumors in women. Yet, 80%
            of women are diagnosed by age 50.
          </p>
          <p>
            PCOS affects an estimated 8–13% of reproductive-aged persons and is
            a leading cause of infertility.
          </p>
          <p>
            Endometriosis affects roughly 10% (190 million) of reproductive-age
            persons globally.
          </p>
          <p>
            More than 4 out of 10 women aged 70–79 reported having had a
            hysterectomy.
          </p>
          <p>
            About 2.3 million women were diagnosed with breast cancer worldwide
            (2020)Access to early diagnosis and effective treatment is important
            but is limited in many settings, including in low- and middle-income
            countries.
          </p>
        </div>
      </div>
      <Join />
    </div>
  );
};

export default Main;
