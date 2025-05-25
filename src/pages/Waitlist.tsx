
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Waitlist = () => {
  useEffect(() => {
    // Add the Brevo form scripts and styles
    const style = document.createElement('style');
    style.textContent = `
      @font-face {
        font-display: block;
        font-family: Roboto;
        src: url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
      }

      @font-face {
        font-display: fallback;
        font-family: Roboto;
        font-weight: 600;
        src: url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
      }

      @font-face {
        font-display: fallback;
        font-family: Roboto;
        font-weight: 700;
        src: url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.brevo.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
      }

      #sib-container input:-ms-input-placeholder {
        text-align: left;
        font-family: Helvetica, sans-serif;
        color: #c0ccda;
      }

      #sib-container input::placeholder {
        text-align: left;
        font-family: Helvetica, sans-serif;
        color: #c0ccda;
      }

      #sib-container textarea::placeholder {
        text-align: left;
        font-family: Helvetica, sans-serif;
        color: #c0ccda;
      }

      #sib-container a {
        text-decoration: underline;
        color: #2BB2FC;
      }
    `;
    document.head.appendChild(style);

    // Add Brevo styles link
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://sibforms.com/forms/end-form/build/sib-styles.css';
    document.head.appendChild(link);

    // Add Brevo script
    const script = document.createElement('script');
    script.defer = true;
    script.src = 'https://sibforms.com/forms/end-form/build/main.js';
    document.body.appendChild(script);

    // Add global variables
    window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
    window.LOCALE = 'en';
    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
    window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";
    window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
    window.translation = {
      common: {
        selectedList: '{quantity} list selected',
        selectedLists: '{quantity} lists selected',
        selectedOption: '{quantity} selected',
        selectedOptions: '{quantity} selected',
      }
    };
    window.AUTOHIDE = Boolean(0);

    return () => {
      // Cleanup on unmount
      document.head.removeChild(style);
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-24 bg-gradient-to-b from-white to-sirdash-50 dark:from-gray-900 dark:to-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8">
                <Link 
                  to="/" 
                  className="inline-flex items-center text-sirdash-600 hover:text-sirdash-700 mb-6"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
                
                <div className="text-center mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                    Join the <span className="text-gradient">SirDash.ai</span> Revolution
                  </h1>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                    Be among the first to experience the future of data analytics. 
                    Get early access to our AI-powered platform that transforms natural language into powerful insights.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="w-full max-w-2xl">
                  <div className="sib-form" style={{textAlign: 'center', backgroundColor: '#EFF2F7'}}>
                    <div id="sib-form-container" className="sib-form-container">
                      <div id="error-message" className="sib-form-message-panel" style={{fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949', maxWidth: '540px'}}>
                        <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                          <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                            <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z" />
                          </svg>
                          <span className="sib-form-message-panel__inner-text">
                            Your subscription could not be saved. Please try again.
                          </span>
                        </div>
                      </div>
                      <div></div>
                      <div id="success-message" className="sib-form-message-panel" style={{fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#085229', backgroundColor: '#e7faf0', borderRadius: '3px', borderColor: '#13ce66', maxWidth: '540px'}}>
                        <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                          <svg viewBox="0 0 512 512" className="sib-icon sib-notification__icon">
                            <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z" />
                          </svg>
                          <span className="sib-form-message-panel__inner-text">
                            Your subscription has been successful.
                          </span>
                        </div>
                      </div>
                      <div></div>
                      <div id="sib-container" className="sib-container--large sib-container--vertical" style={{textAlign: 'center', backgroundColor: 'rgba(255,255,255,1)', maxWidth: '540px', borderRadius: '3px', borderWidth: '1px', borderColor: '#C0CCD9', borderStyle: 'solid', direction: 'ltr'}}>
                        <form id="sib-form" method="POST" action="https://sibforms.com/serve/MUIFAEmiaVBmmLsTThaRwJwdM6mtV8UNVRJCbpyW-6mzA7gO1HJJ01T91TqYLlfWtz1smxLo6i5mumwSYDl_BNK7_jdx-VZQEs41A2VZm2-C16MXrDMuWaeV_wCg6yMBtZlSk3a_tnQgZyeOVu73J4PGgKWjwwxggFFxFy9v6RN6kTUeADJy4hlaegbz8z09AMyXi80wgp6BU2gh" data-type="subscription">
                          <div style={{padding: '8px 0'}}>
                            <div className="sib-form-block" style={{fontSize: '32px', textAlign: 'left', fontWeight: '700', fontFamily: 'Helvetica, sans-serif', color: '#c229c8', backgroundColor: 'transparent', textAlign: 'left'}}>
                              <p>Join our waitinglist&nbsp;</p>
                            </div>
                          </div>
                          <div style={{padding: '8px 0'}}>
                            <div className="sib-form-block" style={{fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#3C4858', backgroundColor: 'transparent', textAlign: 'left'}}>
                              <div className="sib-text-form-block">
                                <p><br /></p>
                              </div>
                            </div>
                          </div>
                          <div style={{padding: '8px 0'}}>
                            <div className="sib-input sib-form-block">
                              <div className="form__entry entry_block">
                                <div className="form__label-row ">
                                  <label className="entry__label" style={{fontWeight: '700', textAlign: 'left', fontSize: '16px', textAlign: 'left', fontWeight: '700', fontFamily: 'Helvetica, sans-serif', color: '#3c4858'}} htmlFor="EMAIL" data-required="*">Enter your email address to join our waiting list</label>

                                  <div className="entry__field">
                                    <input className="input " type="text" id="EMAIL" name="EMAIL" autoComplete="off" placeholder="EMAIL" data-required="true" required />
                                  </div>
                                </div>

                                <label className="entry__error entry__error--primary" style={{fontSize: '16px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#661d1d', backgroundColor: '#ffeded', borderRadius: '3px', borderColor: '#ff4949'}}>
                                </label>
                                <label className="entry__specification" style={{fontSize: '12px', textAlign: 'left', fontFamily: 'Helvetica, sans-serif', color: '#8390A4', textAlign: 'left'}}>
                                  Provide your email address to subscribe. For e.g abc@xyz.com
                                </label>
                              </div>
                            </div>
                          </div>
                          <div style={{padding: '8px 0'}}>
                            <div className="sib-form-block" style={{textAlign: 'left'}}>
                              <button className="sib-form-block__button sib-form-block__button-with-loader" style={{fontSize: '16px', textAlign: 'left', fontWeight: '700', fontFamily: 'Helvetica, sans-serif', color: '#FFFFFF', backgroundColor: '#cf15cf', borderRadius: '3px', borderWidth: '0px'}} form="sib-form" type="submit">
                                <svg className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                                  <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                                </svg>
                                JOIN
                              </button>
                            </div>
                          </div>

                          <input type="text" name="email_address_check" value="" className="input--hidden" />
                          <input type="hidden" name="locale" value="en" />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Waitlist;
