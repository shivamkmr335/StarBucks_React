import React from "react";

function GettingStarted() {
    return (
        <section className="my-20 xl:px-32">
        <div className="grid justify-items-center">
            <h1 className="text-2xl font-semibold">Getting started is easy</h1>
            <div className="mx-8 my-6">
                <p className="max-w-xl text-center text-base">Earn Stars and get rewarded in a few easy steps.</p>
            </div>
        </div>
        <div className=" md:flex md:justify-between px-8">
            <div className="flex align-top md:grid md:justify-items-center p-4">
                <img className="w-12 h-12 mb-4" src="https://s2.im.ge/2021/06/28/rgiuy.webp" alt=""></img>
                <div className="md:grid md:justify-items-center ml-3">
                    <h3 className="text-lg font-semibold">Create an account</h3>
                    <p className="text-sm mt-2 md:max-w-xs md:text-center md:font-medium">To get started, <span className="underline text-green-700">join now</span>. You can also <span className="underline text-green-700">join in the app</span> to get access to the full range of Starbucks® Rewards benefits.</p>
                    
                </div>
            </div>
            <div className="flex align-top md:grid md:justify-items-center p-4">
                <img className="w-12 h-12 mb-4" src="https://s2.im.ge/2021/06/28/rgUfJ.webp" alt=""></img>
                <div className="md:grid md:justify-items-center ml-3">
                    <h3 className="text-lg font-semibold">Order and pay how you’d like</h3>
                    <p className="text-sm mt-2 md:max-w-xs md:text-center md:font-medium">Use cash, credit/debit card or save some time and pay right through the app. You’ll collect Stars all ways. Learn how</p>
                    
                </div>
            </div>
            <div className="flex align-top md:grid md:justify-items-center p-4">
                <img className="w-12 h-12 mb-2" src="https://s2.im.ge/2021/06/28/rgLPa.webp" alt=""></img>
                <div className="md:grid md:justify-items-center ml-3">
                    <h3 className="text-lg font-semibold">Earn Stars, get Rewards</h3>
                    <p className="text-sm mt-2 md:max-w-xs md:text-center md:font-medium">As you earn Stars, you can redeem them for Rewards—like free food, drinks, and more. Start redeeming with as little as 25 Stars!</p>
                    
                </div>
            </div>
        </div>
    </section>

    );
  }
  
  export default GettingStarted;