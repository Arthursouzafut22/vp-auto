import { useEffect, useState } from "react";
import * as S from "./styles";
import CardCarrosel from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Vendas from "../Vendas/Vendas";
import Garantia from "../Garantia/Garantia";

export default function Carrosel() {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch("public/data/carrosel.json");
      const json = await response.json();
      setDados(json);
    })();
  }, []);

  return (
    <S.ContainerCarrosel>
      <S.WrapperCarrosel>
        <button className="swiper-button-prev-custom">
          <FaChevronLeft fontSize={22} />
        </button>
        <h1>La selección del subastador</h1>

        <S.BoxCarrosel>
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={3}
            spaceBetween={0}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            loop={true}
            autoplay={{
              delay: 3000, 
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1.2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
          >
            {dados.map((item) => (
              <SwiperSlide>
                <CardCarrosel key={item.id} item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </S.BoxCarrosel>
        <button className="swiper-button-next-custom">
          <FaChevronRight fontSize={22} />
        </button>
      </S.WrapperCarrosel>

      <Vendas />
      <Garantia/>
    </S.ContainerCarrosel>
  );
}
