import React, { useEffect, useRef, useState } from "react";
import "./DiamondCard.css";

export default function DiamondCard({ title, description, images = [] }) {
  const [current, setCurrent] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const touchStartX = useRef(null);

  // ⚠️ useEffect همیشه در بالای کامپوننت و خارج از شرط
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (fullscreen) document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (!fullscreen) return;
      if (e.key === "Escape") setFullscreen(false);
      if (e.key === "ArrowRight") setCurrent((p) => (p + 1) % images.length);
      if (e.key === "ArrowLeft") setCurrent((p) => (p - 1 + images.length) % images.length);
    };

    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [fullscreen, images.length]);

  const nextSlide = () => setCurrent((p) => (p + 1) % images.length);
  const prevSlide = () => setCurrent((p) => (p - 1 + images.length) % images.length);

  const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const threshold = 50;
    if (dx > threshold) prevSlide();
    if (dx < -threshold) nextSlide();
    touchStartX.current = null;
  };

  return (
    <div className="diamond-card">
      {images.length === 0 ? (
        <p>تصویری موجود نیست</p>
      ) : (
        <>
          {/* اسلایدر */}
          <div className="slider" onDoubleClick={() => setFullscreen(true)}>
            <div
              className="slider-track"
              style={{
                transform: `translateX(-${current * 100}%)`,
                "--slide-count": images.length
              }}
            >
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`${title || "image"} - ${i + 1}`}
                  onClick={() => setFullscreen(true)}
                  draggable={false}
                />
              ))}
            </div>

            <button className="prev" onClick={prevSlide}>‹</button>
            <button className="next" onClick={nextSlide}>›</button>
          </div>

          {/* محتوا */}
          <div className="diamond-content">
            <h2>{title}</h2>
            <div className="desc-box">
              <p>{description}</p>
            </div>
          </div>

          {/* گوشه‌های پایین */}
          <div className="corner-glow bl"></div>
          <div className="corner-glow br"></div>

          {/* فول‌اسکرین */}
          {fullscreen && (
            <div
              className="lightbox"
              onClick={(e) => {
                if (e.target.classList.contains("lightbox")) setFullscreen(false);
              }}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <button className="lightbox-close" onClick={() => setFullscreen(false)}>✕</button>
              <button className="lightbox-prev" onClick={prevSlide}>‹</button>
              <img
                className="lightbox-img"
                src={images[current]}
                alt={`${title || "image"} - fullscreen`}
                draggable={false}
              />
              <button className="lightbox-next" onClick={nextSlide}>›</button>
              <div className="lightbox-caption">
                {title ? `${title} — ` : ""}{current + 1} / {images.length}
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
