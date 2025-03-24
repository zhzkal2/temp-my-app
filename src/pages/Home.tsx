import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import MyMap from "../Components/MyMap";
import Article from "../Components/Article";
import Modal from "../Components/Modal";

import "../styles/pages/home/Home.css";
import "../styles/pages/home/SubTitle.css";
import "../styles/pages/Home/Link.css";
import "../styles/pages/home/Title.css";
import "../styles/pages/home/Article.css";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<React.ReactNode>(null);

  const openModal = useCallback((content: React.ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setModalContent(null);
  }, []);

  const article1Content = (
    <article className="article-section__item article-section__item--1">
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
        〒105-0001 港区虎ノ門2-7-16
        <br className="lg-hidden" />
        エグゼクティブタワー虎ノ門 504
      </address>
      <MyMap className="article-section__map " />
    </article>
  );

  const article2Content = (
    <article className="article-section__item article-section__item--2">
      <img
        src="/title@2x.png"
        alt="drunk"
        width={307}
        height={70}
        className="article-section__title "
      />
      {/* container */}
      <div className="article-section__contents">
        <span className="article-section__subtitle--1">
          始発まで営業している居酒屋
        </span>

        <div className=" article-section__container">
          <span className="article-section__text">
            83
            <span className="article-section__unit ">件</span>
          </span>

          <img
            src="/Beer@2x.png"
            alt="beer"
            width={350}
            height={35}
            className="article-section__img "
          />
        </div>

        <span className="article-section__subtitle--2">
          始発まで営業しているラーメン屋
        </span>

        <div className="article-section__container ">
          <span className="article-section__text ">
            9<span className="article-section__unit ">件</span>
          </span>

          <img
            src="/Ramen@2x.png"
            alt="ramen"
            width={347}
            height={25}
            className="article-section__img"
          />
        </div>
      </div>
      <div className="article-section__info ">※虎ノ門駅の半径1km以内</div>
    </article>
  );

  const article3Content = (
    <article className="article-section__item article-section__item--3 ">
      <div className="article-section__title">
        <img src="/camera@2x.png" alt="camera" width={36} height={27} />
        <span className="article-section__title-text ">フォトギャラリー</span>
      </div>

      <div className="article-section__title-contents ">
        <img
          src="/photo1@2x.png"
          alt="camera"
          width={338}
          height={310}
          className="article-section__title-main "
        />

        <img
          src="/photo2@2x.png"
          alt="camera"
          width={112}
          height={103}
          className="article-section__title-sub"
        />

        <img
          src="/photo3@2x.png"
          alt="camera"
          width={112}
          height={103}
          className="article-section__title-sub"
        />

        <img
          src="/photo4@2x.png"
          alt="camera"
          width={112}
          height={103}
          className="article-section__title-sub "
        />
      </div>
    </article>
  );

  const article4Content = (
    <article className="article-section__item article-section__item--4 ">
      <div className="article-section__title  ">
        <img src="/iPhone@2x.png" alt="iphone_icon" width={19} height={26} />
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
  );

  const article5Content = (
    <article className="article-section__item article-section__item--5 ">
      <div className="article-section__title flex items-center">
        <img
          src="/Business-Graduation-cap-icon@2x.png"
          alt="Graduation_cap"
          width={44}
          height={30}
        />
        <span className="article-section__title-text">虎ノ門の由来って？</span>
      </div>

      <img
        src="/photo@2x.png"
        alt="photo"
        width={450}
        height={320}
        className="article-section__contents-img "
      />
      <span className="article-section__contents-text">
        虎ノ門駅を出てすぐ、
        <br className="lg-hidden" />
        虎ノ門交差点付近に鎮座するこの銅像。
        <br />
        これ、なんだかお分かりでしょうか？ <br />
        そう、猫です。というのは嘘で予想どおり、
        <br className="lg-hidden" /> 虎です(笑) <br />
        虎ノ門だけに虎の銅像なんです！ <br />
        そもそもどうして、
        <br className="lg-hidden" />
        ここの地名が「虎ノ門」なのか気になりませんか？
      </span>
    </article>
  );

  const article6Content = (
    <article className="article-section__item article-section__item--6">
      <img
        src="/Pick up foods@2x.png"
        alt="food"
        width={253}
        height={42}
        className="article-section__title"
      />
      <div className="article-section__contents">
        <img
          src="/ramen-photo@2x.png"
          alt="ramen-photo"
          width={161}
          height={204}
          className="article-section__contents-img"
        />
        <div className="article-section__contents-container ">
          <span className="article-section__contents-text1">
            めん徳　二代目つじ田　
            <br className="block md-hidden" />
            新橋店
            <br className="hidden xl-block" />
            <br />
          </span>
          <span className="article-section__contents-text2">
            1月24日にオープンしたばかりのラーメン店。
            <br />
            看板メニューのつけ麺は3段階に進化します。 <br />
            最初はそのまま、途中ですだちを絞って爽やかに、 <br />
            最後は黒七味をかけてピリっとした風味を楽しんだ <br />
            ところで美味しく完食…。といった流れです。
            <br className="hidden xl-block" />
            <br />
          </span>

          <span className="article-section__contents-text2">
            弊社スタッフ達も、
            <br />
            頻繁に出没しそうな予感がして います。
          </span>
        </div>
      </div>
    </article>
  );

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
              className="section-title__overlay-img"
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

          <article className="section-subtitle__text">
            <p className="section-subtitle__text-p">
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
            <Article
              title="新東京オフィスの地図はこちら"
              content={article1Content}
              onOpenModal={openModal}
            />

            {/* 2 Col */}
            <Article
              title="Let's get drunk!"
              content={article2Content}
              onOpenModal={openModal}
            />

            {/* 3 Col */}
            <Article
              title="フォトギャラリー"
              content={article3Content}
              onOpenModal={openModal}
            />
          </section>

          <section className="article-section__group  ">
            {/* 4 Col */}
            <Article
              title="電話・FAX番号変更"
              content={article4Content}
              onOpenModal={openModal}
            />
            {/* 5 col */}
            <Article
              title="虎ノ門の由来って？"
              content={article5Content}
              onOpenModal={openModal}
            />
            {/* 6 col */}
            <Article
              title="Pick Up Foods"
              content={article6Content}
              onOpenModal={openModal}
            />
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
              <div className="section-link__button-box">
                <img
                  src="/green_logo@2x.png"
                  alt="AnkhSystems"
                  width={328}
                  height={36}
                  className="section-link__button-box-img"
                />
                <p className="hidden sm-block section-link__button-text">
                  株式会社アンクシステムズ
                  <br className="hidden sm-block lg-hidden" />
                  コーポレートサイトへ
                </p>
              </div>
              <img
                src="/arrow@2x.png"
                alt="arrow"
                width={6}
                height={11}
                className="section-link__button-arrow "
              />
            </div>
          </Link>
        </section>
      </main>
      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {modalContent}
      </Modal>
      <Footer />
    </>
  );
}

export default Home;
