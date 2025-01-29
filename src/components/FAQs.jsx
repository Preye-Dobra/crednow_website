/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/exhaustive-deps */

import Accordionitem from "./Accordionitem";
const FAQs = () => {
    const faqData = [
        {
          question: `What Service Do you Offer?`,
          answer: `We offer loan and credit services on our various Apps.`
        },
        {
          question: `How can I get started with Crednow?`,
          answer: 'You can get started by installing our Apps on Playstore.'
        },
        {
          question: `Are your services available online?`,
          answer: `Yes, many of our services are available online for your convenience.`
        },
        {
          question: `How do you ensure the security of my financial information?`,
          answer: `We use advanced security measures to protect your financial information. For more details, please refer to our Privacy Policy.`
        },
    ];

    return (
        <>
        <section className="xui-py-3 xui-container xui-overflow-y-hidden">
            <div className='xui-text-center'>
                <h3 className='xui-lg-font-sz-200 xui-font-sz-150 color-label xui-lg-font-w-400 xui-font-w-600'>Frequently Asked Questions</h3>
                <p className='color-label xui-mt-half xui-lg-w-fluid-50 xui-w-fluid-100 xui-mx-auto xui-line-height-1-half'>Get your answers to common questions: Everything You Need to Know About Our Loans</p>
            </div>
            <Accordionitem data={faqData}/>
        </section>
        </>
    )
};

export default FAQs;