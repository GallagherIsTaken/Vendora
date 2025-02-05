"use client"

import React from 'react'

function Hero() {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1920px] h-[8330px] relative">
        <div className="absolute w-[1920px] h-[4188px] top-[92px] left-0">
          <div className="flex w-[1920px] h-[865px] items-center px-[220px] py-[140px] absolute top-0 left-0 bg-[#043873]">
            <img
              className="absolute w-[1920px] h-[571px] top-[201px] left-0"
              alt="Element"
              src="https://c.animaapp.com/XtGaFmLr/img/element.png"
            />

            <div className="flex flex-col items-start gap-[60px] relative flex-1 grow">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] font-header-h2 font-[number:var(--header-h2-font-weight)] text-white text-[length:var(--header-h2-font-size)] tracking-[var(--header-h2-letter-spacing)] leading-[var(--header-h2-line-height)] [font-style:var(--header-h2-font-style)]">
                  Get More Done with Vendora
                </p>

                <p className="relative self-stretch font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-white text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
                  Your E-commerce solution to website building and store
                  management.
                </p>
              </div>

              <div className="inline-flex items-center gap-2.5 p-5 relative flex-[0_0_auto] bg-[#4f9cf9] rounded-lg">
                <div className="w-fit font-[number:var(--paragraph-p2-medium-font-weight)] text-[length:var(--paragraph-p2-medium-font-size)] tracking-[var(--paragraph-p2-medium-letter-spacing)] leading-[var(--paragraph-p2-medium-line-height)] whitespace-nowrap relative mt-[-1.00px] font-paragraph-p2-medium text-white [font-style:var(--paragraph-p2-medium-font-style)]">
                  Try Vendora free
                </div>

                <img
                  className="relative w-[11px] h-[11px] mr-[-0.50px]"
                  alt="Group"
                  src="https://c.animaapp.com/XtGaFmLr/img/group-212@2x.png"
                />
              </div>
            </div>

            <div className="relative w-[824px] h-[549px] bg-primary-100" />
          </div>

          <div className="flex flex-col w-[1920px] h-[1168px] items-start justify-center gap-[75px] px-[220px] py-[140px] absolute top-[829px] left-0 bg-[#212529] rounded-[40px]">
            <div className="relative w-[1484px] h-[275px] mr-[-4.00px]">
              <p className="absolute w-[1123px] top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-white text-[64px] tracking-[-1.28px] leading-[normal] whitespace-nowrap">
                Transform your vision into reality
              </p>

              <p className="absolute w-[1480px] top-[105px] left-0 [font-family:'Inter',Helvetica] font-normal text-[#8f8f92] text-5xl tracking-[-0.96px] leading-[normal]">
                Your entire business, powered by one platform. Whether
                you&#39;re crafting artisanal goods or building a global brand,
                we give you the tools to succeed.
              </p>
            </div>

            <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
              <div className="relative w-[220px] h-[500px] bg-[#d9d9d9] rounded-[20px]" />

              <div className="relative w-[598px] h-[500px] bg-[#d9d9d9] rounded-[20px]" />

              <div className="relative w-[598px] h-[500px] bg-[#d9d9d9] rounded-[20px]" />
            </div>
          </div>

          <div className="flex flex-col w-[1920px] h-[2240px] items-start gap-[75px] pt-0 pb-[140px] px-[220px] absolute top-[1948px] left-0 bg-[#212529]">
            <div className="relative w-[1484px] h-[275px] mr-[-4.00px]">
              <div className="absolute w-[1123px] top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-white text-[64px] tracking-[-1.28px] leading-[normal] whitespace-nowrap">
                Freedom To Flourish
              </div>

              <p className="absolute w-[1480px] top-[105px] left-0 [font-family:'Inter',Helvetica] font-normal text-[#8f8f92] text-5xl tracking-[-0.96px] leading-[normal]">
                Create your perfect storefront, manage your entire business, and
                reach customers everywhere – all from one powerful dashboard. No
                technical expertise required.
              </p>
            </div>

            <div className="flex h-[832px] items-center gap-4 relative self-stretch w-full">
              <div className="relative w-[1480px] h-[832px] bg-[#d9d9d9] rounded-[20px]" />
            </div>

            <div className="inline-flex items-center gap-8 relative flex-[0_0_auto]">
              <div className="w-[472px] relative h-[832px] bg-[#d9d9d9] rounded-[20px]" />

              <div className="w-[472px] relative h-[832px] bg-[#d9d9d9] rounded-[20px]" />

              <div className="w-[472px] relative h-[832px] bg-[#d9d9d9] rounded-[20px]" />
            </div>
          </div>
        </div>

        <header className="flex w-[1920px] items-center justify-between px-[220px] py-4 absolute top-0 left-0 bg-[#043873]">
          <div className="flex w-[191px] items-center justify-around gap-2.5 relative">
            <div className="relative w-[165px] h-[34px]">
              <img
                className="absolute w-[37px] h-[29px] top-0.5 left-0"
                alt="Logo icon"
                src="https://c.animaapp.com/XtGaFmLr/img/logo-icon.svg"
              />

              <div className="absolute top-0 left-[47px] [font-family:'Inter',Helvetica] font-bold text-white text-[28px] tracking-[0] leading-[normal]">
                Vendora
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-[60px] relative flex-[0_0_auto]">
            <div className="flex w-[402px] items-start gap-8 relative">
              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-0.50px] [font-family:'DM_Sans',Helvetica] font-medium text-white text-lg tracking-[0] leading-[23px] whitespace-nowrap">
                  Solutions
                </div>

                <img
                  className="relative flex-[0_0_auto]"
                  alt="Down arrow"
                  src="https://c.animaapp.com/XtGaFmLr/img/down-arrow-2.svg"
                />
              </div>

              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-0.50px] [font-family:'DM_Sans',Helvetica] font-medium text-white text-lg tracking-[0] leading-[23px] whitespace-nowrap">
                  Resources
                </div>

                <img
                  className="relative flex-[0_0_auto]"
                  alt="Down arrow"
                  src="https://c.animaapp.com/XtGaFmLr/img/down-arrow-2.svg"
                />
              </div>

              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] mr-[-5.00px]">
                <div className="mt-[-0.50px] [font-family:'DM_Sans',Helvetica] font-medium text-lg tracking-[0] leading-[23px] relative w-fit text-white whitespace-nowrap">
                  Pricing
                </div>

                <img
                  className="relative flex-[0_0_auto]"
                  alt="Down arrow"
                  src="https://c.animaapp.com/XtGaFmLr/img/down-arrow-2.svg"
                />
              </div>
            </div>

            <div className="inline-flex h-[60px] items-start justify-end gap-6 relative flex-[0_0_auto]">
              <button className="all-[unset] box-border h-[60px] px-10 py-4 bg-[#ffe492] inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] rounded-lg">
                <div className="relative w-fit font-paragraph-p2-medium font-[number:var(--paragraph-p2-medium-font-weight)] text-[#043873] text-[length:var(--paragraph-p2-medium-font-size)] tracking-[var(--paragraph-p2-medium-letter-spacing)] leading-[var(--paragraph-p2-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-medium-font-style)]">
                  Login
                </div>
              </button>

              <div className="inline-flex h-[60px] items-center justify-center gap-2.5 px-6 py-4 relative flex-[0_0_auto] bg-[#4f9cf9] rounded-lg">
                <div className="text-[length:var(--paragraph-p2-medium-font-size)] tracking-[var(--paragraph-p2-medium-letter-spacing)] leading-[var(--paragraph-p2-medium-line-height)] relative w-fit font-paragraph-p2-medium font-[number:var(--paragraph-p2-medium-font-weight)] text-white whitespace-nowrap [font-style:var(--paragraph-p2-medium-font-style)]">
                  Try Vendora free
                </div>

                <img
                  className="relative flex-[0_0_auto] mr-[-0.50px]"
                  alt="Icon"
                  src="https://c.animaapp.com/XtGaFmLr/img/icon.svg"
                />
              </div>
            </div>
          </div>
        </header>

        <div className="absolute w-[1920px] h-[4050px] top-[4280px] left-0">
          <footer className="flex flex-col w-[1920px] h-[512px] items-center justify-center gap-[200px] pt-[140px] pb-8 px-[220px] absolute top-[3538px] left-0 bg-[#043873]">
            <div className="inline-flex flex-col items-start gap-[100px] relative flex-[0_0_auto]">
              <div className="w-[1480px] gap-[100px] flex-[0_0_auto] flex items-start relative">
                <div className="flex-col gap-[15px] flex-1 grow flex items-start relative">
                  <div className="relative w-[165px] h-[34px]">
                    <img
                      className="absolute w-[37px] h-[29px] top-0.5 left-0"
                      alt="Logo icon"
                      src="https://c.animaapp.com/XtGaFmLr/img/logo-icon-1.svg"
                    />

                    <div className="absolute top-0 left-[47px] [font-family:'Inter',Helvetica] font-bold text-white text-[28px] tracking-[0] leading-[normal]">
                      Vendora
                    </div>
                  </div>

                  <p className="relative w-60 mr-[-34.75px] font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-[#f7f7ee] text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
                    Vendora was created to ease your needs when creating an
                    online store.
                  </p>
                </div>

                <div className="flex-col gap-[15px] flex-1 grow flex items-start relative">
                  <div className="relative w-fit mt-[-1.00px] font-paragraph-p2-bold font-[number:var(--paragraph-p2-bold-font-weight)] text-white text-[length:var(--paragraph-p2-bold-font-size)] tracking-[var(--paragraph-p2-bold-letter-spacing)] leading-[var(--paragraph-p2-bold-line-height)] [font-style:var(--paragraph-p2-bold-font-style)]">
                    Product
                  </div>

                  <div className="relative w-fit font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-[#ffe492] text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)]">
                    Overview
                  </div>

                  <div className="font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] relative w-fit text-white whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)]">
                    Pricing
                  </div>

                  <div className="relative w-[177px] font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] [font-style:var(--paragraph-p3-regular-font-style)]">
                    Customer stories
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] font-paragraph-p2-bold font-[number:var(--paragraph-p2-bold-font-weight)] text-white text-[length:var(--paragraph-p2-bold-font-size)] tracking-[var(--paragraph-p2-bold-letter-spacing)] leading-[var(--paragraph-p2-bold-line-height)] [font-style:var(--paragraph-p2-bold-font-style)]">
                    Resources
                  </div>

                  <div className="relative w-fit font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)]">
                    Blog
                  </div>

                  <div className="relative w-fit font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)]">
                    Guides &amp; tutorials
                  </div>

                  <div className="relative w-[130px] font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] [font-style:var(--paragraph-p3-regular-font-style)]">
                    Help center
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] font-paragraph-p2-bold font-[number:var(--paragraph-p2-bold-font-weight)] text-white text-[length:var(--paragraph-p2-bold-font-size)] tracking-[var(--paragraph-p2-bold-letter-spacing)] leading-[var(--paragraph-p2-bold-line-height)] [font-style:var(--paragraph-p2-bold-font-style)]">
                    Company
                  </div>

                  <div className="relative w-fit font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)]">
                    About us
                  </div>

                  <div className="relative w-fit font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)]">
                    Careers
                  </div>

                  <div className="relative w-[99px] font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] [font-style:var(--paragraph-p3-regular-font-style)]">
                    Media kit
                  </div>
                </div>

                <div className="inline-flex flex-col items-start gap-[23px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-header-h5 font-[number:var(--header-h5-font-weight)] text-white text-[length:var(--header-h5-font-size)] tracking-[var(--header-h5-letter-spacing)] leading-[var(--header-h5-line-height)] whitespace-nowrap [font-style:var(--header-h5-font-style)]">
                    Try It Today
                  </div>

                  <p className="relative w-[259px] font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] [font-style:var(--paragraph-p3-regular-font-style)]">
                    Get started for free. Add your whole team as your needs
                    grow.
                  </p>

                  <div className="px-10 py-5 bg-[#4f9cf9] inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] rounded-lg">
                    <div className="relative w-fit mt-[-1.00px] font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)]">
                      Start today
                    </div>

                    <img
                      className="relative flex-[0_0_auto] mr-[-0.50px]"
                      alt="Icon"
                      src="https://c.animaapp.com/XtGaFmLr/img/icon-1.svg"
                    />
                  </div>
                </div>
              </div>

              <div className="flex w-[1480px] items-center justify-between relative flex-[0_0_auto]">
                <div className="inline-flex items-center gap-[60px] relative flex-[0_0_auto]">
                  <div className="inline-flex items-center justify-center gap-1.5 relative flex-[0_0_auto]">
                    <img
                      className="relative flex-[0_0_auto]"
                      alt="Icon"
                      src="https://c.animaapp.com/XtGaFmLr/img/icon-2.svg"
                    />

                    <div className="relative w-fit mt-[-1.00px] font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)]">
                      English
                    </div>

                    <img
                      className="relative flex-[0_0_auto]"
                      alt="Arrow"
                      src="https://c.animaapp.com/XtGaFmLr/img/arrow.svg"
                    />
                  </div>

                  <div className="relative w-fit mt-[-1.00px] font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)]">
                    Terms &amp; privacy
                  </div>

                  <div className="relative w-fit mt-[-1.00px] font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)]">
                    Security
                  </div>

                  <div className="relative w-fit mt-[-1.00px] font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)]">
                    Status
                  </div>

                  <div className="relative w-fit mt-[-1.00px] font-paragraph-p3-regular font-[number:var(--paragraph-p3-regular-font-weight)] text-white text-[length:var(--paragraph-p3-regular-font-size)] tracking-[var(--paragraph-p3-regular-letter-spacing)] leading-[var(--paragraph-p3-regular-line-height)] whitespace-nowrap [font-style:var(--paragraph-p3-regular-font-style)]">
                    ©2025 Vendora LLC.
                  </div>
                </div>

                <img
                  className="relative flex-[0_0_auto]"
                  alt="Social icon"
                  src="https://c.animaapp.com/XtGaFmLr/img/social-icon.svg"
                />
              </div>

              <img
                className="absolute w-[1480px] h-px top-[248px] left-0 object-cover"
                alt="Line"
                src="https://c.animaapp.com/XtGaFmLr/img/line-2.svg"
              />
            </div>
          </footer>

          <div className="flex flex-col w-[1920px] h-[1320px] items-start justify-center gap-[75px] pt-0 pb-[140px] px-[220px] absolute top-0 left-0 bg-[#212529]">
            <div className="relative w-[1484px] h-[275px] mt-[-1.00px] mr-[-4.00px]">
              <div className="absolute w-[1123px] top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-white text-[64px] tracking-[-1.28px] leading-[normal] whitespace-nowrap">
                Built For Every Stage
              </div>

              <p className="absolute w-[1480px] top-[105px] left-0 [font-family:'Inter',Helvetica] font-normal text-[#8f8f92] text-5xl tracking-[-0.96px] leading-[normal]">
                Start small, dream big. From your first sale to your millionth
                customer, our platform grows with you. Sell anywhere – online,
                in-store, or across the globe.
              </p>
            </div>

            <div className="inline-flex h-[832px] items-center gap-8 relative mb-[-1.00px]">
              <div className="w-[724px] relative h-[832px] bg-[#d9d9d9] rounded-[20px]" />

              <div className="w-[724px] relative h-[832px] bg-[#d9d9d9] rounded-[20px]" />
            </div>
          </div>

          <img
            className="absolute w-[482px] h-[125px] top-[1348px] left-[719px]"
            alt="Group"
            src="https://c.animaapp.com/XtGaFmLr/img/group-1271@2x.png"
          />

          <div className="flex w-[1920px] items-start gap-[100px] px-[220px] py-[140px] absolute top-[1274px] left-0 bg-[#043873] rounded-[40px]">
            <img
              className="h-[700px] top-2.5 absolute w-[1920px] left-0"
              alt="Element"
              src="https://c.animaapp.com/XtGaFmLr/img/element-1.png"
            />

            <div className="relative w-[582px] h-[470.8px]">
              <div className="relative h-[471px]">
                <div className="absolute w-[291px] h-[291px] top-[34px] left-[139px] rounded-[145.5px] border-2 border-dashed border-[#4f9cf9]" />

                <div className="absolute w-[291px] h-[291px] top-[180px] left-9 rounded-[145.5px] border-2 border-dashed border-[#4f9cf9]" />

                <div className="absolute w-[291px] h-[291px] top-[180px] left-[255px] rounded-[145.5px] border-2 border-dashed border-[#4f9cf9]" />

                <div className="absolute w-[73px] h-[73px] top-[147px] left-[393px] bg-white rounded-[36.38px]">
                  <img
                    className="absolute w-11 h-11 top-[15px] left-[15px]"
                    alt="Slack"
                    src="https://c.animaapp.com/XtGaFmLr/img/slack-1.svg"
                  />
                </div>

                <div className="absolute w-[73px] h-[73px] top-[277px] left-0 bg-white rounded-[36.38px]">
                  <img
                    className="absolute w-11 h-11 top-[15px] left-[15px]"
                    alt="Outlook"
                    src="https://c.animaapp.com/XtGaFmLr/img/outlook-1.svg"
                  />
                </div>

                <div className="absolute w-[73px] h-[73px] top-[277px] left-[509px] bg-white rounded-[36.38px]">
                  <img
                    className="absolute w-11 h-11 top-[15px] left-[15px]"
                    alt="Google drive"
                    src="https://c.animaapp.com/XtGaFmLr/img/google-drive-1.svg"
                  />
                </div>

                <div className="absolute w-[73px] h-[73px] top-[147px] left-[103px] bg-white rounded-[36.38px]">
                  <img
                    className="absolute w-11 h-11 top-[15px] left-[15px]"
                    alt="Dropbox"
                    src="https://c.animaapp.com/XtGaFmLr/img/dropbox-1.svg"
                  />
                </div>

                <div className="absolute w-[73px] h-[73px] top-[380px] left-[255px] bg-white rounded-[36.38px]">
                  <img
                    className="absolute w-11 h-11 top-[15px] left-[15px]"
                    alt="Google calendar"
                    src="https://c.animaapp.com/XtGaFmLr/img/google-calendar-1.svg"
                  />
                </div>

                <div className="absolute w-[73px] h-[73px] top-0 left-[252px] bg-white rounded-[36.38px]">
                  <img
                    className="absolute w-11 h-11 top-[15px] left-[15px]"
                    alt="Gmail"
                    src="https://c.animaapp.com/XtGaFmLr/img/gmail-1.svg"
                  />
                </div>

                <div className="absolute w-[104px] h-[104px] top-[227px] left-[238px] bg-white rounded-[51.96px]" />

                <img
                  className="absolute w-[51px] h-[39px] top-[263px] left-[265px]"
                  alt="Group"
                  src="https://c.animaapp.com/XtGaFmLr/img/group@2x.png"
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-[60px] relative flex-1 grow">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] font-header-h1 font-[number:var(--header-h1-font-weight)] text-white text-[length:var(--header-h1-font-size)] tracking-[var(--header-h1-letter-spacing)] leading-[var(--header-h1-line-height)] [font-style:var(--header-h1-font-style)]">
                  Work with Your Favorite Apps Using Vendora
                </p>

                <p className="relative self-stretch font-paragraph-p2-regular font-[number:var(--paragraph-p2-regular-font-weight)] text-white text-[length:var(--paragraph-p2-regular-font-size)] tracking-[var(--paragraph-p2-regular-letter-spacing)] leading-[var(--paragraph-p2-regular-line-height)] [font-style:var(--paragraph-p2-regular-font-style)]">
                  Vendora teams up with your favorite software. Integrate with
                  over 1000+ apps with Zapier to have all the tools you need for
                  your project success.
                </p>
              </div>

              <button className="all-[unset] box-border px-10 py-5 bg-[#4f9cf9] inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] rounded-lg">
                <div className="relative w-fit mt-[-1.00px] font-paragraph-p2-medium font-[number:var(--paragraph-p2-medium-font-weight)] text-white text-[length:var(--paragraph-p2-medium-font-size)] tracking-[var(--paragraph-p2-medium-letter-spacing)] leading-[var(--paragraph-p2-medium-line-height)] whitespace-nowrap [font-style:var(--paragraph-p2-medium-font-style)]">
                  Read more
                </div>

                <img
                  className="relative flex-[0_0_auto] mr-[-0.50px]"
                  alt="Icon"
                  src="https://c.animaapp.com/XtGaFmLr/img/icon-4.svg"
                />
              </button>
            </div>
          </div>

          <div className="flex w-[1920px] h-[989px] items-start gap-[100px] px-[220px] py-[140px] absolute top-[1953px] left-0 bg-[#212529] rounded-[40px]">
            <img
              className="h-[923px] top-[13px] absolute w-[1920px] left-0"
              alt="Element"
              src="https://c.animaapp.com/XtGaFmLr/img/element-2.png"
            />

            <div className="flex items-start gap-[60px] flex-1 grow mb-[-29.00px] flex-col relative">
              <div className="flex flex-col items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-7xl text-center tracking-[-7.20px] leading-[normal]">
                  It’s easy to start selling
                </p>

                <div className="relative w-[725px] h-[627px]">
                  <div className="absolute w-[346px] h-[500px] top-0 left-0 bg-[#d9d9d9] rounded-[20px]" />

                  <div className="absolute w-[346px] h-[500px] top-[127px] left-[379px] bg-[#d9d9d9] rounded-[20px]" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute w-[637px] h-[462px] top-[2335px] left-[1071px]">
            <div className="absolute w-52 h-[69px] top-[393px] left-[75px] bg-white rounded-[50px]">
              <div className="absolute top-5 left-6 [font-family:'Inter',Helvetica] font-light text-[#212529] text-2xl text-center tracking-[-0.48px] leading-[normal]">
                Take your shot
              </div>
            </div>

            <div className="absolute top-[21px] left-[3px] [font-family:'Inter',Helvetica] font-normal text-[#ffe492] text-4xl text-center tracking-[-0.72px] leading-[normal]">
              01
            </div>

            <div className="top-[125px] absolute left-0 [font-family:'Inter',Helvetica] font-normal text-[#ffe492] text-4xl text-center tracking-[-0.72px] leading-[normal]">
              02
            </div>

            <div className="top-[242px] absolute left-0 [font-family:'Inter',Helvetica] font-normal text-[#ffe492] text-4xl text-center tracking-[-0.72px] leading-[normal]">
              03
            </div>

            <div className="absolute w-[554px] h-[303px] top-0 left-[75px]">
              <div className="absolute w-[556px] h-[77px] top-0 left-0">
                <div className="absolute w-[554px] h-0.5 top-[75px] left-0 bg-[#d9d9d9]" />

                <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-white text-[54px] text-center tracking-[-1.08px] leading-[normal]">
                  Add your first product
                </div>
              </div>

              <div className="absolute w-[556px] h-[76px] top-[114px] left-0">
                <div className="top-[74px] absolute w-[554px] h-0.5 left-0 bg-[#d9d9d9]" />

                <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-white text-[54px] text-center tracking-[-1.08px] leading-[normal]">
                  Customize your store
                </div>
              </div>

              <div className="absolute w-[556px] h-[72px] top-[231px] left-0">
                <div className="top-[70px] absolute w-[554px] h-0.5 left-0 bg-[#d9d9d9]" />

                <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-white text-[54px] text-center tracking-[-1.08px] leading-[normal]">
                  Set up payments
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-[1920px] items-center justify-center gap-[200px] pt-[140px] pb-8 px-[220px] absolute top-[2871px] left-0 bg-[#043873] rounded-[40px]">
            <div className="inline-flex items-center gap-10 flex-[0_0_auto] flex-col relative">
              <div className="inline-flex flex-col items-center gap-6 relative flex-[0_0_auto]">
                <div className="w-[608px] font-[number:var(--header-h1-font-weight)] text-[length:var(--header-h1-font-size)] text-center tracking-[var(--header-h1-letter-spacing)] leading-[var(--header-h1-line-height)] relative mt-[-1.00px] font-header-h1 text-white [font-style:var(--header-h1-font-style)]">
                  Try Vendora today
                </div>

                <p className="relative w-[550px] font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-white text-[length:var(--paragraph-p1-regular-font-size)] text-center tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]">
                  Get started for free. <br />
                  Add your whole team as your needs grow.
                </p>
              </div>

              <div className="inline-flex items-center justify-center gap-2.5 px-10 py-5 relative flex-[0_0_auto] bg-[#4f9cf9] rounded-[10px]">
                <div className="mt-[-1.00px] text-[length:var(--paragraph-p3-medium-font-size)] tracking-[var(--paragraph-p3-medium-letter-spacing)] leading-[var(--paragraph-p3-medium-line-height)] relative w-fit font-paragraph-p3-medium font-[number:var(--paragraph-p3-medium-font-weight)] text-white whitespace-nowrap [font-style:var(--paragraph-p3-medium-font-style)]">
                  Try Vendora free
                </div>

                <img
                  className="relative flex-[0_0_auto] mr-[-0.50px]"
                  alt="Icon"
                  src="https://c.animaapp.com/XtGaFmLr/img/icon-4.svg"
                />
              </div>

              <p className="relative w-[367px] font-paragraph-p1-regular font-[number:var(--paragraph-p1-regular-font-weight)] text-white text-[length:var(--paragraph-p1-regular-font-size)] text-center tracking-[var(--paragraph-p1-regular-letter-spacing)] leading-[var(--paragraph-p1-regular-line-height)] [font-style:var(--paragraph-p1-regular-font-style)]">
                On a big team? Contact sales
              </p>

              <img
                className="relative flex-[0_0_auto]"
                alt="App icon"
                src="https://c.animaapp.com/XtGaFmLr/img/app-icon.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero
