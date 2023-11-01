import React from "react";
const AboutUs = () => {
  return (
    <div className="flex flex-col md:flex-row p-8">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
        <p className="mb-6 text-lg">
          we are passionate about serving you delicious
          and wholesome meals that satisfy your cravings. Our culinary experts
            work tirelessly to craft a menu that features a wide variety of
          flavorful dishes made with the freshest ingredients.
        </p>
        <p className="mb-6 text-lg">
          Our commitment to quality, taste, and your dining experience drives
          us to continuously innovate and bring you the best dining options. We
          believe that every meal should be a delightful experience, and that's
          exactly what we aim to deliver to you.
        </p>
        <p className="mb-6 text-lg">
              Whether it's a quick snack, a hearty meal, or a special occasion, we've
              got you covered. Join us in exploring the world of flavors and
              convenience, all in one place.
            </p>
             </div>
      <div className="md:w-1/2 md:ml-8">
        <img
          src="data:image/jpeg;base64,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"
          alt="Restaurant"
          className="rounded-lg shadow-md w-9/12"
        />
      </div>
    </div>
  );
};

export default AboutUs;