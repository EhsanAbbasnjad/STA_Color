// MahsolShowcase.jsx
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 501,
    title: "دکوراتیو سورمه ای ",

              prices: [
    { option: "ربعی کارتن ۲۴ عددی", price: 30240000 },
    { option: "کیلو کارتن ۱۲ عددی", price: 33600000 },
  ],
    image: "/img/IMG_5827.JPG",
    description: "مادر رنگ دوکاره مخصوص رنگ‌های اکریلیک و پلاستیک، دارای طیف رنگی متنوع با پوشش‌دهی بالا و مقاومت بالا می‌باشد. آنتی‌باکتریال و سازگار با محیط زیست است. قابلیت ترکیب شدن با رنگ‌های پلاستیک و اکریلیک را دارد."
,
    rating: 4,
    images: [
      "/img/IMG_5827.JPG",
      "/img/018.jpg",
      
    ],
  },
  {
    id: 502,
    title: "دکوراتیو صدف طلایی",
          prices: [
    { option: "ربعی کارتن ۲۴ عددی", price: 30240000 },
    { option: "کیلو کارتن ۱۲ عددی", price: 33600000 },
  ],
    image: "/img/IMG_5828.JPG",
    description: "مادر رنگ دوکاره مخصوص رنگ‌های اکریلیک و پلاستیک، دارای طیف رنگی متنوع با پوشش‌دهی بالا و مقاومت بالا می‌باشد. آنتی‌باکتریال و سازگار با محیط زیست است. قابلیت ترکیب شدن با رنگ‌های پلاستیک و اکریلیک را دارد."
,
    rating: 5,
    images: [
      "/img/IMG_5828.JPG",
      "/img/013.jpg",
      "/img/014.jpg"
      
    ],
  },
  {
    id: 503,
    title: "مادر رنگ دو کاره ",
      prices: [
    { option: "ربعی کارتن ۲۴ عددی", price: 12000000 },
    { option: "کیلو کارتن ۱۲ عددی", price: 12000000 },
  ],
    image: "/img//IMG_6098.JPG",
    description: "محصولی مناسب برای محافظت از سطوح ساختمانی.",
    rating: 3,
    images: [
    "/img//IMG_6098.JPG"
    ],
  },
];

function MahsolShowcase() {
  return (
    <div className="product-list">
      {products.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          title={item.title}
          prices={item.prices}
          image={item.image}
          description={item.description}
          images={item.images}
          rating={item.rating}
        />
      ))}
    </div>
  );
}

export default MahsolShowcase;
