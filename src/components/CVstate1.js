import React from "react";
import "./CVstate1.css";


const portfolioItems = [
  {
    id: 1,
    title: "پروژه کردان باغ ویلا",
    description: "پروژه باغ ویلا کردان تمام عایق کاری و پوشش دیوار ها و استخر با محصوات اس تی ای بوده",
    image:
      "/IMG_5834.JPG"
  },
  {
    id: 2,
       image: "/IMG_6036.JPG",
      title: "عایق کاری ویلا طرح سویسی",
      description: "پروژه باغ ویلا خوش نام تمام عایق کاری و پوشش دیوار ها و استخر با محصوات اس تی ای بوده"
  },
  {
    id: 3,
      image: "/IMG_6038.JPG",
      title: "باغ ویلا شهرک سهیلیه عایق کاری استخر بدون کاشی کاری و عایق کاری دیوار",
      description: "پروژه باغ ویلا شهرک سهیلیه تمام عایق کاری و پوشش دیوار ها و استخر با محصوات اس تی ای بوده"
  },
];

export default function CVstate1() {
  return (
    <>
  
      <div className="portfolio-section">
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div className="portfolio-card" key={item.id}>
              <img
                src={item.image}
                alt={item.title}
                className="portfolio-image"
              />
              <div className="portfolio-content">
                <h3 className="portfolio-title">{item.title}</h3>
                <p className="portfolio-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
