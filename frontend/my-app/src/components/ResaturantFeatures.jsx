import React from 'react';
import '../component_styles/RestaurantFeatures.css'; 

const features = [
  {
    icon: "fa-utensils", 
    title: "FINE DINING",
    description: "Experience exquisite meals prepared by top chefs with premium ingredients.",
  },
  {
    icon: "fa-wine-glass", 
    title: "SIGNATURE DRINKS",
    description: "Enjoy our exclusive cocktails and mocktails crafted to perfection.",
  },
  {
    icon: "fa-concierge-bell", 
    title: "EXCEPTIONAL SERVICE",
    description: "Our staff ensures an outstanding dining experience for every guest.",
  },
  {
    icon: "fa-birthday-cake", 
    title: "EVENT CATERING",
    description: "Host your special occasions with customized catering solutions.",
  },
  {
    icon: "fa-seedling", 
    title: "ORGANIC INGREDIENTS",
    description: "We source fresh, organic produce for a healthy and delightful meal.",
  },
  {
    icon: "fa-door-open", 
    title: "PRIVATE DINING",
    description: "Exclusive spaces for intimate gatherings and private dining experiences.",
  },
];

const RestaurantFeatures = () => {
  return (
    <div className="restaurant-features container-fluid text-center py-5">
      <h2 className="mb-4 text-uppercase">Our Great Features</h2>
      <div className="row">
        {features.map((feature, index) => (
          <div key={index} className="col-md-4 col-sm-6 mb-4">
            <div className="feature-item">
              <i className={`fa ${feature.icon} feature-icon mb-3`}></i>
              <h5 className="feature-title text-uppercase">{feature.title}</h5>
              <p className="feature-description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantFeatures;
