// MahsolShowcase.jsx
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 401,
       title: "پوش رنگ اکرلیک  بنفش",
               prices: [
    { option: "گالن", price: 6600000 },
    { option: "دبه", price: 16200000 },
  ] ,
    image: "/img/IMG_5826.JPG",
    description: "رنگ‌های آکریلیک و پرایمر - از بهترین رزین‌های آکریلیک پایه آب تهیه شده، دارای چسبندگی و قدرت پوشش خوب می‌باشد. حاوی ترکیبات آلی فرار کم، با بوی ناچیز و دوست‌دار محیط زیست است. مناسب برای انواع سطوح گچی، آجری و سیمانی. قابلیت پاک کردن کثیفی از سطح رنگ را دارا می‌باشد."
,
    rating: 4,
    images: [
       "/img/07.jpg",
      "/img/IMG_5826.JPG",
       
     
    ],
  },

  {
    id: 402,
    title: "پوش رنگ اکرلیک آبی مات",
              prices: [
    { option: "گالن", price: 9000000 },
    { option: "دبه", price: 4300000 },
  ] ,
    image: "/img/IMG_5821.JPG",
    description: "رنگ‌های آکریلیک و پرایمر - از بهترین رزین‌های آکریلیک پایه آب تهیه شده، دارای چسبندگی و قدرت پوشش خوب می‌باشد. حاوی ترکیبات آلی فرار کم، با بوی ناچیز و دوست‌دار محیط زیست است. مناسب برای انواع سطوح گچی، آجری و سیمانی. قابلیت پاک کردن کثیفی از سطح رنگ را دارا می‌باشد."
,
    rating: 5,
    images: [
      "/img/IMG_5821.JPG",
      "/img/08.jpg",
      "/img/010.jpg",
    ],
  },
  {
    id: 403,
       title: "پوش رنگ اکرلیک زرد مات",
             prices: [
    { option: "کارتن ۲۴ عددی سفید", price: 21000000 },
    { option: "کارتن ۲۴ عددی کریستالی", price: 22000000 },
    { option: "کارتن ۲۴ عددی رنگی", price: 22000000 },
  ] ,
    image: "/img/IMG_5820.JPG",
    description: "رنگ‌های آکریلیک و پرایمر - از بهترین رزین‌های آکریلیک پایه آب تهیه شده، دارای چسبندگی و قدرت پوشش خوب می‌باشد. حاوی ترکیبات آلی فرار کم، با بوی ناچیز و دوست‌دار محیط زیست است. مناسب برای انواع سطوح گچی، آجری و سیمانی. قابلیت پاک کردن کثیفی از سطح رنگ را دارا می‌باشد."
,
    rating: 3,
    images: [
      "/img/IMG_5820.JPG",
      "/img/09.jpg",
      
    ],
  },

    {
    id: 404,
    title: "اکرلیک پرایمن درجه یک ممتاز",

             prices: [
    { option: "دبه", price: 7800000 },
  ] ,
  
    image: "/img/IMG_5824.JPG",
    description:"رنگ دکوراتیو و متالیک دارای طیف رنگی متنوع، پوشش‌دهی بالا و مقاومت بالا در برابر سایش و شستشو می‌باشد. آنتی‌باکتریال و ضد اشعه UV است. قابلیت ضدآب و آب‌گریزی دارد. مناسب برای نماهای داخلی و خارجی و تمامی سطوح سیمانی، گچی، چوبی و پلی‌استر."
,
    rating: 3,
    images: [
      "/img/IMG_5824.JPG",
      "/img/03.jpg",
      
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
