import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../styles/Home.css";
import "../styles/SubTitle.css";
import "../styles/Link.css";

function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      <main>
        {/* Title Section */}
        <section className="section-title ">
          <img
            //   sytle 삭제 할 것
            style={{ width: "100%", height: "auto" }}
            src="/main-v@2x.png"
            alt="toranomon"
            width={1000}
            height={500}
          />
          <div className="section-title__overlay">
            <img
              src="/Hello,TORANOMON@2x.png"
              alt="toranomon"
              width={642}
              height={61}
              className="section-title-overlay__img"
            />

            <h2>東京オフィスは、虎ノ門にて新しいスタートを切ります</h2>
          </div>
        </section>

        {/* Sub Title Section */}
        <section className="section-subtitle">
          <article className="section-subtitle__typo">
            <img
              className="responsive-image"
              src="/We just moved toTORANOMON4th March 2014@2x.png"
              alt="toranomon"
              width={500}
              height={500}
            />
          </article>

          <article className="section-subtitle__word">
            <p className="section-subtitle-word__p ">
              このたび弊社は、東京オフィスを東京都港区虎ノ門に移転し
              ２０１４年３月４日(火)大安より営業の運びとなりました。
              新オフィスは、打ち合わせスペースも多くありますので
              お近くにお越しの際はどうぞお気軽にお立ち寄りください。
              今後とも弊社をどうぞよろしくお願い申し上げます。
            </p>
          </article>
        </section>
        {/* Article Section */}

        <section className="section-link">
          <p className="section-link__text">
            新しくなった東京オフィスへ <br className="sm-hidden" />
            ぜひお越しください。
          </p>
          <a href="https://ankh-systems.co.jp/">
            <div className="section-link__button mt-8 flex h-[6.25rem] items-center gap-5 bg-white bg-no-repeat pr-4 shadow-[0px_1px_1px_#D8D8D8BF]">
              <div className="flex w-full items-center justify-center gap-5">
                <img
                  src="/green_logo@2x.png"
                  alt="ank"
                  width={328}
                  height={36}
                  className="h-[80%] w-[80%] max-w-[328px]"
                />
                <p className="hidden pt-3 text-center leading-[1.0625rem] md:block md:text-[1rem] lg:text-[1.0625rem]">
                  株式会社アンクシステムズ
                  <br className="hidden md-block lg-hidden" />
                  コーポレートサイトへ
                </p>
              </div>
              <img
                src="/arrow@2x.png"
                alt="arrow"
                width={6}
                height={11}
                className="ml-auto"
              />
            </div>
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
