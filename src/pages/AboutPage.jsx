import React, { useState } from "react";
import Navigation from "../components/Navigation.jsx";
import PageHeader from "../components/PageHeader.jsx";
import "../styles/about.css";

export default function AboutPage() {
  const [activeLeft, setActiveLeft] = useState(0);
  const [activeRight, setActiveRight] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const aboutData = [
    {
      leftTitle: "1897-1947",
      rightButtons: [
        {
          title: "1897",
          text: "Key to success.",
          description:
            "Ardeshir Godrej, after a few failed ventures, sets up a lock company. For him, the key to success turns out to be locks.",
          image: "src/assets/1897.jpg"
         },
        {
          title: "1918",
          text: "World's first vegetable oil soap.",
          description: "We launch Chavi, the first soap in the world to be made without animal fat. We score for Swadeshi and ahimsa.",
          image: "src/assets/1918.jpg",
        },
        {
          title: "1919",
          text: "It's all in a name.",
          description: "Soon after, we launch another soap, Godrej No.2. Why the name? To borrow Ardeshir Godrej's explanation, 'If people find No.2 so good, they'll believe No.1 to be even better!'",
          image: "src/assets/1919.jpg",
        },
        {
          title: "1921",
          text: "Supporting India's freedom movement.",
          description: "Ardeshir Godrej, an ardent nationalist, donates 3 lakh rupees to the Tilak Swaraj Fund, the largest single contribution back then.",
          image:
            "src/assets/1921.jpg",
        },
        {
          title: "1922",
          text: "A special letter from Gandhi.",
          description: "One of our most treasured moments: Mahatma Gandhi, in a letter to a favour-seeking competitor, says: 'I hold my brother Godrej in such high regard that if your enterprise is likely to harm him in any way, I regret very much that I cannot give you my blessings.'",
          image:
            "src/assets/1922.jpg",
        },
          {
          title: "1922",
          text: "Godrej soaps are endorsed by India’s freedom fighters",
          description: "Godrej No.1 is born into swadeshi fervour and is fondly endorsed by many, including Rabindranath Tagore, Annie Besant and C. Rajagopalachari. Today, it is one of India's biggest soap brands.",
          image:
            "src/assets/1922_1.jpg",
        },
          {
          title: "1938",
          text: "Securing futures",
          description: "Public Provident Fund is introduced at Godrej, 14 years before the Government of India mandates it.",
          image:
            "src/assets/1938.jpg",
        },
        {
          title: "1943",
          text: "Pirojshanagar",
          description: "PirojshanagarThe then Government of Bombay auctions Vikhroli village to Pirojsha Godrej. Over the years, Vikhroli transforms into a green, industrial township that cares for its people and the environment.",
          image:
            "src/assets/1943.jpg",
        },
          {
          title: "1943",
          text: "Going green",
          description: "We go green way before it is cool to do so and decide to let mangroves be mangroves. You will find a dense cover of mangroves, nearly 3x the size of New York's Central Park, owned and cared for by us, in the heart of our estate in Mumbai.",
          image:
            "src/assets/1943_1.jpg",
        },
         {
          title: "1944",
          text: "Safest safes",
          description: "A devastating explosion at the Bombay docks leaves terrible carnage in its wake. Among the few things to survive the blast are Godrej safes.",
          image:
            "src/assets/1944.jpg",
        },
      ],
    },
{
      leftTitle: "1951-1980",
      rightButtons: [
        {
          title: "1951",
          text: "Ballot boxes for free India's first elections",
          description:
            "We were thrilled to make 1.7 million ballot boxes for India's first steps as a democracy. K. R. Thanewalla remembers, 'I know that our best was around 22,000 ballot boxes per day! We would be at the plant from quarter to seven onwards and rarely left before midnight.'",
          image: "src/assets/1951.jpg"
         },
        {
          title: "1952",
          text: "Cinthol",
          description: "Cinthol is launched on India's Independence Day. Together with Godrej No.1, Cinthol makes us the second largest soap player in India. ",
          image: "src/assets/1952.jpg",
        },
        {
          title: "1974",
          text: "Hair Colour",
          description: "Our first hair colour product, a liquid hair dye, is a runaway success. We introduce a series of innovative hair care products through the years, becoming a leading player in Asia, Africa and Latin America.",
          image: "src/assets/1974.jpg",
        }, 
        {
          title: "1974",
          text: "Godrej Trusts",
          description: "The Soonabai Pirojsha Godrej Foundation is founded. Today, approximately 23 per cent of the promoter holding in the Group is held in trusts that invest in the environment, health and education.",
          image: "src/assets/1974_1.jpg",
        },
          {
          title: "1988",
          text: "Quality matters",
          description: "Total Quality Management is formally introduced at Godrej, grounding our commitment to create amazing quality, world-class products",
          image: "src/assets/1988.jpg",
        },
      ],
    },
{
      leftTitle: "1990-2000",
      rightButtons: [
        {
          title: "1990",
          text: "Godrej Properties",
          description:
            "Godrej Properties is established, bringing the Group's philosophy of innovation and excellence to the real estate industry in India.",
          image: "src/assets/1990.jpg"
         },
        {
          title: "1991",
          text: "Godrej Agrovet",
          description: "Godrej Agrovet is incorporated. A diversified, Research & Development backed agri-business company, it is dedicated to addressing India's key agricultural crises.",
          image: "src/assets/1991.jpg",
        },
        {
          title: "1994",
          text: "Mosquitos – the world's deadliest animals",
          description: "We acquire Translektra. With leading brands such as Goodknight and HIT, we protect against vector borne diseases and are the number one player in household insecticides in India and Indonesia.",
          image: "src/assets/1994.jpg",
        },
         {
          title: "1997",
          text: "Turning 100",
          description: "We celebrate our 100th birthday and remind ourselves that we are only as good as what we do next.",
          image: "src/assets/1997.jpg",
        },
      ],
    },    
{
      leftTitle: "2001-2015",
      rightButtons: [
        {
          title: "2001",
          text: "Godrej Consumer Products",
          description:
            "Godrej Consumer ProductsGodrej Soaps is demerged into a Chemicals business, Godrej Chemicals, and a focused FMCG business, Godrej Consumer Products - which is how we are now known.",
          image: "src/assets/2001.jpg"
         },
           {
          title: "2001",
          text: "Keyline Brands",
          description: "We start our global journey with our first acquisition outside India - Keyline Brands, a personal care player in the UK. In 2018, we divested our stake in the business, sharpening our strategic focus on emerging markets.",
          image: "src/assets/2001_1.jpg",
        },
        {
          title: "2008",
          text: "Godrej Expert",
          description: "Godrej liquid and powder hair colours is rebranded as Godrej Expert. We continue to be the number one player in the hair colour category in India, constantly innovating and exploring new ways to delight our consumers.",
          image: "src/assets/2008.jpg",
        },
          {
          title: "2008",
          text: "It's time for Africa",
          description: "We make our first African acquisitions – Rapidol and Kinky – opening up the fascinating world of hair extensions and hair care for women of African origin.",
          image: "src/assets/2008_1.jpg",
        },
         {
          title: "2008",
          text: "India's mission to the Moon",
          description: "India sends Chandrayaan–1, its first unmanned mission to the moon, becoming the fifth nation to do so. We are proud of our engineering expertise that helps build the launch vehicle and lunar orbiter for the mission.",
          image: "src/assets/2008_2.jpg",
        },
          {
          title: "2010",
          text: "Godrej Sara Lee merger",
          description: "We merge with Godrej Sara Lee. No longer just a leading soap and hair colour company, we also add the leading player in the growing household insecticides market to our portfolio.",
          image: "src/assets/2010.jpg",
        },
         {
          title: "2010",
          text: "Indonesia",
          description: "We enter the Indonesian market by acquiring P.T. Megasari Makmur, a leading home and personal care player.",
          image: "src/assets/2010_1.png",
        },
          {
          title: "2010",
          text: "Argentina",
          description: "We enter the Argentinian market by acquiring the leading hair colour players, Issue and Argencos.",
          image: "src/assets/2010_2.jpg",
        },
          {
          title: "2011",
          text: "Good & Green",
          description: "Building on our legacy of sustainability and making a commitment to build a more employable and greener world.",
          image: "src/assets/2011.jpg",
        },
          {
          title: "2011",
          text: "Darling",
          description: "We significantly ramp up our presence in Africa and step into 14 new countries by acquiring the Darling Group, a leader in hair extensions.",
          image: "src/assets/2011_1.png",
        },
           {
          title: "2011",
          text: "Godrej India Culture Lab",
          description: "The Godrej India Culture Lab is set up as a fluid, experimental space that cross-pollinates ideas and people to explore what it means to be modern and Indian.",
          image: "src/assets/2011_2_new.jpg",
        },
        {
          title: "2011",
          text: "Godrej Capability Factors",
          description: "We introduce the Godrej Capability Factors of ‘Leading Self’, ‘Leading Others’ and ‘Leading Business’, to define and measure leadership capability at Godrej. All our people processes are based on this.",
          image: "src/assets/2011_3.jpg",
        },
          {
          title: "2012",
          text: "Chile",
          description: "Our next stop – Chile – where we acquire Cosmetica Nacional, a leading hair colour and colour cosmetics company, to grow our presence in Latin America.",
          image: "src/assets/2012.png",
        },
          {
          title: "2012",
          text: "Godrej Expert Rich Crème",
          description: "Democratising creme hair colouring in India with a first-of-its-kind crème in a sachet – Godrej Expert Rich Crème.",
          image: "src/assets/2012_1.jpg",
        },
          {
          title: "2012",
          text: "HIT Magic",
          description: "A game changing paper-based mosquito repellent for the Indonesian market.",
          image: "src/assets/2012_3.png",
        },
         {
          title: "2013",
          text: "Air Care",
          description: "We foray into air care with Godrej aer, a premium innovation for cars and homes. aer is now a leading air care player in India and together with our Stella brand in Indonesia, has evolved into our fourth global category.",
          image: "src/assets/2013.jpg",
        },
        {
          title: "2013",
          text: "Godrej Capability Factors",
          description: "So, we created a small solution to this big problem – Goodknight Fast Card, a paper-based solution available at just one rupee per card.",
          image: "src/assets/2013_1.jpg",
        },
          {
          title: "2013",
          text: "Padma Bhushan",
          description: "Adi Godrej, Chairman of the Godrej Group, is awarded the Padma Bhushan, the third-highest civilian award in India, for 'distinguished service of a high order'.",
          image: "src/assets/2013_2.jpg",
        },
        {
          title: "2014",
          text: "India's mission to Mars",
          description: "We are proud to partner with the Indian Space Research Organisation (ISRO) on India's first mission to Mars. Godrej Aerospace engines power the Polar Satellite Launch Vehicle and our precision components calculate the satellite's trajectory to the millisecond.",
          image: "src/assets/2014.jpg",
        },
           {
          title: "2015",
          text: "Godrej One",
          description: "Godrej Properties and Pelli Clarke Pelli Architects create Godrej One, our new global headquarters at Vikhroli in Mumbai. ",
          image: "src/assets/2015.jpg",
        },
            {
          title: "2015",
          text: "People philosophy",
          description: "Our employee value proposition and efforts to build an inspiring place to work are anchored in the 3 pillars of ‘Your Canvas’, ‘Tough Love’ and ‘Whole Self’.",
          image: "src/assets/2015_1.jpg",
        },
      ],
    },  
    {
      leftTitle: "2016-2026",
      rightButtons: [
        {
          title: "2001",
          text: "Godrej Consumer Products",
          description:
            "Godrej Consumer ProductsGodrej Soaps is demerged into a Chemicals business, Godrej Chemicals, and a focused FMCG business, Godrej Consumer Products - which is how we are now known.",
          image: "src/assets/2001.jpg"
         },
           {
          title: "2001",
          text: "Keyline Brands",
          description: "We start our global journey with our first acquisition outside India - Keyline Brands, a personal care player in the UK. In 2018, we divested our stake in the business, sharpening our strategic focus on emerging markets.",
          image: "src/assets/2001_1.jpg",
        },
        {
          title: "2008",
          text: "Godrej Expert",
          description: "Godrej liquid and powder hair colours is rebranded as Godrej Expert. We continue to be the number one player in the hair colour category in India, constantly innovating and exploring new ways to delight our consumers.",
          image: "src/assets/2008.jpg",
        },
          {
          title: "2008",
          text: "It's time for Africa",
          description: "We make our first African acquisitions – Rapidol and Kinky – opening up the fascinating world of hair extensions and hair care for women of African origin.",
          image: "src/assets/2008_1.jpg",
        },
         {
          title: "2008",
          text: "India's mission to the Moon",
          description: "India sends Chandrayaan–1, its first unmanned mission to the moon, becoming the fifth nation to do so. We are proud of our engineering expertise that helps build the launch vehicle and lunar orbiter for the mission.",
          image: "src/assets/2008_2.jpg",
        },
          {
          title: "2010",
          text: "Godrej Sara Lee merger",
          description: "We merge with Godrej Sara Lee. No longer just a leading soap and hair colour company, we also add the leading player in the growing household insecticides market to our portfolio.",
          image: "src/assets/2010.jpg",
        },
         {
          title: "2010",
          text: "Indonesia",
          description: "We enter the Indonesian market by acquiring P.T. Megasari Makmur, a leading home and personal care player.",
          image: "src/assets/2010_1.png",
        },
          {
          title: "2010",
          text: "Argentina",
          description: "We enter the Argentinian market by acquiring the leading hair colour players, Issue and Argencos.",
          image: "src/assets/2010_2.jpg",
        },
          {
          title: "2011",
          text: "Good & Green",
          description: "Building on our legacy of sustainability and making a commitment to build a more employable and greener world.",
          image: "src/assets/2011.jpg",
        },
          {
          title: "2011",
          text: "Darling",
          description: "We significantly ramp up our presence in Africa and step into 14 new countries by acquiring the Darling Group, a leader in hair extensions.",
          image: "src/assets/2011_1.png",
        },
           {
          title: "2011",
          text: "Godrej India Culture Lab",
          description: "The Godrej India Culture Lab is set up as a fluid, experimental space that cross-pollinates ideas and people to explore what it means to be modern and Indian.",
          image: "src/assets/2011_2_new.jpg",
        },
        {
          title: "2011",
          text: "Godrej Capability Factors",
          description: "We introduce the Godrej Capability Factors of ‘Leading Self’, ‘Leading Others’ and ‘Leading Business’, to define and measure leadership capability at Godrej. All our people processes are based on this.",
          image: "src/assets/2011_3.jpg",
        },
          {
          title: "2012",
          text: "Chile",
          description: "Our next stop – Chile – where we acquire Cosmetica Nacional, a leading hair colour and colour cosmetics company, to grow our presence in Latin America.",
          image: "src/assets/2012.png",
        },
          {
          title: "2012",
          text: "Godrej Expert Rich Crème",
          description: "Democratising creme hair colouring in India with a first-of-its-kind crème in a sachet – Godrej Expert Rich Crème.",
          image: "src/assets/2012_1.jpg",
        },
          {
          title: "2012",
          text: "HIT Magic",
          description: "A game changing paper-based mosquito repellent for the Indonesian market.",
          image: "src/assets/2012_3.png",
        },
         {
          title: "2013",
          text: "Air Care",
          description: "We foray into air care with Godrej aer, a premium innovation for cars and homes. aer is now a leading air care player in India and together with our Stella brand in Indonesia, has evolved into our fourth global category.",
          image: "src/assets/2013.jpg",
        },
        {
          title: "2013",
          text: "Godrej Capability Factors",
          description: "So, we created a small solution to this big problem – Goodknight Fast Card, a paper-based solution available at just one rupee per card.",
          image: "src/assets/2013_1.jpg",
        },
          {
          title: "2013",
          text: "Padma Bhushan",
          description: "Adi Godrej, Chairman of the Godrej Group, is awarded the Padma Bhushan, the third-highest civilian award in India, for 'distinguished service of a high order'.",
          image: "src/assets/2013_2.jpg",
        },
        {
          title: "2014",
          text: "India's mission to Mars",
          description: "We are proud to partner with the Indian Space Research Organisation (ISRO) on India's first mission to Mars. Godrej Aerospace engines power the Polar Satellite Launch Vehicle and our precision components calculate the satellite's trajectory to the millisecond.",
          image: "src/assets/2014.jpg",
        },
           {
          title: "2015",
          text: "Godrej One",
          description: "Godrej Properties and Pelli Clarke Pelli Architects create Godrej One, our new global headquarters at Vikhroli in Mumbai. ",
          image: "src/assets/2015.jpg",
        },
            {
          title: "2015",
          text: "People philosophy",
          description: "Our employee value proposition and efforts to build an inspiring place to work are anchored in the 3 pillars of ‘Your Canvas’, ‘Tough Love’ and ‘Whole Self’.",
          image: "src/assets/2015_1.jpg",
        },
      ],
    },  
  ];

  const rightData = aboutData[activeLeft].rightButtons;

  return ( 
    <main className="about-page">
      <section className="front-panel">

      {/* HEADER */}
      <PageHeader title="OUR STORY" />

      {/* MAIN LAYOUT */}
      <section className="about-layout">

        {/* LEFT PANEL */}
        <aside className="about-left">
          {aboutData.map((item, idx) => (
            <button
              key={idx}
              className={`left-btn ${activeLeft === idx ? "active" : ""}`}
              onClick={() => {
                setActiveLeft(idx);
                setActiveRight(0);
              }}
            >
              {item.leftTitle}
            </button>
          ))}
        </aside>

        {/* RIGHT PANEL */}
        <section className="about-right">

          {/* TOP BUTTON ROW */}
          <div className="top-buttons">
            {rightData.map((item, idx) => (
              <button
                key={idx}
                className={`top-btn ${activeRight === idx ? "active" : ""}`}
                onClick={() => setActiveRight(idx)}
              >
                {item.title}
              </button>
            ))}
          </div>

          {/* CONTENT */}
          <div className="content-area">

            {/* IMAGE */}
            <div className="image-box">
              <img
                src={rightData[activeRight].image}
                alt=""
                onClick={() => setLightboxOpen(true)}
              />
            </div>

            {/* TEXT */}
            <div className="text-box">
              <h2>{rightData[activeRight].title}</h2>
              <h3>{rightData[activeRight].text}</h3>
              <p>{rightData[activeRight].description}</p>
            </div>

          </div>

        </section>

      </section>

      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div className="lightbox">
          <button className="close-btn" onClick={() => setLightboxOpen(false)}>×</button>
          <img src={rightData[activeRight].image} alt="" />
        </div>
      )}

      {/* FOOTER NAVIGATION */}
      <Navigation />
</section>
    </main>

  );
}