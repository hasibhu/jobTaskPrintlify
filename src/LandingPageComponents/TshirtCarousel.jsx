import React, { useState, useEffect } from 'react';

const TshirtCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    {
      img: "https://printify.com/pfh/assets/legacy/custom-products.png",
      title: "CREATE",
      subtitle: "custom products",
      description: "Easily add your designs to a wide range of products using our free tools",
    },
    {
      img: "https://printify.com/pfh/assets/legacy/your-products.png",
      title: "SELL",
      subtitle: "on your terms",
      description: "Easily add your designs to a wide range of products using our free tools",
    },
    {
      img: "https://printify.com/pfh/assets/legacy/fullfillment.png",
      title: "WE HANDLE",
      subtitle: "fulfillment",
      description: "We handle everything from printing to shipping so you can focus on growing your business",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden lg:hidden mt-96">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 flex flex-col items-center justify-center p-8"
          >
            <img className="w-52 mb-4" src={slide.img} alt={slide.subtitle} />
            <h3 className="text-green-600 font-bold text-xl">{slide.title}</h3>
            <h2 className="font-bold text-xl">{slide.subtitle}</h2>
            <p className="w-[340px] text-center">{slide.description}</p>
          </div>
        ))}
      </div>

      {/* Previous and Next buttons */}
      <button
        onClick={prevSlide}
        className="absolute   -translate-y-1/2 text-2xl text-gray-800 bg-white p-2 rounded-full shadow-lg"
      >
        
      </button>
      <button
        onClick={nextSlide}
        className="absolute  -translate-y-1/2 text-2xl text-gray-800 bg-white p-2 rounded-full shadow-lg"
      >
        
      </button>
    </div>
  );
};

export default TshirtCarousel;
