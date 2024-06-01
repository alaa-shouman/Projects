import React, { useState, useRef, useEffect } from "react";

function Subdetails() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const header = [
    "Front-End Development",
    "Full-Stack Experience",
    "Python Enthusiast",
    "Problem Solving",
    "Passion for Learning",
    "Diverse Projects",
    "Beyond Coding",
  ];
  const paragraphs = [
    "With a strong grasp of ReactJS and React Native, I specialize in building dynamic and responsive user interfaces. I enjoy crafting seamless experiences that combine aesthetics with functionality.",
    "My exposure to Laravel 10 and my proficiency in back-end technologies allow me to create end-to-end applications that deliver exceptional performance and user satisfaction.",
    "My advanced knowledge in Python enables me to tackle complex problem-solving scenarios and develop efficient algorithms that address real-world challenges.",
    "Thanks to my strong analytical and problem-solving skills, I thrive in deciphering intricate puzzles and translating them into effective solutions",
    "I believe that the world of technology is ever-evolving, and I am committed to continuous learning. Staying up-to-date with the latest trends and technologies is not just a hobby for me; it's a fundamental aspect of my professional journey.",
    "During my academic journey, I have had the privilege of working on diverse projects, from creating interactive web applications to designing user-friendly mobile apps. I have also collaborated with peers on hackathons and coding challenges, where I have learned the power of teamwork and innovative thinking.",
    "When I'm not coding, you can find me exploring the outdoors, reading a good book, or enjoying a cup of tea with friends. I'm a firm believer in work-life balance and believe that diverse experiences contribute to a well-rounded perspective. Thank you for visiting my portfolio! Feel free to reach out if you're interested in collaboration, have any questions, or just want to chat about tech and innovation.",
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % paragraphs.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? paragraphs.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="about-section bg-gray-100 py-4 px-8">
      <div>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            {header[currentSlide]}
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {paragraphs[currentSlide]}
          </p>
          <div className="flex justify-center">
            <button
              onClick={prevSlide}
              className="btn mr-4 px-6 py-3 bg-blue-500 text-white font-semibold rounded-full inline-block transition duration-300 hover:bg-blue-700"
            >
              Previous
            </button>
            <button
              onClick={nextSlide}
              className="btn px-6 py-3 bg-blue-500 text-white font-semibold rounded-full inline-block transition duration-300 hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subdetails;
