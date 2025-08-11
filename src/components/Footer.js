// src/components/Footer.js
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-section">
            <h3>دسته‌بندی محصولات</h3>
            <ul>
              <li><a href="/laptops">بتونه نانو</a></li>
              <li><a href="/desktops">مادر رنگ</a></li>
              <li><a href="/accessories">رنگ دکوراتیو</a></li>
              <li><a href="/desktops">رزین آببندی</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>درباره فروشگاه</h3>
            <p>تمام محصولاتی که در فروشگاه مشاهده میکنید ساخت مجموعه اس تی اس  میباشد و اولین بار در همین مجموعه ساخته شده و اختراع شده و هدف ما از این محصولات  هزینه ای کمتر برای مصرف کنندگان بوده و نصب راه اندازی ساده و طول عمر بیشتر است تمام حقوق این محصولات مربوط به مجموعه ی اس تی اس میباشد </p>
          </div>
        </div>
        <div className="footer-bottom">
          <div> طراح وب سایت دیتیل استودیو میباشد و هرگونه کپی برداری  پیگرد قانونی دارد 
          </div>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
