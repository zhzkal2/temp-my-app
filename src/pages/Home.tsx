import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "../styles/pages/home/Home.css";
import "../styles/pages/home/SubTitle.css";
import "../styles/pages/Home/Link.css";
import "../styles/pages/home/Title.css";
import "../styles/pages/home/Article.css";

function Home() {
  return (
    <>
      {/* Header */}
      <Header />
      <main>
        {/* Title Section */}
        <section className="section-title ">
          <img
            className="section-title__img"
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
        <section className="article-section">
          <section className="article-section__group">
            {/* 1 Col */}
            <article className="article-section__item--1">
              <div className="article-section__title">
                <img
                  src="/Location@2x.png"
                  alt="location_icon"
                  width={30}
                  height={30}
                />
                <span className="article-section__title-text ">
                  新東京オフィスの地図はこちら
                </span>
              </div>
              <address className="article-section__address">
                〒105-0001 港区虎ノ門2-7-16 <br className="lg-hidden" />
                エグゼクティブタワー虎ノ門 504
              </address>
              {/* <MyMap className="mx-auto mt-1 h-[80%] w-[90%] items-center justify-center lg:mt-3 lg:h-[100%] lg:w-[100%]" /> */}
            </article>

            {/* 2 Col */}
            <article className="max-h-[19.375rem] bg-[#DC5E48] shadow-[0px_1px_1px_#D8D8D8BF] lg:h-[19.375rem]">
              <div className="pt-4 pr-4 pb-4 pl-4 lg:pt-6 lg:pr-6 lg:pb-2 lg:pl-6">
                <img
                  src="/title@2x.png"
                  alt="drunk"
                  width={307}
                  height={70}
                  className="mx-auto w-[90%] max-w-[307px]"
                />
                <div className="mt-6 flex flex-col gap-1">
                  <span className="text-[0.75rem] leading-[1.0625rem] text-white">
                    始発まで営業している居酒屋
                  </span>

                  <div className="flex flex-row items-end justify-between gap-4">
                    <div className="flex flex-row items-end gap-1 lg:gap-2">
                      <img
                        src="/83@2x.png"
                        alt="83"
                        width={37}
                        height={26}
                        className="block h-[80%] w-[80%] max-w-[37px]"
                      />
                      <span className="text-[0.875rem] leading-none text-white">
                        件
                      </span>
                    </div>
                    <img
                      src="/Beer@2x.png"
                      alt="beer"
                      width={350}
                      height={35}
                      className="block h-[80%] w-[80%] max-w-[350px]"
                    />
                  </div>

                  <span className="mt-6 text-[0.75rem] tracking-[0.028rem] text-white">
                    始発まで営業しているラーメン屋
                  </span>
                  <div className="flex flex-row items-end justify-between">
                    <div className="flex flex-row items-end gap-1 lg:gap-2">
                      <span className="text-4xl text-white">
                        9
                        <span className="lg-ml-1 ml-1 text-[0.875rem] text-white">
                          件
                        </span>
                      </span>
                    </div>

                    <img
                      src="/Ramen@2x.png"
                      alt="ramen"
                      width={347}
                      height={25}
                      className="mx-auto h-[80%] w-[80%] max-w-[347px]"
                    />
                  </div>
                </div>
                <div className="mt-6 text-right text-[0.563rem] tracking-[0.028rem] text-[#FFFFFF] lg:mt-7">
                  ※虎ノ門駅の半径1km以内
                </div>
              </div>
            </article>

            {/* 3 Col */}
            <article className="bg-white shadow-[0px_1px_1px_#D8D8D8BF] lg:h-[25rem]">
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <img
                    src="/camera@2x.png"
                    alt="camera"
                    width={36}
                    height={27}
                    className=""
                  />
                  <span className="text-[1.375rem] leading-[1.063rem] tracking-[-0.01rem]">
                    フォトギャラリー{" "}
                  </span>
                </div>

                <div className="grid grid-cols-3 grid-rows-4 pt-5 lg:grid-cols-4 lg:grid-rows-3">
                  <div className="col-span-3 row-span-3">
                    <img
                      src="/photo1@2x.png"
                      alt="camera"
                      width={338}
                      height={310}
                      className="h-full w-full"
                    />
                  </div>

                  <div className="col-span-1 row-span-1">
                    <img
                      src="/photo2@2x.png"
                      alt="camera"
                      width={112}
                      height={103}
                      className="h-full w-full"
                    />
                  </div>

                  <div className="col-span-1 row-span-1">
                    <img
                      src="/photo3@2x.png"
                      alt="camera"
                      width={112}
                      height={103}
                      className="h-full w-full"
                    />
                  </div>

                  <div className="col-span-1 row-span-1">
                    <img
                      src="/photo4@2x.png"
                      alt="camera"
                      width={112}
                      height={103}
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </div>
            </article>
          </section>

          <section className="article-section__group  ">
            {/* 4 Col */}
            <article className="article-section__item--4 ">
              <div className="article-section__title  ">
                <img
                  src="/iPhone@2x.png"
                  alt="iphone_icon"
                  width={19}
                  height={26}
                />
                <span className="article-section__title-text ">
                  電話・FAX番号が変わりました
                </span>
              </div>

              <img
                src="/tel-fax@2x.png"
                alt="toranomon"
                width={385}
                height={80}
                className="article-section__contents"
              />
            </article>

            {/* 5 col */}
            <article className="bg-white p-6 shadow-[0px_1px_1px_#D8D8D8BF] lg:h-[33.125rem]">
              <div className=" ">
                <div className="flex items-center gap-2">
                  <img
                    src="/Business-Graduation-cap-icon@2x.png"
                    alt="Graduation_cap"
                    width={44}
                    height={30}
                    className=" "
                  />
                  <h3 className="text-[1.125rem] lg:text-[1.375rem]">
                    虎ノ門の由来って？
                  </h3>
                </div>

                <img
                  src="/photo@2x.png"
                  alt="photo"
                  width={450}
                  height={320}
                  className="mx-auto pt-4"
                />
                <p className="block pt-8 text-[0.675rem] leading-[1.25rem] lg:text-[0.8rem]">
                  虎ノ門駅を出てすぐ、
                  <br className="lg:hidden" />{" "}
                  虎ノ門交差点付近に鎮座するこの銅像。
                  <br />
                  これ、なんだかお分かりでしょうか？ <br />
                  そう、猫です。というのは嘘で予想どおり、
                  <br className="lg:hidden" /> 虎です(笑) <br />
                  虎ノ門だけに虎の銅像なんです！ <br />
                  そもそもどうして、
                  <br className="lg:hidden" />{" "}
                  ここの地名が「虎ノ門」なのか気になりませんか？
                </p>
              </div>
            </article>
            {/* 6 col */}
            <article className="bg-[#E9BC06] shadow-[0px_1px_1px_#D8D8D8BF] lg:h-[21.25rem]">
              <div className="pt-2 pr-4 pb-4 pl-4">
                <img
                  src="/Pick up foods@2x.png"
                  alt="food"
                  width={253}
                  height={42}
                  className="mx-auto pt-4"
                />
                <div className="flex flex-col items-center justify-center gap-4 pt-6 lg:flex-row lg:items-start">
                  <img
                    src="/ramen-photo@2x.png"
                    alt="ramen-photo"
                    width={161}
                    height={204}
                    className="lg-mx-0 mx-auto"
                  />
                  <p className="text-center lg:text-left">
                    <span className="block text-[1.125rem] tracking-[-0.028125rem] text-white">
                      めん徳　二代目つじ田　新橋店
                      <br />
                      <br className="hidden xl:block" />
                    </span>

                    <span className="mt-4 block text-[0.725rem] tracking-[-0.01875rem] text-white lg:text-[0.7rem] xl:mt-0 xl:text-[0.75rem]">
                      1月24日にオープンしたばかりのラーメン店。
                      <br />
                      看板メニューのつけ麺は3段階に進化します。 <br />
                      最初はそのまま、途中ですだちを絞って爽やかに、 <br />
                      最後は黒七味をかけてピリっとした風味を楽しんだ <br />
                      ところで美味しく完食…。といった流れです。 <br />
                      <br className="hidden xl:block" />
                    </span>

                    <span className="mt-4 block text-[0.725rem] tracking-[-0.01875rem] text-white lg:text-[0.7rem] xl:mt-0 xl:text-[0.75rem]">
                      弊社スタッフ達も、
                      <br className="lg:hidden" />
                      頻繁に出没しそうな予感がして います。
                    </span>
                  </p>
                </div>
              </div>
            </article>
          </section>
        </section>

        {/* Link Section */}
        <section className="section-link">
          <p className="section-link__text">
            新しくなった東京オフィスへ <br className="sm-hidden" />
            ぜひお越しください。
          </p>
          <Link to="https://ankh-systems.co.jp/">
            <div className="section-link__button">
              <div className="section-link-button__box">
                <img
                  src="/green_logo@2x.png"
                  alt="AnkhSystems"
                  width={328}
                  height={36}
                  className="section-link-button-box__img"
                />
                <p className="hidden md-block section-link-button-box__buttonText">
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
                className="section-link-button__arrow"
              />
            </div>
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
