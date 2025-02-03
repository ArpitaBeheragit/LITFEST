import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const screens = [
  {
    title: "Fullpage slider 1",
    image: "/fullpage-scroll/fullpage-scroll-1.jpg",
    id: 1,
  },
  {
    title: "Fullpage slider 2",
    image: "/fullpage-scroll/fullpage-scroll-2.jpg",
    id: 2,
  },
  {
    title: "Fullpage slider 3",
    image: "/fullpage-scroll/fullpage-scroll-3.jpg",
    id: 3,
  },
  {
    title: "Fullpage slider 4",
    image: "/fullpage-scroll/fullpage-scroll-4.jpg",
    id: 4,
  },
  {
    title: "Fullpage slider 5",
    image: "/fullpage-scroll/fullpage-scroll-5.jpg",
    id: 5,
  },
];

const Home = () => {
  const wrapperRef = useRef(null);
  const paginationRef = useRef(null);
  const currentIndex = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    const sections = wrapperRef.current.querySelectorAll(".section");
    const pagination = paginationRef.current;
    const totalSections = screens.length;

    gsap.set(sections, { yPercent: 100 });
    gsap.set(sections[0], { yPercent: 0 });

    const moveToSection = (index) => {
      if (isAnimating.current || index < 0 || index >= totalSections) return;
      isAnimating.current = true;

      const timeline = gsap.timeline({
        onComplete: () => (isAnimating.current = false),
      });

      timeline
        .to(sections[currentIndex.current], { yPercent: 100, duration: 1.25 })
        .to(sections[index], { yPercent: 0, duration: 1.25 }, "<")
        .to(
          pagination,
          { width: `${((index + 1) / totalSections) * 100}%`, duration: 0.5 },
          "<"
        );

      currentIndex.current = index;
    };

    const handleScroll = (e) => {
      if (isAnimating.current) return;
      const direction = e.deltaY > 0 ? 1 : -1;
      moveToSection(currentIndex.current + direction);
    };

    const handleKeydown = (e) => {
      if (isAnimating.current) return;
      if (e.key === "ArrowDown") moveToSection(currentIndex.current + 1);
      if (e.key === "ArrowUp") moveToSection(currentIndex.current - 1);
    };

    window.addEventListener("wheel", handleScroll);
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className="fullpage-wrapper" ref={wrapperRef}>
      {screens.map((screen, index) => (
        <div
          key={screen.id}
          className={`section fixed top-0 left-0 w-full h-full bg-cover bg-center`}
          style={{
            backgroundImage: `url(${screen.image})`,
          }}
        >
          <div className="content">
            <h2>{screen.title}</h2>
          </div>
        </div>
      ))}
      <div
        ref={paginationRef}
        className="pagination absolute bottom-0 left-0 h-1 bg-white"
        style={{ width: "20%" }}
      ></div>
    </div>
  );
};

export default Home;
