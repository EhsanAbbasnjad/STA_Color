// MahsolShowcase.jsx
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 301,
    title: "رزین آببندی سفید کریستالی",
    price: "۲۵۰٬۰۰۰",
    image: "/img/STA_05 (2).jpg",
    description: "رزین آببندی و ابگریز نانو تی ۱۰۰ مناسب برای انوتع سازه ها و درب های چوبی جهت آببندی و آبگریزی سطوح قابل استفاده برای سطوح آجر نما چوبی سیمتنی سلگ جهت جلوگیری از نم و رفع نم تمامی سطوح آنتی باکتریال سازگار با محیط زیست. مایع شیری رنگ میباشد و بعد خشک شدن براق میشود",
    rating: 4,
    images: [
      "/img/STA_05 (2).jpg",
      "/img/RezzinAbbandi/05.jpg",
      "/img/RezzinAbbandi/06.jpg"
    ],
  },
  {
    id: 302,
    title: "رزین أببندی نانو کریستالی",
    price: "۳۹۰٬۰۰۰",
    image: "/img/RezzinAbbandi/رزین آب بندی و آب گریز T100 2 - Copy.jpg",
    description: "رزین آببندی و ابگریز نانو تی ۱۰۰ مناسب برای انوتع سازه ها و درب های چوبی جهت آببندی و آبگریزی سطوح قابل استفاده برای سطوح آجر نما چوبی سیمتنی سلگ جهت جلوگیری از نم و رفع نم تمامی سطوح آنتی باکتریال سازگار با محیط زیست. مایع شیری رنگ میباشد و بعد خشک شدن براق میشود",
    rating: 5,
    images: [
      "/img/RezzinAbbandi/رزین آب بندی و آب گریز T100 2 - Copy.jpg",
      "/img/RezzinAbbandi/STA_09.jpg",
      "/img/RezzinAbbandi/06.jpg"
    ],
  },
  {
    id: 303,
    title: "اسپری رزین آببندی ",
    price: "۱۵۰٬۰۰۰",
    image: "/img/RezzinAbbandi/STA_020.jpg",
    description: "اسپری رزین آببندی و ابگریز نانو تی ۱۰۰     مناسب برای انوتع سازه ها و درب های چوبی جهت آببندی و آبگریزی سطوح قابل استفاده برای سطوح آجر نما چوبی سیمتنی سلگ جهت جلوگیری از نم و رفع نم تمامی سطوح     آنتی باکتریال  سازگار با محیط زیست.    مایع شیری رنگ میباشد و بعد خشک شدن براق میشود",
    rating: 3,
    images: [
      "/img/RezzinAbbandi/STA_020.jpg",
      "/img/RezzinAbbandi/012 (1).jpg",
      "/img/RezzinAbbandi/012.jpg"
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
          price={item.price}
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
