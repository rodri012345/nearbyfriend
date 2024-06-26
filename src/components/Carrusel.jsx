import React from "react";
import Slider from "react-slick";
import { Card, Button } from "antd";
import { Link, NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carrusel.css';

function Carrusel() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    prevArrow: <div />, // Quitamos la flecha de retroceso
    nextArrow: <div />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div style={{ padding: '80px' }}>
          <Card
            className="image-style"
            hoverable
            cover={
              <img
                alt="user"
                src="https://static.vecteezy.com/system/resources/previews/001/131/187/non_2x/serious-man-portrait-real-people-high-definition-grey-background-photo.jpg"

              />
            }
          >
            <div className="perfil">
              <h2>Carlos Flores</h2>
              <h5>Tarija</h5>
              <div className="perfil-btn">
                <Button className=" estilo-btn" type="primary">Ver Más</Button>
              </div>

            </div>
          </Card>
        </div>
        <div>
          <Card
            className="image-style"
            hoverable
            cover={
              <img

                alt="user"
                src="https://pymstatic.com/20622/conversions/personas-arrogantes-wide.jpg"

              />
            }
          >
            <div className="perfil">
              <h2>Paola Valdivia</h2>
              <h5>Cochabamba</h5>
              <div className="perfil-btn">
                <Button className=" estilo-btn" type="primary"><NavLink to='/Perfil/KtYyj86EoIYfzaoszr8K'>Ver Más</NavLink></Button>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card
            className="image-style"
            hoverable
            cover={
              <img
                alt="user"
                src="https://www.alquifriend.com/uplo/uploads/3010924b6245268d511bc64784d40381-avatar.jpg"
              />
            }
          >
            <div className="perfil">
              <h3>Maria Lopez Fernandez</h3>
              <h5>La Paz</h5>
              <div className="perfil-btn">
                <Link to='/Perfil/55q7TpIt8vhTt2AMTJ7w'>
                  <Button className=" estilo-btn" type="primary">Ver Más</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card
            className="image-style"
            hoverable
            cover={
              <img
                alt="user"
                src="https://previews.123rf.com/images/dolgachov/dolgachov1604/dolgachov160401829/54866409-personas-el-cuidado-de-la-salud-de-la-vista-de-negocios-y-concepto-de-la-educaci%C3%B3n-la-cara-de.jpg"
              />
            }
          >
            <div className="perfil">
              <h2>Alison Gonzales</h2>
              <h5>Sucre</h5>
              <div className="perfil-btn">
              <Link to='/Perfil/KtYyj86EoIYfzaoszr8K'>
                  <Button className=" estilo-btn" type="primary">Ver Más</Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card
            className="image-style"
            hoverable
            cover={
              <img
                alt="user"
                src="https://www.siquia.com/assets/uploads/2022/03/pexels-nickolas-johnston-9102983-750x990.jpg"
              />
            }
          >
            <div className="perfil">
              <h2>Fernando Vidal</h2>
              <h5>Santa Cruz</h5>
              <div className="perfil-btn">
                <Button className=" estilo-btn" type="primary">Ver Más</Button>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card
            className="image-style"
            hoverable
            cover={
              <img
                alt="user"
                src="https://covalto-production-website.s3.amazonaws.com/Hero_Mobile_Cuenta_Personas_V1_1_8046e424ea.webp"
              />
            }
          >
            <div className="perfil">
              <h2>Mauricio Cabrera</h2>
              <h5>Cochabamba</h5>
              <div className="perfil-btn">
                <Button className=" estilo-btn" type="primary">Ver Más</Button>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card
            className="image-style"
            hoverable
            cover={
              <img
                alt="user"
                src="https://www.uoh.cl/wp-content/uploads/2023/10/Gissella-Ramirez-500x500.png"
              />
            }
          >
            <div className="perfil">
              <h2>Leidy Garcia</h2>
              <h5>La Paz</h5>
              <div className="perfil-btn">
                <Button className=" estilo-btn" type="primary">Ver Más</Button>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card
            className="image-style"
            hoverable
            cover={
              <img
                alt="user"
                src="https://www.uoh.cl/wp-content/uploads/2022/06/Betsabe-Rubilar-500x500.jpg"

              />
            }
          >
            <div className="perfil">
              <h2>Maite Gutierrez</h2>
              <h5>Cochabamba</h5>
              <div className="perfil-btn">
                <Button className=" estilo-btn" type="primary">Ver Más</Button>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card
            className="image-style"
            hoverable
            cover={
              <img
                alt="user"
                src="https://i.pinimg.com/736x/17/a6/73/17a6732cf7a72c548bfea920752ce98d.jpg"

              />
            }
          >
            <div className="perfil">
              <h2>Carolina Suarez </h2>
              <h5>Sucre</h5>
              <div className="perfil-btn">
                <Button className=" estilo-btn" type="primary">Ver Más</Button>
              </div>
            </div>
          </Card>
        </div>
        <div>
          <Card
            className="image-style"
            hoverable
            cover={
              <img
                alt="user"
                src=" https://previews.123rf.com/images/shotsstudio/shotsstudio1505/shotsstudio150500055/40062787-vista-frontal-del-hombre-cauc%C3%A1sico-retratos-de-personas-reales.jpg"

              />
            }
          >
            <div className="perfil">
              <h2>Edgar Rollano</h2>
              <h5>Pando</h5>
              <div className="perfil-btn">
                <Button className=" estilo-btn" type="primary">Ver Más</Button>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <Card
            className="image-style"
            hoverable
            cover={
              <img
                alt="user"
                src="https://cdn.pixabay.com/photo/2020/03/19/11/57/girl-4947240_1280.jpg"

              />
            }
          >
            <div className="perfil">
              <h2>Karen Paco</h2>
              <h5>Potosi</h5>
              <div className="perfil-btn">
                <Button className=" estilo-btn" type="primary">Ver Más</Button>
              </div>
            </div>
          </Card>
        </div>
      </Slider>
    </div>
  );
}
export default Carrusel;