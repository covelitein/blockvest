import React from 'react'

const Footer = () => {
  return (
    <footer className="min-h-[25rem] border-t-[1px] border-[#333] mt-11">
      <div className="w-11/12 mx-auto flex space-x-3 max-lg:flex-col">
        <div className="py-6 px-3 w-1/5 max-lg:w-full">
          <h3 className="text-xl font-bold text-[#ffa500] font-[poppins] mt-3">
            OUR COMPANY
          </h3>
          <ul className="flex flex-col space-y-4 mt-6 text-[#999] font-[poppins] text-sm">
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES</li>
            <li>PLANS</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="py-6 px-3 w-1/5 max-lg:w-full">
          <h3 className="text-xl font-bold text-[#ffa500] font-[poppins] mt-3">
            HELP & SUPPORT
          </h3>
          <ul className="flex flex-col space-y-4 mt-6 text-[#999] font-[poppins] text-sm">
            <li>FAQ</li>
            <li>LOGIN</li>
            <li>REGISTER</li>
            <li>TERMS OF SERVICE</li>
          </ul>
        </div>
        <div className="py-6 px-3 w-1/5 max-lg:w-full">
          <h3 className="text-xl font-bold text-[#ffa500] font-[poppins] mt-3">
            CONTACT
          </h3>
          <ul className="flex flex-col space-y-4 mt-6 text-[#999] font-[poppins] text-sm">
            <li>john@doe129.net</li>
            <li>+44 20 7123 4567</li>
            <li>123 Main St Apt 4B Anytown</li>
            <li>MON-FRI &rarr; 10PM</li>
          </ul>
        </div>
        <div className="px-3 flex-1 max-lg:w-full">
          <div className="flex flex-col mt-8">
            <div className="flex items-center justify-around mb-4 mt-3">
              <div className="flex-col flex space-y-5">
                <div>
                  <h3 className="text-2xl text-[#ffa500] font-[bellota] font-bold">
                    $97.50B
                  </h3>
                  <p className="text-[#999] font-[poppins] text-sm uppercase">
                    Market cap
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl text-[#ffa500] font-[bellota] font-bold">
                    200k
                  </h3>
                  <p className="text-[#999] font-[poppins] text-sm uppercase">
                    ACTIVE ACCOUNTS
                  </p>
                </div>
              </div>
              <div className="flex-col flex space-y-5">
                <div>
                  <h3 className="text-2xl text-[#ffa500] font-[bellota] font-bold">
                    $200.3B
                  </h3>
                  <p className="text-[#999] font-[poppins] text-sm uppercase">
                    DAILY TRANSACTIONS
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl text-[#ffa500] font-[bellota] font-bold">
                    100
                  </h3>
                  <p className="text-[#999] font-[poppins] text-sm uppercase">
                    SUPPORTED COUNTRIES
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-1 mt-16 px-5">
        <p className="text-center py-3 text-[#999] text-sm font-[poppins]">
          &copy;Copyright <span className="text-[#ffa500]">Blockvest</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer