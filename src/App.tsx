import imgFiture from './assets/card.jpg';
import imgSection1 from './assets/cardsection-1.png';
import chama from './assets/chama.svg';
import fitureGrupImg from './assets/fitureGrup.svg';
import img1 from './assets/img-1.png';
import imgs3 from './assets/img-s-3.svg';
import lineIcon from './assets/lineIcon.svg';
import card_visa from './assets/visaCard.png';

import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className="w-full min-h-min">
        <section className="max-w-7xl gap-10 min-h-min flex items-center m-auto mt-8 mb-24">
          <div className="flex flex-col max-w-md h-full items-start">
            <h1 className="text-[##22223] font-bold text-[80px] mb-12">
              Banking{' '}
              <span className="border-[3px] border-orange-400 rounded-t-[90%] rounded-b-[90%]">
                more
              </span>{' '}
              smart
            </h1>
            <p className="text-[#5F5F64] font-normal text-lg mb-10">
              Meet the only spend management platform and corporate card.
            </p>

            <button className="flex items-center  ">
              <div className="bg-[#222223] px-[15px] py-5 mr-5">
                <img className="object-cover" src={lineIcon} alt="lineIcon" />
              </div>
              <p className="text-[#222223] font-medium text-[19px]">
                Get your card
              </p>
            </button>
          </div>
          <img
            className="flex-1 object-cover"
            src={imgSection1}
            alt="imgSection1"
          />
        </section>

        <section className="max-w-7xl min-h-min mx-auto flex justify-between items-start mb-[98px]">
          <div className="w-60">
            <h2 className="text-[#222223] font-Bai_Jamjuree mb-[18px] font-bold text-4xl">
              <span className="flex items-center gap-1">
                Hot
                <img className="w-8 h-8 " src={chama} alt="imgSection1" />
              </span>
              deals for you
            </h2>
            <p className="text-[#5F5F64] font-normal text-base">
              Online shopping for retail sales direct to consumers
            </p>
          </div>

          <div className="w-[188px] mb-[18px] min-h-min">
            <img className="mb-8" src={img1} alt="img1" />
            <h2
              className="font-bold text-xl
            "
            >
              1.5% cashback
            </h2>
            <p className="text-[#5F5F64] font-normal text-base">
              Online shopping for retail sales direct to consumers
            </p>
          </div>

          <div className="w-[188px] mb-[18px] min-h-min">
            <img className="mb-8" src={img1} alt="img1" />
            <h2
              className="font-bold text-xl
            "
            >
              1.5% cashback
            </h2>
            <p className="text-[#5F5F64] font-normal text-base">
              Online shopping for retail sales direct to consumers
            </p>
          </div>

          <div className="w-[188px] mb-[18px] min-h-min">
            <img className="mb-8" src={img1} alt="img1" />
            <h2
              className="font-bold text-xl
            "
            >
              1.5% cashback
            </h2>
            <p className="text-[#5F5F64] font-normal text-base">
              Online shopping for retail sales direct to consumers
            </p>
          </div>
        </section>

        <section className="mb-[131px] relative bg-[#b9e5ff] mx-auto max-w-[1440px] min-h-[417px] flex items-center justify-center">
          <img
            className="-translate-x-1/2 absolute  bottom-[91%] left-1/2"
            src={imgs3}
            alt="img3"
          />
          <div className="max-w-[261px] mr-[301px]">
            <h2 className="font-Bai_Jamjuree text-[#202020] text-3xl font-medium mb-[16px]">
              We Building Social uniqueness
            </h2>

            <p className="text-[#5F5F64]  font-normal text-base">
              The marketing strategy lays out target markets and the value.
            </p>
          </div>
          <div className="max-w-[261px]">
            <h2 className="font-Bai_Jamjuree text-[#202020] text-3xl font-medium mb-[10px]">
              Social Media beyond probability
            </h2>

            <p className="text-[#5F5F64] font-normal text-base">
              Essentially a formula for how a business is going to compete,
            </p>
          </div>
        </section>

        <section className="max-w-[1090px] flex flex-col mx-auto">
          <div className="max-w-[643px] min-h-min text-center mx-auto mb-[91px]">
            <h2 className="font-Bai_Jamjuree font-bold text-[80px] mb-10 text-[#0D1111]">
              1000+ Customer
            </h2>
            <p className="font-normal text-base text-[#767E7E]">
              Analyze any Business or Creator account—including your
              competitors—to find the imagery, visuals, and captions that drive
              audience engagement. Get social calendars planned faster and spend
              less time testing content strategies..
            </p>
          </div>

          <div className="flex border-t border-b mb-[122px] border-[#718176] w-full min-h-[209px]">
            <div className="flex flex-col items-center justify-center w-[20%] border-r border-[#909c9283]">
              <p className="font-medium text-base mb-[11px] text-[#718176]">
                PRODUCT
              </p>
              <span className="font-medium text-2xl">10,0000+ </span>
            </div>
            <div className="flex flex-col items-center justify-center w-[40%] border-r border-[#909c9283]">
              <p className="font-medium text-base mb-[11px] text-[#718176]">
                LIKES
              </p>
              <span className="font-medium text-2xl">45600</span>
            </div>
            <div className="flex flex-col items-center justify-center w-[20%] border-r border-[#909c9283]">
              <p className="font-medium text-base mb-[11px] text-[#718176]">
                SALE
              </p>
              <span className="font-medium text-2xl">576864</span>
            </div>
            <div className="flex flex-col items-center justify-center w-[20%]">
              <p className="font-medium text-base mb-[11px] text-[#718176]">
                CUSTOMERS
              </p>
              <span className="font-medium text-2xl">947444</span>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1246px] mb-[102px] h-[507px] flex items-center justify-center">
          <div className="w-[568px] h-full bg-[#CFEDFF] relative mr-[80px]">
            <img
              className="min-w-[638px] object-contain absolute right-0 pr-[36px]  rounded-2xl top-1/2 -translate-y-1/2 min-h-[412px]"
              src={imgFiture}
              alt="fitImg"
            />
          </div>

          <div className="h-[470px]  max-w-[458px] items-start  flex flex-col justify-center">
            <h2 className="font-Bai_Jamjuree font-semibold text-5xl mb-[30px]">
              Handoff your work smarter now
            </h2>
            <p className="text-[#727272] font-normal text-base mb-[55px]">
              Create documentation for the collaborators (i.e. designers or
              devs) directly in your design file.
            </p>

            <div className="flex mb-[30px]">
              <img
                className="mr-[30px] w-[35px] h-[30px] object-contain"
                src={fitureGrupImg}
                alt="img_grup1"
              />
              <div className="max-w-[291px]">
                <h1 className="font-semibold text-xl mb-[9px]">Strategic</h1>
                <p className="text-[#727272] font-normal text-sm">
                  Suggests that the component spacing between cards and
                  elements.
                </p>
              </div>
            </div>
            <div className="flex">
              <img
                className="w-[35px] h-[30px] object-contain"
                src={img1}
                alt="img_grup1"
              />
              <div className="max-w-[291px] ml-[30px]">
                <h1 className="font-semibold text-xl mb-[9px]">Strategic</h1>
                <p className="text-[#727272] font-normal text-sm">
                  work schedule is the time an employee is expected to be on the
                  job
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="flex relative items-center mb-[120px] mx-auto max-w-[1440px] h-[522px] bg-[#41B3F4]">
          <div className="flex absolute top-[114px] left-[166px]">
            <p className="mr-[75px] w-[120px] font-bold text-lg">
              Subscribe to get updated news
            </p>
            <div className="w-2 h-[133px] bg-[#718176] mr-[81px]"></div>
            <div className="w-[430px]">
              <h2 className="w-full font-bold text-6xl mb-[42px]">
                Subscribe our newsletter
              </h2>
              <button className="hover:bg-[#b33c01] transition-colors w-40 h-14 font-medium text-white bg-[#E15C19]">
                Subscribe
              </button>
            </div>
          </div>
          <img
            className="ml-auto w-[691.8px] h-[734.21px]"
            src={card_visa}
            alt="visa"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
