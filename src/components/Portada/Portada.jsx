import WinPortada from '../../assets/img/WinPortada.webp';
import WinPortada1 from '../../assets/img/WinPortada1.webp';
import WinPortada2 from '../../assets/img/WinPortada2.webp';
import WinPortada3 from '../../assets/img/WinPortada3.webp';
import WinPortada4 from '../../assets/img/WinPortada4.webp';
import WinPortadaCel from '../../assets/img/WinPortadaCel.webp';
import WinPortadaCel1 from '../../assets/img/WinPortadaCel1.webp';
import WinPortadaCel2 from '../../assets/img/WinPortadaCel2.webp';
import WinPortadaCel3 from '../../assets/img/WinPortadaCel3.webp';
import WinPortadaCel4 from '../../assets/img/WinPortadaCel4.webp';
import Formulario from '../Formulario/Formulario';
import Carousel from '../Reutilizables/Carrusel/Carrusel';

const OPTIONS = {
  loop: true,
  slidesToScroll: 'auto',
  containScroll: 'trimSnaps'
};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
const STYLES_MOBILE = {
  height: '640px'
};
const STYLES_DESKTOP = {
  aspectRatio: 3.095,
  width: "100%",
  height: "auto",
  objectFit: "cover"
};

const imagesDesktop = [
  WinPortada,
  WinPortada1,
  WinPortada2,
  WinPortada3,
  WinPortada4,
];

const imagesMobile = [
  WinPortadaCel,
  WinPortadaCel1,
  WinPortadaCel2,
  WinPortadaCel3,
  WinPortadaCel4,
];

const Portada = () => {
  return (
    <div>
      <Carousel
        classNameSlide="embla__slide"
        slides={ SLIDES }
        images={ imagesMobile }
        options={ OPTIONS }
        haveButtons={ true }
        haveDots={ true }
        styles={ STYLES_MOBILE }
        className="mobile"
        interval={ 5000 }
      />

      <Carousel
        classNameSlide="embla__slide"
        slides={ SLIDES }
        images={ imagesDesktop }
        options={ OPTIONS }
        haveButtons={ true }
        haveDots={ true }
        styles={ STYLES_DESKTOP }
        className="desktop"
        interval={ 5000 }
      />
      <Formulario/>
    </div>
  )
}

export default Portada
