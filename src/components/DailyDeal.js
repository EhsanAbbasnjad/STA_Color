import React, { useState, useEffect } from "react";
import "./DailyDeal.css"; // فرض بر اینکه این فایل CSS استایل‌ها را دارد

const DailyDeal = ({ products }) => {
  const [dailyProduct, setDailyProduct] = useState(null);

  useEffect(() => {
    if (!products || products.length === 0) return;
    const day = new Date().getDate();
    const index = day % products.length;
    setDailyProduct(products[index]);
  }, [products]);

  if (!dailyProduct) {
    return <p className="daily-loading-text">در حال بارگذاری پیشنهاد شگفت‌انگیز...</p>;
  }

  return (
    <div className="daily-card-container">
      <h2 className="daily-card-title">پیشنهاد شگفت‌انگیز روز</h2>

      <h3 className="daily-card-subtitle">{dailyProduct.title}</h3>

      <div className="dailydeal-images">
        {dailyProduct.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${dailyProduct.title} تصویر ${idx + 1}`}
          />
        ))}
      </div>

      <p className="daily-card-description">{dailyProduct.description}</p>
    </div>
  );
};

export default DailyDeal;
