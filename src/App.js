import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import ProductDetails from "./components/ProductDetails";
import AdvantagesSection from "./components/AdvantagesSection";
import ProjectSlider from "./components/ProjectSlider";
import AboutSection from "./components/AboutSection";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import CVstate1 from "./components/CVM";
import BatuneNano from "./components/BatuneNano";
import MadarRang from "./components/MadarRang";
import RangDecorative from "./components/RangDecorative";
import RezinAbBandi from "./components/RezinAbBandi";
import DailyDeal from "./components/DailyDeal";  // ایمپورت کامپوننت از فولدر کامپوننت‌ها

function App() {
  const sampleProducts = [
    {
      id: 1,
     title: "پوش رنگ اکرلیک  بنفش",
                    prices: [
    { option: "گالن", price: 6600000 },
    { option: "دبه", price: 16200000 },
  ] ,
      image: "/img/IMG_5826.JPG",
      description:
        "رنگ‌های آکریلیک و پرایمر - از بهترین رزین‌های آکریلیک پایه آب تهیه شده، دارای چسبندگی و قدرت پوشش خوب می‌باشد. حاوی ترکیبات آلی فرار کم، با بوی ناچیز و دوست‌دار محیط زیست است. مناسب برای انواع سطوح گچی، آجری و سیمانی. قابلیت پاک کردن کثیفی از سطح رنگ را دارا می‌باشد.",
      rating: 4,
      images: ["/img/07.jpg", "/img/IMG_5826.JPG"],
    },
    {
      id: 2,
      title: "پوش رنگ اکرلیک آبی مات",
                    prices: [
    { option: "گالن", price: 9000000 },
    { option: "دبه", price: 4300000 },
  ] ,
      image: "/img/IMG_5821.JPG",
      description:
        "رنگ‌های آکریلیک و پرایمر - از بهترین رزین‌های آکریلیک پایه آب تهیه شده، دارای چسبندگی و قدرت پوشش خوب می‌باشد. حاوی ترکیبات آلی فرار کم، با بوی ناچیز و دوست‌دار محیط زیست است. مناسب برای انواع سطوح گچی، آجری و سیمانی. قابلیت پاک کردن کثیفی از سطح رنگ را دارا می‌باشد.",
      rating: 5,
      images: ["/img/IMG_5821.JPG", "/img/08.jpg", "/img/010.jpg"],
    },
    {
      id: 3,
      title: "رزین آببندی و آبگریز نانو تی ۱۰۰",
          prices: [
    { option: "۱ لیتر", price: 2800000 },
    { option: "۴ لیتر", price: 7500000 },
    { option: "۱۰ لیتر", price: 17500000 },
    { option: "۲۰ لیتر", price: 31500000 }
  ],
      image: "/img/STA_05 (2).jpg",
      description: "رزین آببندی و ابگریز نانو تی ۱۰۰ مناسب برای انوتع سازه ها و درب های چوبی جهت آببندی و آبگریزی سطوح قابل استفاده برای سطوح آجر نما چوبی سیمتنی سلگ جهت جلوگیری از نم و رفع نم تمامی سطوح آنتی باکتریال سازگار با محیط زیست. مایع شیری رنگ میباشد و بعد خشک شدن براق میشود",
      rating: 4,
      images: ["/img/STA_05 (2).jpg", "/img/RezzinAbbandi/05.jpg", "/img/RezzinAbbandi/06.jpg"],
    },
    {
      id: 404,
      title: "اکرلیک پرایمن درجه یک ممتاز",
                  prices: [
    { option: "دبه", price: 7800000 },
  ] ,
      image: "/img/IMG_5824.JPG",
      description:
        "رنگ دکوراتیو و متالیک دارای طیف رنگی متنوع، پوشش‌دهی بالا و مقاومت بالا در برابر سایش و شستشو می‌باشد. آنتی‌باکتریال و ضد اشعه UV است. قابلیت ضدآب و آب‌گریزی دارد. مناسب برای نماهای داخلی و خارجی و تمامی سطوح سیمانی، گچی، چوبی و پلی‌استر.",
      rating: 3,
      images: ["/img/IMG_5824.JPG", "/img/03.jpg"],
    },
    {
      id: 5,
       title: "اسپری رزین آببندی ",
              prices: [
    { option: "کارتن ۲۴ عددی سفید", price: 21000000 },
    { option: "کارتن ۲۴ عددی کریستالی", price: 22000000 },
    { option: "کارتن ۲۴ عددی رنگی", price: 22000000 },
  ] ,
      image: "/img/RezzinAbbandi/STA_020.jpg",
      description:
        "اسپری رزین آببندی و ابگریز نانو تی ۱۰۰     مناسب برای انوتع سازه ها و درب های چوبی جهت آببندی و آبگریزی سطوح قابل استفاده برای سطوح آجر نما چوبی سیمتنی سلگ جهت جلوگیری از نم و رفع نم تمامی سطوح     آنتی باکتریال  سازگار با محیط زیست.    مایع شیری رنگ میباشد و بعد خشک شدن براق میشود",
      rating: 3,
      images: ["/img/RezzinAbbandi/STA_020.jpg", "/img/RezzinAbbandi/012 (1).jpg", "/img/RezzinAbbandi/012.jpg"],
    },
    {
      id: 6,
       title: "مادر رنگ دو کاره ",
           prices: [
          { option: "ربعی کارتن ۲۴ عددی", price: 12000000 },
          { option: "کیلو کارتن ۱۲ عددی", price: 12000000 },
        ],
      image: "/img/IMG_5828.JPG",
      description:
        "مادر رنگ دوکاره مخصوص رنگ‌های اکریلیک و پلاستیک، دارای طیف رنگی متنوع با پوشش‌دهی بالا و مقاومت بالا می‌باشد. آنتی‌باکتریال و سازگار با محیط زیست است. قابلیت ترکیب شدن با رنگ‌های پلاستیک و اکریلیک را دارد.",
      rating: 5,
      images: ["/img/IMG_5828.JPG", "/img/013.jpg", "/img/014.jpg"],
    },
  ];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <div className="product-list">
                {sampleProducts.map((item) => (
       <ProductCard
        key={item.id}
        id={item.id}
        title={item.title}
        prices={item.prices || [{ option: "یک گزینه", price: item.price }]} // ✅ آرایه‌ی prices
        image={item.image}
        description={item.description}
        images={item.images}
        rating={item.rating}
        />

                ))}
              </div>

              <AboutSection />
              <ProjectSlider />

              {/* اینجا کامپوننت DailyDeal از فولدر components استفاده میشه */}
              <DailyDeal products={sampleProducts} />

              <AdvantagesSection />
            </>
          }
        />

        <Route path="/products" element={<h2>صفحه محصولات</h2>} />
        <Route path="/login" element={<h2>صفحه ورود</h2>} />
        <Route path="/signup" element={<h2>صفحه ثبت‌نام</h2>} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cvstate1" element={<CVstate1 />} />

        <Route path="/batune-nano" element={<BatuneNano />} />
        <Route path="/madar-rang" element={<MadarRang />} />
        <Route path="/rang-decorative" element={<RangDecorative />} />
        <Route path="/rezin-abbandi" element={<RezinAbBandi />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
