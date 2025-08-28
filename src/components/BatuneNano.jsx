// MahsolShowcase.jsx
import React from "react";
import ProductCard from "./ProductCard";

const products = [

  {
    id: 101,
    title: "رنگ نانو نما الاستومری",
      prices: [
    { option: "گالن", price: "8,000,000" },
    { option: "دبه", price: "19,500,000" },
    { option: "حلب", price: "36,500,000" },
  ],
    image: "/img/IMG_6242.JPG",
      description: "عایق‌های الاستومری رطوبتی، برودتی و حرارتی، جایگزین ۱۰۰٪ قیر و ایزوگام. دارای رنگ‌بندی دلخواه مشتری و مناسب برای انواع نمای داخلی و خارجی. قابل استفاده بر روی سطوح آهنی، سیمانی، سنگی، چوبی و ... . ایده‌آل برای آب‌بندی مخازن، لوله‌ها، سقف‌های شیروانی، پشت‌بام‌ها، دیوارهای باران‌گیر، نماها، استخر و سایر سطوح حساس به رطوبت. دارای خاصیت ضدآب و آب‌گریزی، مناسب جهت پوشش‌دهی سطوح آجرنما، چوبی، سیمانی و سنگی برای جلوگیری و رفع نم. آنتی‌باکتریال، ضد اشعه UV و سازگار با محیط زیست. همچنین قابلیت ترکیب با انواع پودرهای نانو و سیمانی برای تقویت آب‌بندی را دارا می‌باشد."
,
    rating: 4,
    images: [
      "/img/IMG_6242.JPG",

     
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
