import React, { useState } from "react";
import "./FloatingAd.css";

export default function FloatingAd({ title = "تبلیغ شما", description = "این قسمت برای متن تبلیغاتی است", image }) {
  const [visible, setVisible] = useState(true);

  if (!visible) return null; // اگر بسته شد، نمایش نده

  return (
    <div className="floating-ad">
      <button className="ad-close" onClick={() => setVisible(false)}>✕</button>
       
      <div className="ad-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
