import React, { useState } from "react";
import { Header } from "../components/Header";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Faq = () => {
    const [openItemId, setOpenItemId] = useState(null)
  const faqData = [
    {
      id: 1,
      head: "What is Gleemora?",
      body: "Gleemora connects women dealing with health challenges like breast cancer, fibroids, endometriosis, PCOS, etc., with celebrities who have undergone similar experiences. It offers an avenue for emotional support, encouragement, and empowerment. Beyond the conversations,Gleemora fosters a global network of survivors, enabling users to find strength, guidance, and a sense of community as they navigate their health journey.",
    },
    {
      id: 2,
      head: "Why celebrities?",
      body: "Behind the glitz and glamour, celebrities face real-life challenges just like everyone else. By connecting with them, users can draw strength from their stories, find solace in shared experiences, and feel less alone in their journey. Through Adonare Health, they open up to you about their breast cancer, fibroid, hysterectomy endometriosis, and PCOS journeys, offering users comfort and inspiration from relatable stories. Their participation is not just about sharing; it's about championing a cause close to their heart.",
    },
    {
      id: 3,
      head: "Who can benefit from Gleemora?",
      body: "Any woman experiencing breast cancer, uterine fibroids, preparing for, or who has undergone a hysterectomy, as well as those facing challenges from endometriosis, PCOS, and other women's health issues, will find invaluable support, advice, and community on Adonare Health.",
    },
    {
      id: 4,
      head: "How does it work?",
      body: "The sessions are held via secure, encrypted video or audio call, ensuring your privacy and confidentiality. Once you join the waitlist, you'll be notified when our platform goes live. You'll then have the opportunity to book one-on-one sessions with available celebrities based on their schedules and rates. ",
    },
    {
      id: 5,
      head: "Will there be a fee for sessions?",
      body: "While celebrities typically command large fees for their time elsewhere, on Gleemora, these icons offer their sessions at significantly reduced rates out of a commitment to the cause. Some even generously donate their session fees to charitable endeavors, such as women's health charities or Gleemora's Donate a Pad Campaign. A portion of the session fee also helps support the running of our platform, ensuring we can continue to connect, empower, and support our community.Each celebrity will set their consultation fee, which will be clearly displayed when booking.",
    },
    {
      id: 6,
      head: "What if I can't afford to pay for a session with a celebrity?",
      body: "We understand that everyone's financial situation is different and that accessing support during challenging health journeys is crucial. If you're facing financial constraints and are pre-surgery or post-surgery, our founder, a uterine fibroid survivor, has generously offered to be available for sessions at no cost. While she may not have experienced every illness, she's committed to providing a listening ear, sharing her journey, and offering support. This offer is available for our first 500 users. Our primary goal is to ensure that everyone who needs support finds it here. Celebrities or their representatives who are passionate about sharing their journey and providing emotional support can contact us for more details.",
    },
    {
      id: 7,
      head: "Can I use Gleemora outside the United States and Canada?",
      body: "Yes, Gleemora is available to users worldwide. However, keep in mind that consultation sessions are currently conducted in English.",
    },
  ];

  const handleItemClick = (id) => {
    if (openItemId === id) {
      setOpenItemId(null);
    } else {
      setOpenItemId(id);
    }
  };
  return (
    <div className="main_faq">
      <Header title="Gleemora Health FAQ" />
      <div className="faq">
        {faqData.map((item) => (
          <div key={item.id} className="faq_content">
            <div  onClick={() => handleItemClick(item.id)} className="faqq">
               <p>{item.head}</p>
            <span onClick={() => handleItemClick(item.id)} className="faq_icon">
              {openItemId === item.id ? (
                <AiOutlineMinus />
              ) : (
                <AiOutlinePlus />
              )}
            </span> 
            </div>
            
            {openItemId === item.id && (
              <div className="faq_body">{item.body}</div>
            )}
          </div>
        ))}
      </div>
      <div className="textt">
        <h3>Medical Disclaimer</h3>
        <p>The information and discussions on Gleemora are for informational purposes only and are not intended as medical advice. Always consult with a qualified healthcare professional for medical concerns or before starting any new treatment.</p>
      </div>
    </div>
  );
};

export default Faq;
