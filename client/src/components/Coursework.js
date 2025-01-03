import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useTranslation } from "./language/LanguageContext";

const Coursework = () => {
  const sliderRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const { t, language } = useTranslation();

  const coursework = [
    {
      title: t("coursework.coursework-list.data-structures.title"),
      description: [
        t("coursework.coursework-list.data-structures.description.0"),
        t("coursework.coursework-list.data-structures.description.1"),
        t("coursework.coursework-list.data-structures.description.2"),
        t("coursework.coursework-list.data-structures.description.3"),
        t("coursework.coursework-list.data-structures.description.4"),
      ],
      tags: [
        t("coursework.coursework-list.data-structures.tags.0"),
        t("coursework.coursework-list.data-structures.tags.1"),
        t("coursework.coursework-list.data-structures.tags.2"),
      ],
    },
    {
      title: t("coursework.coursework-list.computer-systems.title"),
      description: [
        t("coursework.coursework-list.computer-systems.description.0"),
        t("coursework.coursework-list.computer-systems.description.1"),
        t("coursework.coursework-list.computer-systems.description.2"),
        t("coursework.coursework-list.computer-systems.description.3"),
        t("coursework.coursework-list.computer-systems.description.4"),
      ],
      tags: [
        t("coursework.coursework-list.computer-systems.tags.0"),
        t("coursework.coursework-list.computer-systems.tags.1"),
        t("coursework.coursework-list.computer-systems.tags.2"),
      ],
    },
    {
      title: t("coursework.coursework-list.discrete-math.title"),
      description: [
        t("coursework.coursework-list.discrete-math.description.0"),
        t("coursework.coursework-list.discrete-math.description.1"),
        t("coursework.coursework-list.discrete-math.description.2"),
        t("coursework.coursework-list.discrete-math.description.3"),
        t("coursework.coursework-list.discrete-math.description.4"),
      ],
      tags: [
        t("coursework.coursework-list.discrete-math.tags.0"),
        t("coursework.coursework-list.discrete-math.tags.1"),
        t("coursework.coursework-list.discrete-math.tags.2"),
      ],
    },
    {
      title: t("coursework.coursework-list.cms.title"),
      description: [
        t("coursework.coursework-list.cms.description.0"),
        t("coursework.coursework-list.cms.description.1"),
        t("coursework.coursework-list.cms.description.2"),
        t("coursework.coursework-list.cms.description.3"),
        t("coursework.coursework-list.cms.description.4"),
      ],
      tags: [
        t("coursework.coursework-list.cms.tags.0"),
        t("coursework.coursework-list.cms.tags.1"),
        t("coursework.coursework-list.cms.tags.2"),
      ],
    },
    {
      title: t("coursework.coursework-list.server-side-web-dev.title"),
      description: [
        t("coursework.coursework-list.server-side-web-dev.description.0"),
        t("coursework.coursework-list.server-side-web-dev.description.1"),
        t("coursework.coursework-list.server-side-web-dev.description.2"),
        t("coursework.coursework-list.server-side-web-dev.description.3"),
        t("coursework.coursework-list.server-side-web-dev.description.4"),
      ],
      tags: [
        t("coursework.coursework-list.server-side-web-dev.tags.0"),
        t("coursework.coursework-list.server-side-web-dev.tags.1"),
        t("coursework.coursework-list.server-side-web-dev.tags.2"),
      ],
    },
    {
      title: t("coursework.coursework-list.databases.title"),
      description: [
        t("coursework.coursework-list.databases.description.0"),
        t("coursework.coursework-list.databases.description.1"),
        t("coursework.coursework-list.databases.description.2"),
        t("coursework.coursework-list.databases.description.3"),
        t("coursework.coursework-list.databases.description.4"),
      ],
      tags: [
        t("coursework.coursework-list.databases.tags.0"),
        t("coursework.coursework-list.databases.tags.1"),
        t("coursework.coursework-list.databases.tags.2"),
      ],
    },
    {
      title: t("coursework.coursework-list.ui-ux.title"),
      description: [
        t("coursework.coursework-list.ui-ux.description.0"),
        t("coursework.coursework-list.ui-ux.description.1"),
        t("coursework.coursework-list.ui-ux.description.2"),
        t("coursework.coursework-list.ui-ux.description.3"),
        t("coursework.coursework-list.ui-ux.description.4"),
      ],
      tags: [
        t("coursework.coursework-list.ui-ux.tags.0"),
        t("coursework.coursework-list.ui-ux.tags.1"),
        t("coursework.coursework-list.ui-ux.tags.2"),
      ],
    },
    {
      title: t("coursework.coursework-list.web-dev.title"),
      description: [
        t("coursework.coursework-list.web-dev.description.0"),
        t("coursework.coursework-list.web-dev.description.1"),
        t("coursework.coursework-list.web-dev.description.2"),
        t("coursework.coursework-list.web-dev.description.3"),
        t("coursework.coursework-list.web-dev.description.4"),
      ],
      tags: [
        t("coursework.coursework-list.web-dev.tags.0"),
        t("coursework.coursework-list.web-dev.tags.1"),
        t("coursework.coursework-list.web-dev.tags.2"),
      ],
    },
    {
      title: t("coursework.coursework-list.networks.title"),
      description: [
        t("coursework.coursework-list.networks.description.0"),
        t("coursework.coursework-list.networks.description.1"),
        t("coursework.coursework-list.networks.description.2"),
        t("coursework.coursework-list.networks.description.3"),
        t("coursework.coursework-list.networks.description.4"),
      ],
      tags: [
        t("coursework.coursework-list.networks.tags.0"),
        t("coursework.coursework-list.networks.tags.1"),
        t("coursework.coursework-list.networks.tags.2"),
      ],
    },
    {
      title: t("coursework.coursework-list.intro-to-cs.title"),
      description: [
        t("coursework.coursework-list.intro-to-cs.description.0"),
        t("coursework.coursework-list.intro-to-cs.description.1"),
        t("coursework.coursework-list.intro-to-cs.description.2"),
        t("coursework.coursework-list.intro-to-cs.description.3"),
        t("coursework.coursework-list.intro-to-cs.description.4"),
      ],
      tags: [
        t("coursework.coursework-list.intro-to-cs.tags.0"),
        t("coursework.coursework-list.intro-to-cs.tags.1"),
        t("coursework.coursework-list.intro-to-cs.tags.2"),
      ],
    },
    {
      title: t("coursework.coursework-list.web-scripting.title"),
      description: [
        t("coursework.coursework-list.web-scripting.description.0"),
        t("coursework.coursework-list.web-scripting.description.1"),
        t("coursework.coursework-list.web-scripting.description.2"),
        t("coursework.coursework-list.web-scripting.description.3"),
      ],
      tags: [
        t("coursework.coursework-list.web-scripting.tags.0"),
        t("coursework.coursework-list.web-scripting.tags.1"),
        t("coursework.coursework-list.web-scripting.tags.2"),
      ],
    },
    {
      title: t("coursework.coursework-list.data-analysis.title"),
      description: [
        t("coursework.coursework-list.data-analysis.description.0"),
        t("coursework.coursework-list.data-analysis.description.1"),
        t("coursework.coursework-list.data-analysis.description.2"),
        t("coursework.coursework-list.data-analysis.description.3"),
        t("coursework.coursework-list.data-analysis.description.4"),
      ],
      tags: [
        t("coursework.coursework-list.data-analysis.tags.0"),
        t("coursework.coursework-list.data-analysis.tags.1"),
        t("coursework.coursework-list.data-analysis.tags.2"),
      ],
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    centerMode: true,
    centerPadding: "0px",
    variableWidth: false,
    prevArrow: <SamplePrevArrow onClick={() => setIsUserInteracting(true)} />,
    nextArrow: <SampleNextArrow onClick={() => setIsUserInteracting(true)} />,
    beforeChange: () => setIsUserInteracting(true),
    afterChange: () => setIsUserInteracting(false),
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isUserInteracting && sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isUserInteracting]);

  return (
    <div className="coursework-container" lang={language}>
      <h1 className="coursework-title">
        <span className="content-backdrop">{t("coursework.title-name")}</span>
      </h1>
      <Slider
        {...settings}
        ref={sliderRef}
        className="coursework-slider content-backdrop"
      >
        {coursework.map((course, index) => (
          <div key={index} className="coursework-slide">
            <div className="coursework-card">
              <h2 className="coursework-card-title">{course.title}</h2>
              <ul className="coursework-card-description">
                {course.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="coursework-info-tags">
                {course.tags.map((tag, idx) => (
                  <span key={idx} className="coursework-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SamplePrevArrow = ({ onClick }) => (
  <button
    className="arrow prev-arrow"
    onClick={onClick}
    aria-label="Previous Slide"
  >
    <FiChevronLeft className="arrow-icon" />
  </button>
);

const SampleNextArrow = ({ onClick }) => (
  <button
    className="arrow next-arrow"
    onClick={onClick}
    aria-label="Next Slide"
  >
    <FiChevronRight className="arrow-icon" />
  </button>
);

export default Coursework;
