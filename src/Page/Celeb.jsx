import React from "react";
import { Header } from "../components/Header";

const Celeb = () => {
  const ceb = [
    {
      id: 1,
      head: "Flexibility:",
      body: "Set your pace. Choose your availability and set your consultation fee.",
    },
    {
      id: 1,
      head: "Community:",
      body: "Be part of a pioneering platform network dedicated to bridging the gap between medical support and emotional well-being.",
    },
  ];
  return (
    <div className="celeb_main">
      <Header title="Join as a Celebrity Survivor" />
      <div className="celeb">
        <div className="fifth padding">
          <div className="div1">
            <div className="plain">
              {" "}
              <h3>Why Partner with Us?</h3>
              <p>
                At Gleemora, we believe every story has the power to heal,
                inspire, and empower. Celebrities, and influential figures
                beyond the glamour, have faced challenges like everyone else,
                and sharing their journey can provide unmatched emotional
                support to countless women navigating similar paths.
              </p>
            </div>
            <div className="dark heb">
              <h3>Empowerment:</h3>
              <p>
                Your experience can offer solace and strength to those feeling
                isolated in their journey.
              </p>
            </div>
          </div>
          <div className="div2">
            {ceb.map((item) => (
              <div className="heb">
                <h3>{item.head}</h3> <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        <section className="register padding">
          <h2>Join our Mission</h2>
          <p>
            Fill the form below and submit to join other celebrities on Gleemora
          </p>
          <form action="">
            <input type="text" name="name" id="name" placeholder="Name" />
            <input type="email" name="email" id="email" placeholder="Email" />
            <input
              type="text"
              name="namw"
              id="name"
              placeholder="Any Questions/Comments"
            />
            <textarea
              name="experience"
              id=""
              cols="30"
              rows="10"
              placeholder="Description of Experience"
            ></textarea>
            <button action="submit" className="join_btn con">
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Celeb;
