import React from "react";

function CashOrCard() {
    return (
        <section className="bg-background1 py-16 px-6 xl:px-44">
        <div className="grid justify-items-center">
            <h1 className="text-2xl font-semibold">Cash or Card, you earn Stars</h1>
            <p className="max-w-xl text-center text-base">No matter how you pay, you can earn Stars with your morning coffee. Those Stars add up to (really delicious) Rewards.</p>
        </div>

            
        <div className="lg:flex">
            <div className="text-sm w-1/5">
                <span className="text-xl font-semibold">1* per dollar </span><br/>
                Pay as you go
            </div>
            <div className="md:flex">
                <div className="flex py-6 w-full">
                    <img className="w-28 " src="https://s1.im.ge/2021/06/28/rgtP8.png" alt=""></img>
                    <div className="ml-4">
                        <h3 className="font-semibold">Scan and pay seperately</h3>
                        <p className="mt-3 text-sm">Use cash or credit/debit card at the register.</p>
                    </div>
                </div>
                <div className="flex py-6 w-full">
                    <img className="w-28 h-40" src="https://s1.im.ge/2021/06/28/rgykh.png" alt=""></img>
                    <div className="ml-4">
                        <h3 className="font-semibold">Save payment in the app</h3>
                        <p className="mt-3 text-sm">Check-out faster by saving a credit/debit card or PayPal to your account. You’ll be able to order ahead or scan and pay at the register in one step.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="lg:flex">
            <div className="text-sm mt-8 w-3/12">
                <span className="text-xl font-semibold">2* per dollar </span><br/>
                Add funds in the app
            </div>
            <div className="md:flex">
                <div className="flex py-6 w-full">
                    <img className="w-28 h-40" src="https://s1.im.ge/2021/06/28/rgCFM.png" alt=""></img>
                    <div className="ml-4">
                        <h3 className="font-semibold">Preload</h3>
                        <p className="mt-3 text-sm">To save time and earn Stars twice as fast, add money to your digital Starbucks Card using any payment option. Scan and pay in one step or order ahead in the app.</p>
                    </div>
                </div>
                <div className="flex py-6 w-full">
                    <img className="w-28 h-40" src="https://s1.im.ge/2021/06/28/rgxRD.png" alt=""></img>
                    <div className="ml-4">
                        <h3 className="font-semibold">Register your gift card</h3>
                        <p className="mt-3 text-sm">Then use it to pay through the app. You can even consolidate balances from multiple cards in one place.</p>
                    </div>
                </div>
            </div>
        </div>
            <hr/>
        <div className="lg:flex">
            <div className="text-sm mt-8 lg:w-3/12">
                <span className="text-xl font-semibold">Up to 3* per dollar </span><br/>
                Works Starbucks® Rewards Visa® Card
            </div>
            <div>
                <div className="flex py-6 md:w-1/2">
                    <img className="w-28 h-40" src="https://s1.im.ge/2021/06/28/rgE9Y.png" alt=""></img>
                    <div className="ml-4">
                        <h3 className="font-semibold">Earns Stars even faster</h3>
                        <p className="mt-3 text-sm">Earn Stars on all purchases you make with our <a href="https://www.starbucks.com/rewards" target="" className="text-green-700 underline">credit card</a> in and outside of Starbucks. Earn 1 Star per $1 when you digitally preload your Starbucks Card with your Starbucks® Rewards Visa® Card, and earn 2 Stars per $1 when you pay with that preloaded Starbucks Card.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
  }
  
  export default CashOrCard;