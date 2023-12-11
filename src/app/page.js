"use client";
import Image from "next/image";
import HeaderLogo from "../../public/header-logo.png";
import middleLogo from "../../public/middle-header-logo.png";
import goldClock from "../../public/clock-gold-img.png";
import styles from "./page.module.css";

export default function Home() {
  const scrollRight = () => {
    var element = document.querySelector("#cards-sec");
    element.scrollLeft = element.scrollWidth;
  };

  const scrollLeft = () => {
    var element = document.querySelector("#cards-sec");
    element.scrollLeft = 0;
  };

  return (
    <main className={styles.main}>
      <div className="main-div">
        <div className="header-sec">
          <div class="inner-header-sec flex flex-wrap justify-between align-center">
            <div className="header-logo-sec w-56 h-16">
              <Image src={HeaderLogo} className="w-full h-full" alt="img1" />
            </div>
            <div className="header-middle-sec">
              <div className="middle-btn-sec">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                  onClick={scrollLeft}
                >
                  <path
                    fill-rule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                  />
                </svg>
                <Image src={middleLogo} height={64} width={64} alt="img3" />

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                  onClick={scrollRight}
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </div>
            </div>
            <div className="header-menu-sec flex items-center justify-end">
              <div className="timer-sec">
                <span className="time-txt1">00.38</span>
                <span className="time-txt2">5m</span>

                <Image src={goldClock} height={62} width={62} alt="img2" />
              </div>
              <div className="flex icons-sec">
                <div className="icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-question-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94" />
                  </svg>
                </div>
                <div className="icons">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trophy"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935M3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
                  </svg>
                </div>
                <div className="icons grey-bg-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-clock-history"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483m.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535m-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z" />
                    <path d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0z" />
                    <path d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cards-section" id="cards-sec">
          {/*<div class="container m-auto grid grid-cols-4 md:grid-cols-4 lg:grid-cols-12 gap-8">
             <div className="card-sec expired col-span-12 md:col-span-2 lg:col-span-3">
              <div className="card-inner-sec1 flex justify-between">
                <div className="live-txt-sec">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-ban"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 8a6.973 6.973 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
                  </svg>{" "}
                  Expired
                </div>
                <span className="color-code-txt">#214687</span>
              </div>
              <div className="payout-block1">
                <span className="payout-txt1">up</span>
                <span className="payout-txt2">
                  <span className="text-slate-700">2.15x</span> Payout
                </span>
              </div>
              <div className="card-inner-sec2 m-auto">
                <span className="price-txt">Last Price</span>
                <div className="changes-sec flex justify-between">
                  <span className="amt-txt">$228.5332</span>

                  <button class="save-btn">$-0.4141</button>
                </div>

                <div className="total-price-sec flex justify-between">
                  <div className="total-price-sec1">
                    <span className="price-txt1">Locked Price:</span>
                    <span className="price-txt2">Prize Pool:</span>
                  </div>

                  <div className="total-price-sec2">
                    <span className="price-txt1">$228.5332</span>
                    <span className="price-txt2">8.5143 BNB</span>
                  </div>
                </div>
              </div>
              <div className="payout-block2">
                <span className="payout-txt2">
                  <span>1.87x</span> Payout
                </span>
                <span className="payout-txt1">DOWN </span>
              </div>
            </div>
            <div className="card-sec expired col-span-12 md:col-span-2 lg:col-span-3">
              <div className="card-inner-sec1 flex justify-between">
                <div className="live-txt-sec">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-ban"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 8a6.973 6.973 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
                  </svg>
                  Expired
                </div>
                <span className="color-code-txt">#214687</span>
              </div>
              <div className="payout-block1">
                <span className="payout-txt1">up</span>
                <span className="payout-txt2">
                  <span className="text-slate-700">2.15x</span> Payout
                </span>
              </div>
              <div className="card-inner-sec2 m-auto">
                <span className="price-txt">Last Price</span>
                <div className="changes-sec flex justify-between">
                  <span className="amt-txt">$228.5332</span>

                  <button class="save-btn">$-0.4141</button>
                </div>

                <div className="total-price-sec flex justify-between">
                  <div className="total-price-sec1">
                    <span className="price-txt1">Locked Price:</span>
                    <span className="price-txt2">Prize Pool:</span>
                  </div>

                  <div className="total-price-sec2">
                    <span className="price-txt1">$228.5332</span>
                    <span className="price-txt2">8.5143 BNB</span>
                  </div>
                </div>
              </div>
              <div className="payout-block2">
                <span className="payout-txt2">
                  <span>1.87x</span> Payout
                </span>
                <span className="payout-txt1">DOWN </span>
              </div>
            </div>
            <div className="card-sec col-span-12 md:col-span-2 lg:col-span-3">
              <div className="card-inner-sec1 live-bg flex justify-between">
                <div className="live-txt-sec">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-play-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                  </svg>{" "}
                  Live
                </div>
                <span className="color-code-txt">#214687</span>
              </div>
              <div className="payout-block1">
                <span className="payout-txt1">up</span>
                <span className="payout-txt2">
                  <span className="text-slate-700">2.15x</span> Payout
                </span>
              </div>
              <div className="card-inner-sec2 m-auto">
                <span className="price-txt">Last Price</span>
                <div className="changes-sec flex justify-between">
                  <span className="amt-txt">$228.5332</span>

                  <button class="save-btn">$-0.4141</button>
                </div>

                <div className="total-price-sec flex justify-between">
                  <div className="total-price-sec1">
                    <span className="price-txt1">Locked Price:</span>
                    <span className="price-txt2">Prize Pool:</span>
                  </div>

                  <div className="total-price-sec2">
                    <span className="price-txt1">$228.5332</span>
                    <span className="price-txt2">8.5143 BNB</span>
                  </div>
                </div>
              </div>
              <div className="payout-block2">
                <span className="payout-txt2">
                  <span>1.87x</span> Payout
                </span>
                <span className="payout-txt1">DOWN </span>
              </div>
            </div>
            <div className="card-sec col-span-12 md:col-span-2 lg:col-span-3">
              <div className="card-inner-sec1  next-bg flex justify-between">
                <div className="live-txt-sec next-bg-color">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-play-circle next-bg-color"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                  </svg>{" "}
                  Next
                </div>
                <span className="color-code-txt next-bg-color">#214687</span>
              </div>
              <div className="payout-block1">
                <span className="payout-txt1">up</span>
                <span className="payout-txt2">
                  <span className="text-slate-700">2.15x</span> Payout
                </span>
              </div>
              <div className="m-auto">
                <div className="next-btn-sec">
                  <div className="inner-next-sec">
                    <div className="flex justify-between">
                      <span className="price-txt">Price Pool:</span>

                      <span className="price-txt">2.3760 BNB</span>
                    </div>

                    <button className="next-btn1">Enter Up</button>
                    <button className="next-btn2">Enter Down</button>
                  </div>
                </div>
              </div>
              <div className="payout-block2">
                <span className="payout-txt2">
                  <span>1.87x</span> Payout
                </span>
                <span className="payout-txt1">DOWN </span>
              </div>
            </div>
            <div className="card-sec expired col-span-12 md:col-span-2 lg:col-span-3">
              <div className="card-inner-sec1 flex justify-between">
                <div className="live-txt-sec">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>{" "}
                  Later
                </div>
                <span className="color-code-txt">#214687</span>
              </div>
              <div className="payout-block1 entry-up-text">UP</div>
              <div className="entry-sec m-auto">
                <span className="entry-text1">Entry starts now</span>

                <span className="entry-text2">~ 00.36</span>
              </div>
              <div className="payout-block2 entry-down-bg"> <span className="entry-dwn-txt">DOWN</span></div>
            </div>             
          </div>*/}

          <div class="flex inner-card-section">
            <div className="card-sec expired">
              <div className="card-inner-sec1 flex justify-between">
                <div className="live-txt-sec">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-ban"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 8a6.973 6.973 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
                  </svg>{" "}
                  Expired
                </div>
                <span className="color-code-txt">#214687</span>
              </div>
              <div className="payout-block1">
                <span className="payout-txt1">up</span>
                <span className="payout-txt2">
                  <span className="text-slate-700">2.15x</span> Payout
                </span>
              </div>
              <div className="card-inner-sec2 m-auto">
                <span className="price-txt">Last Price</span>
                <div className="changes-sec flex justify-between">
                  <span className="amt-txt">$228.5332</span>

                  <button class="save-btn">$-0.4141</button>
                </div>

                <div className="total-price-sec flex justify-between">
                  <div className="total-price-sec1">
                    <span className="price-txt1">Locked Price:</span>
                    <span className="price-txt2">Prize Pool:</span>
                  </div>

                  <div className="total-price-sec2">
                    <span className="price-txt1">$228.5332</span>
                    <span className="price-txt2">8.5143 BNB</span>
                  </div>
                </div>
              </div>
              <div className="payout-block2">
                <span className="payout-txt2">
                  <span>1.87x</span> Payout
                </span>
                <span className="payout-txt1">DOWN </span>
              </div>
            </div>
            <div className="card-sec expired">
              <div className="card-inner-sec1 flex justify-between">
                <div className="live-txt-sec">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-ban"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15 8a6.973 6.973 0 0 0-1.71-4.584l-9.874 9.875A7 7 0 0 0 15 8M2.71 12.584l9.874-9.875a7 7 0 0 0-9.874 9.874ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0" />
                  </svg>
                  Expired
                </div>
                <span className="color-code-txt">#214687</span>
              </div>
              <div className="payout-block1">
                <span className="payout-txt1">up</span>
                <span className="payout-txt2">
                  <span className="text-slate-700">2.15x</span> Payout
                </span>
              </div>
              <div className="card-inner-sec2 m-auto">
                <span className="price-txt">Last Price</span>
                <div className="changes-sec flex justify-between">
                  <span className="amt-txt">$228.5332</span>

                  <button class="save-btn">$-0.4141</button>
                </div>

                <div className="total-price-sec flex justify-between">
                  <div className="total-price-sec1">
                    <span className="price-txt1">Locked Price:</span>
                    <span className="price-txt2">Prize Pool:</span>
                  </div>

                  <div className="total-price-sec2">
                    <span className="price-txt1">$228.5332</span>
                    <span className="price-txt2">8.5143 BNB</span>
                  </div>
                </div>
              </div>
              <div className="payout-block2">
                <span className="payout-txt2">
                  <span>1.87x</span> Payout
                </span>
                <span className="payout-txt1">DOWN </span>
              </div>
            </div>
            <div className="card-sec">
              <div className="card-inner-sec1 live-bg flex justify-between">
                <div className="live-txt-sec">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-play-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                  </svg>{" "}
                  Live
                </div>
                <span className="color-code-txt">#214687</span>
              </div>
              <div className="payout-block1">
                <span className="payout-txt1">up</span>
                <span className="payout-txt2">
                  <span className="text-slate-700">2.15x</span> Payout
                </span>
              </div>
              <div className="card-inner-sec2 m-auto">
                <span className="price-txt">Last Price</span>
                <div className="changes-sec flex justify-between">
                  <span className="amt-txt">$228.5332</span>

                  <button class="save-btn">$-0.4141</button>
                </div>

                <div className="total-price-sec flex justify-between">
                  <div className="total-price-sec1">
                    <span className="price-txt1">Locked Price:</span>
                    <span className="price-txt2">Prize Pool:</span>
                  </div>

                  <div className="total-price-sec2">
                    <span className="price-txt1">$228.5332</span>
                    <span className="price-txt2">8.5143 BNB</span>
                  </div>
                </div>
              </div>
              <div className="payout-block2">
                <span className="payout-txt2">
                  <span>1.87x</span> Payout
                </span>
                <span className="payout-txt1">DOWN </span>
              </div>
            </div>
            <div className="card-sec">
              <div className="card-inner-sec1  next-bg flex justify-between">
                <div className="live-txt-sec next-bg-color">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-play-circle next-bg-color"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445" />
                  </svg>{" "}
                  Next
                </div>
                <span className="color-code-txt next-bg-color">#214687</span>
              </div>
              <div className="payout-block1">
                <span className="payout-txt1">up</span>
                <span className="payout-txt2">
                  <span className="text-slate-700">2.15x</span> Payout
                </span>
              </div>
              <div className="m-auto">
                <div className="next-btn-sec">
                  <div className="inner-next-sec">
                    <div className="flex justify-between">
                      <span className="price-txt">Price Pool:</span>

                      <span className="price-txt">2.3760 BNB</span>
                    </div>

                    <button className="next-btn1">Enter Up</button>
                    <button className="next-btn2">Enter Down</button>
                  </div>
                </div>
              </div>
              <div className="payout-block2">
                <span className="payout-txt2">
                  <span>1.87x</span> Payout
                </span>
                <span className="payout-txt1">DOWN </span>
              </div>
            </div>
            <div className="card-sec expired">
              <div className="card-inner-sec1 flex justify-between mb-last">
                <div className="live-txt-sec">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-clock"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
                  </svg>{" "}
                  Later
                </div>
                <span className="color-code-txt">#214687</span>
              </div>
              <div className="payout-block1 entry-up-text">UP</div>
              <div className="entry-sec m-auto">
                <span className="entry-text1">Entry starts now</span>

                <span className="entry-text2">~ 00.36</span>
              </div>
              <div className="payout-block2 entry-down-bg">
                {" "}
                <span className="entry-dwn-txt">DOWN</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
