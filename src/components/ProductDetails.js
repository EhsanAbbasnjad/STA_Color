import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import Rating from '@mui/material/Rating';
import './ProductDetails.css';
import 'react-image-gallery/styles/css/image-gallery.css';

function ProductDetails() {
  const location = useLocation();
  const { title, prices, images, description, rating } = location.state || {};

  const imageItems = images?.map((img) => ({
    original: img,
    thumbnail: img
  })) || [];

  const [selectedOption, setSelectedOption] = useState(prices?.[0] || null);

  return (
    <div className="product-details-container">
      <div className="gallery-wrapper">
        <ImageGallery items={imageItems} showPlayButton={false} />
      </div>

      <div className="product-info">
        <h2>{title || 'عنوان محصول'}</h2>

        <div className="description-box">
          {description || 'توضیحاتی برای این محصول وجود ندارد.'}
        </div>

        {/* انتخاب حجم/سایز */}
        {prices && prices.length > 0 && (
          <div className="option-selector">
            <label>انتخاب حجم </label>
            <select
              value={selectedOption?.option}
              onChange={(e) => {
                const opt = prices.find(p => p.option === e.target.value);
                setSelectedOption(opt);
              }}
            >
              {prices.map((p, index) => (
                <option key={index} value={p.option}>
                  {p.option}
                </option>
              ))}
            </select>
          </div>
        )}

        {/* نمایش قیمت */}
        <p className="price">
          {selectedOption ? `${selectedOption.price} تومان` : 'قیمت موجود نیست'}
        </p>

        {/* امتیاز */}
        <div className="rating-wrapper">
          {typeof rating === 'number' && rating > 0 ? (
            <Rating name="read-only" value={rating} precision={0.5} readOnly />
          ) : (
            <span>بدون امتیاز</span>
          )}
        </div>

        <button>افزودن به سبد خرید</button>
      </div>
    </div>
  );
}

export default ProductDetails;
