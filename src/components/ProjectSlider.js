import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProjectSlider.css';

const ProjectSlider = () => {
  const projects = [
    {
      image: "/IMG_5834.JPG",
      title: "پروژه کردان باغ ویلا",
      description: "پروژه باغ ویلا کردان تمام عایق کاری و پوشش دیوار ها و استخر با محصوات اس تی ای بوده"
    },
    {
      image: "/IMG_6036.JPG",
      title: "عایق کاری ویلا طرح سویسی",
      description: "پروژه باغ ویلا خوش نام تمام عایق کاری و پوشش دیوار ها و استخر با محصوات اس تی ای بوده"
    },
    {
      image: "/IMG_6038.JPG",
      title: "باغ ویلا شهرک سهیلیه عایق کاری استخر بدون کاشی کاری و عایق کاری دیوار",
      description: "پروژه باغ ویلا شهرک سهیلیه تمام عایق کاری و پوشش دیوار ها و استخر با محصوات اس تی ای بوده"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 800,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="project-slider-container">
      <h2 className="project-title">پروژه‌های در حال انجام</h2>
      <Slider {...settings}>
        {projects.map((proj, index) => (
          <div className="slide-box" key={index}>
            <img src={proj.image} alt={proj.title} className="slide-img" />
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectSlider;
