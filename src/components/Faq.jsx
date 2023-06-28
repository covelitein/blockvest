import React from 'react'
import { Accordion } from './subcomponents'

const Faq = () => {
  return (
    <section className="mt-20 pt-4 pb-8">
      <div className="w-11/12 mx-auto">
        <h3 className="font-[bellota] text-[#fff] text-center text-4xl max-sm:text-3xl">
          FA<span className="text-[#ffa500]">QS</span>
        </h3>
        <div className="flex justify-center items-center my-6">
          <div className="w-20 h-[1px] bg-[#ffa500] mx-3 max-sm:mx-1"></div>
          <div className="flex justify-center items-center font-[bellota] text-center text-[#fff] max-sm:text-[0.8rem]">
            Popular questions asked about us
          </div>
          <div className="w-20 h-[1px] bg-[#fff] mx-3 max-sm:mx-1"></div>
        </div>
        <div className="mt-6 mf:px-[8rem]">
          <Accordion
            question={"How do I invest in your site"}
            className={"max-mf:text-[0.9rem]"}
            children={
              "Investing in our platform is a simple process. The first step is to sign up for an account on our website. Once you have an account, navigate to the investment section and choose the investment plan that best suits your needs and budget. <br/> Next, select the payment method you prefer and enter the amount you want to invest. Double-check all of your investment details to make sure everything is correct. Once you're ready, click the 'Invest' button to complete your transaction.<br/> After your investment is confirmed, our team of experts will manage it for you. We'll use our advanced technology and knowledge of the cryptocurrency market to ensure that you get the best possible returns on your investment."
            }
          />
        </div>
        <div className="mt-6 mf:px-[8rem]">
          <Accordion
            question={"How do I invest in your site"}
            className={"max-mf:text-[0.9rem]"}
            children={
              "Investing in our platform is a simple process. The first step is to sign up for an account on our website. Once you have an account, navigate to the investment section and choose the investment plan that best suits your needs and budget. <br/> Next, select the payment method you prefer and enter the amount you want to invest. Double-check all of your investment details to make sure everything is correct. Once you're ready, click the 'Invest' button to complete your transaction.<br/> After your investment is confirmed, our team of experts will manage it for you. We'll use our advanced technology and knowledge of the cryptocurrency market to ensure that you get the best possible returns on your investment."
            }
          />
        </div>
        <div className="mt-6 mf:px-[8rem]">
          <Accordion
            question={"How do I invest in your site"}
            className={"max-mf:text-[0.9rem]"}
            children={
              "Investing in our platform is a simple process. The first step is to sign up for an account on our website. Once you have an account, navigate to the investment section and choose the investment plan that best suits your needs and budget. <br/> Next, select the payment method you prefer and enter the amount you want to invest. Double-check all of your investment details to make sure everything is correct. Once you're ready, click the 'Invest' button to complete your transaction.<br/> After your investment is confirmed, our team of experts will manage it for you. We'll use our advanced technology and knowledge of the cryptocurrency market to ensure that you get the best possible returns on your investment."
            }
          />
        </div>
        <div className="mt-6 mf:px-[8rem]">
          <Accordion
            question={"How do I invest in your site"}
            className={"max-mf:text-[0.9rem]"}
            children={
              "Investing in our platform is a simple process. The first step is to sign up for an account on our website. Once you have an account, navigate to the investment section and choose the investment plan that best suits your needs and budget. <br/> Next, select the payment method you prefer and enter the amount you want to invest. Double-check all of your investment details to make sure everything is correct. Once you're ready, click the 'Invest' button to complete your transaction.<br/> After your investment is confirmed, our team of experts will manage it for you. We'll use our advanced technology and knowledge of the cryptocurrency market to ensure that you get the best possible returns on your investment."
            }
          />
        </div>
      </div>
    </section>
  );
}

export default Faq
