"use client"

import { Check, MessageSquare, Menu, X, Database, Gift, UserRound } from "lucide-react"
import { useState } from "react"
import { MdArrowForwardIos } from "react-icons/md";
import { IoMdNotifications } from "react-icons/io";
import { FaAngleDown, FaCircleCheck, FaDiscord, FaStar } from "react-icons/fa6";
import { LuFileDown } from "react-icons/lu";
import { IoCube } from "react-icons/io5";
import { FaInfinity } from "react-icons/fa6";


const plans = [
    {
        type: "Public",
        name: "Free",
        color: "#a4a3a5",
        price: "Free",
        buttonName: "CURRENT PLAN",
        isPopular: false,
        featureHeading: "Everything you need to start",
        features: [
            "Access to Help and Help FAQ",
            "Monthly Public Car Updates",
            "Access to 100+ Public Servers",
        ],
    },
    {
        type: "Public+",
        name: "Paid",
        color: "#a4a3a5",
        price: "3.99",
        buttonName: "SUBSCRIBE",
        isPopular: false,
        featureHeading: "Get a taste",
        features: [
            "Access to Help and Help FAQ",
            "Monthly Public Car Updates",
            "Access to 100+ Public Servers",
            "VIP spot for Tuned Cars on Public Servers",
            'VIP-Only "Public Pack" Servers',
            "VIP Alternative and DnR Servers",
            "In-game Badges",
        ],

    },
    {
        type: "Midnight",
        name: "Paid",
        color: "#f7931e",
        price: "7.99",
        buttonName: "FREE 7-DAYS TRIAL",
        isPopular: false,
        featureHeading: "Amplify your experience",
        features: [
            "Access to Help and Help FAQ",
            "Monthly Public Car Updates",
            "Access to 100+ Public Servers",
            "VIP spot for Tuned Cars on Public Servers",
            'VIP-Only "Public Pack" Servers',
            "VIP Alternative and DnR Servers",
            "In-game Badges",
            "Spec Cars in Spec Servers",
            "JDM, VTEC, and Manual Servers",
            "Complete Server Access",
            "Community Voting Access",
            "Early Access to Exclusive Content",
        ],
    },
    {
        type: "Underground",
        name: "Paid",
        color: "#ff005c",
        price: "12.99",
        buttonName: "SUBSCRIBE",
        isPopular: true,
        featureHeading: "Reach new limits",
        features: [
            "Access to Help and Help FAQ",
            "Monthly Public Car Updates",
            "Access to 100+ Public Servers",
            "VIP spot for Tuned Cars on Public Servers",
            'VIP-Only "Public Pack" Servers',
            "VIP Alternative and DnR Servers",
            "In-game Badges",
            "Spec Cars in Spec Servers",
            "JDM, VTEC, and Manual Servers",
            "Complete Server Access",
            "Community Voting Access",
            "Early Access to Exclusive Content",
            "Exclusive access to new Maps",
            "Exclusive access to Spec cars on Public Servers",
            "Three new Spec cars a month",
        ],

    },
];

const feature = [

    { name: "Features", optionOne: "Everything you need to start", optionTwo: "Get a taste", optionThree: "Amplify your experience", optionFour: "Reach new limits" },
    { name: "Access to Hesi and Hesi FAQ", optionOne: true, optionTwo: true, optionThree: true, optionFour: true },
    { name: "Monthly Public Car Updates", optionOne: true, optionTwo: true, optionThree: true, optionFour: true },
    { name: "Access to 100+ Public Servers", optionOne: true, optionTwo: true, optionThree: true, optionFour: true },
    { name: "VIP slots for TruckCars on Public Servers", optionOne: false, optionTwo: true, optionThree: true, optionFour: true },
    { name: "VIP Only Public Pack Servers", optionOne: false, optionTwo: true, optionThree: true, optionFour: true },
    { name: "VIP Alternative and DnR Servers", optionOne: false, optionTwo: true, optionThree: true, optionFour: true },
    { name: "In-game Badges", optionOne: false, optionTwo: true, optionThree: true, optionFour: true },
    { name: "Spec Cars in Spec Servers", optionOne: false, optionTwo: false, optionThree: true, optionFour: false },
    { name: "JDM, VTEC and Manual servers", optionOne: false, optionTwo: false, optionThree: true, optionFour: true },

    { name: "Complete Server Access", optionOne: false, optionTwo: false, optionThree: false, optionFour: true },
    { name: "Community Voting Access", optionOne: false, optionTwo: false, optionThree: false, optionFour: true },
    { name: "Early Access to Exclusive Content", optionOne: false, optionTwo: false, optionThree: false, optionFour: true },
    { name: "Exclusive access to Hesi Map", optionOne: false, optionTwo: false, optionThree: false, optionFour: true },
    { name: "Exclusive access to Spec cars on Public", optionOne: false, optionTwo: false, optionThree: false, optionFour: true },
    { name: "Three new Spec cars a month", optionOne: false, optionTwo: false, optionThree: false, optionFour: false },

]

const Server = [
    { name: "Server Hosting", optionOne: "", optionTwo: "", optionThree: "", optionFour: "" },
    { name: "Server Creation", optionOne: true, optionTwo: true, optionThree: true, optionFour: true },
    { name: "Servers per day", optionOne: 1, optionTwo: 0, optionThree: 0, optionFour: 0 },
    { name: "Server Queue", optionOne: true, optionTwo: true, optionThree: false, optionFour: false },
    { name: "Templates Limit", optionOne: false, optionTwo: true, optionThree: false, optionFour: false },
    { name: "Server Config", optionOne: false, optionTwo: "Limited", optionThree: "Full", optionFour: "Full" },
    { name: "Max. Players", optionOne: 4, optionTwo: 5, optionThree: 10, optionFour: 0 },
    { name: "Session Time", optionOne: "1hr", optionTwo: "1hr", optionThree: "6hr", optionFour: 0 },
]

export default function Component() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="min-h-screen font-inter px-2 py-2 bg-[#08060a] text-brand-font_primary">
            {/* Header */}
            <header className="border border-brand-border_color rounded-md p-2">
                <div className="flex items-center justify-between max-w-[1920px] mx-auto">
                    <div className="flex items-center gap-3">
                        <div className="flex  font-roboto  gap-2 bg-brand-bg_secoundary rounded-md px-4 py-2">
                            {/* <img src={"/no-hesi-icon.png"} /> */}
                            {/* Join */}
                        </div>
                        <nav className="flex gap-2 ">
                            <a href="#" className="hover:text-gray-300 transition-colors p-2">
                                Get started
                            </a>
                            <a href="#" className="hover:text-gray-300 transition-colors p-2">
                                Shop
                            </a>
                            <a href="#" className="hover:text-gray-300 transition-colors p-2">
                                About us
                            </a>
                            <a href="#" className="hover:text-gray-300 transition-colors p-2">
                                News
                            </a>
                            <a href="#" className="hover:text-gray-300 transition-colors p-2">
                                Contacts
                            </a>
                            <a href="#" className="hover:text-gray-300 transition-colors p-2">
                                FAQ
                            </a>
                        </nav>
                    </div>

                    <div className="hidden lg:flex items-center gap-2 space-x-2 xl:space-x-4">
                        <div className="flex gap-1 items-center justify-center bg-brand-bg_secoundary p-1 rounded-md">
                            <button className="border border-brand-border_color px-4 py-2 items-center flex gap-2 rounded-md">
                                <div className="w-4 h-4 bg-[#590a03]  rounded-full flex justify-center items-center">
                                    <div className="w-2 h-2 bg-[#ed1e02] rounded-full"></div>
                                </div>
                                <span>Live</span>
                            </button>
                            <button className="border border-brand-border_color px-4 py-2 items-center flex gap-2 rounded-md">
                                <FaStar className="text-brand-icons_color" />
                                <span className=" ">Subscriptions</span>
                            </button>
                            <button className="border border-brand-border_color px-4 py-2 items-center flex gap-2 rounded-md">
                                <Database size={20} className="text-brand-icons_color" />
                                <span className=" ">Servers</span>
                            </button>
                            <button className="border border-brand-border_color px-4 py-2 items-center flex gap-2 rounded-md">
                                <LuFileDown size={20} className="text-brand-icons_color" />
                                <span className=" ">Download Launcher</span>
                            </button>
                        </div>
                        <div className="flex gap-1 items-center justify-center">
                            <button className="border border-brand-border_color p-[11px] items-center flex gap-2 rounded-md">
                                <IoMdNotifications size={20} className="text-brand-icons_color" />
                            </button>
                            <button className="bg-[#5a008d]  px-4 py-2 items-center flex gap-2 rounded-md">
                                <img src="/navImage.png" />
                                <span >JohnDoe_911</span>
                                <FaAngleDown />
                            </button>
                        </div>

                    </div>

                    {/* Mobile Menu Button */}
                    <button variant="ghost" size="sm" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
                        <nav className="flex flex-col space-y-3 text-sm">
                            <a href="#" className="hover:text-gray-300">
                                Get started
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                Shop
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                About us
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                News
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                Contacts
                            </a>
                            <a href="#" className="hover:text-gray-300">
                                FAQ
                            </a>
                            <div className="flex items-center space-x-2 pt-2">
                                <div className="w-2 h-2 bg-[#ed1e02] rounded-full"></div>
                                <span>Live</span>
                            </div>
                            <button className="bg-[#8800f0] hover:bg-[#6b1eb5] text-white mt-4">SUBSCRIBE VIP</button>
                        </nav>
                    </div>
                )}
            </header>

            {/* Hero Section */}
            <section className="text-center relative pt-8 px-4 ">
                {/* Gradient */}
                <div className="w-full absolute top-0 h-[100vh] flex justify-center items-center left-0">
                    <section className="flex relative justify-center items-center h-full w-full max-w-lg overflow-visible">
                        <div className="absolute  w-[500px] h-[500px] rounded-[500px] bg-[radial-gradient(circle,_#FF8126_0%,_transparent_70%)] blur-2xl opacity-30" style={{ transform: "translate(120px,50px)" }}></div>
                        <div className="absolute translate-8 top[130px] left[230px] w-[500px] h-[500px] bg-[radial-gradient(circle,_#7B61FF_0%,_transparent_70%)] blur-2xl opacity-20 rounded-[500px]" style={{ transform: "translate(-120px,50px)" }}></div>
                        <div className="absolute top[180px] right[180px] w-[500px] h-[500px] bg-[radial-gradient(circle,_#DD0355_0%,_transparent_70%)] blur-2xl opacity-20 rounded-[500px]" style={{ transform: "translate(0px,-70px)" }}></div>
                    </section>
                </div>

                <div className="max-w-[1920px] mx-auto">
                    <h1 className="text-3xl mt-6 font-roboto sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 lg:mb-6 leading-tight">
                        JOIN <span className="text-[#dd0355]">00,000</span> OTHERS
                        <br />
                        <span className="pt-4">ON NO HESI VIP</span>
                    </h1>
                    <p className=" font-roboto pt-4 text-base sm:text-lg xl:text-xl mb-6 lg:mb-8">
                        Enhance your No Hesi experience with VIP
                    </p>

                    <div className="flex justify-center mb-4 lg:mb-6">
                        <div className="relative rounded-lg p-1 flex flex-col sm:flex-row w-full max-w-sm sm:max-w-none sm:w-auto bg-white/10 backdrop-blur-md border border-white/20">
                            <button className="bg-white text-black hover:bg-gray-200 px-12 py-2 rounded-md font-medium">Monthly</button>
                            <button variant="ghost" className="px-12 py-2 flex items-center justify-center font-medium">Annually</button>
                            <div className="ml-2 absolute -top-2 right-1 bg-[#6aff67] text-black text-xs rounded-full px-1 py-0.5 font-medium" style={{ borderRadius: "100px" }}>SAVE 20%</div>
                        </div>
                    </div>

                    <p className="text-sm flex justify-center items-center gap-2">
                        Can't choose ?{" "}
                        <a href="#" className="flex gap-1 items-center">
                            Compare plans  <MdArrowForwardIos />
                        </a>
                    </p>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="p-2 flex flex-wrap justify-center gap-4">
                {plans.map((data, index) =>
                    <div key={index} className={`flex flex-col rounded-2xl w-full max-w-sm flex-1`}>
                        <div className={`${data.isPopular ? "bg-brand-pink" : ""} text-white rounded-2xl flex flex-col flex-1`}>
                            <div className="px-4 h-[30px] flex items-center text-sm font-bold p-2">
                                {data.isPopular && "MOST POPULAR"}
                            </div>
                            <div className={`border-brand-border_color relative flex-1 ${index == 1 || index==2 ? "bg-[#0005]" : "bg-brand-black"} rounded-2xl border flex flex-col flex-1 p-4 gap-4`}>

                                {index == 1 && <div className="absolute w-full z-10 h-full top-0 left-0 rounded-2xl" style={{
                                    background: `
      linear-gradient(0deg, rgba(8, 6, 10, 0.44), rgba(8, 6, 10, 0.44)),
      radial-gradient(160.5% 100% at 50% 0%, rgba(8, 6, 10, 0.05) 25.18%, rgba(231, 223, 216, 0.05) 100%)
    `
                                }}></div>}
                                {index == 2 && <div className="absolute w-full z-10 h-full top-0 left-0 rounded-2xl bg-[radial-gradient(160.5%_100%_at_50%_0%,rgba(8,6,10,0.05)_25.18%,rgba(255,129,38,0.05)_100%)]"></div>}
                                {index == 3 && <div className="absolute w-full z-10 h-full top-0 left-0 rounded-2xl bg-[radial-gradient(160.5%_100%_at_50%_0%,rgba(8,6,10,0.22)_25.18%,rgba(254,44,85,0.22)_100%)]"></div>}

                                <div className="text-xs z-20 sm:text-sm mb-2 flex gap-1 italic items-center">
                                    <IoCube color={data.color} style={{ filter: data.name !== "Free" && `drop-shadow(0 0 6px ${data.color})` }} /> TIER {index + 1}
                                </div>

                                <div className="flex z-20 flex-col gap-2">
                                    <h3 className="text-lg lg:text-xl font-semibold mb-2">{data.type}</h3>
                                    {data.price === "Free" ? (
                                        <div className="text-2xl lg:text-3xl font-bold">Free</div>
                                    ) : (
                                        <div className="text-2xl lg:text-3xl font-bold">
                                            ${data.price}<span className="font-medium text-lg">/month</span>
                                        </div>
                                    )}
                                </div>

                                <div className="flex z-20 flex-col gap-2">
                                    <button
                                        className={`w-full ${data.buttonName === "CURRENT PLAN"
                                            ? "bg-brand-selected_card text-brand-selected_card_text"
                                            : "bg-white text-black"
                                            } rounded-md py-3 font-bold mt-2 italic text-lg`}
                                    >
                                        {data.buttonName}
                                    </button>
                                    <button
                                        variant="outline"
                                        className="w-full underline flex justify-center items-center gap-1 bg-transparent border-gray-600 text-brand-selected_card_text text-sm"
                                    >
                                        <Gift size={16} /> Send as a Gift
                                    </button>
                                </div>

                                <div className="flex z-20 flex-col gap-5 flex-1">
                                    {data.features.map((feature, i) => (
                                        <div key={i} className="flex items-center space-x-2 text-sm">
                                            <FaCircleCheck className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>


            {/* Features Comparison Table */}
            <section className="pb-12 lg:pb-16 mt-10">
                <div className="max-w-[1920px] mx-auto">
                    <div className="rounded-lg overflow-x-auto">
                        <div className="min-w-[800px]">
                            <div className="grid grid-cols-5 gap-4 p-6 border-b border-gray-700">
                                <div className="font-semibold text-sm xl:text-base"></div>
                                {plans.map((data, index) =>
                                    <div key={index} className="text-center flex items-center justify-center flex-col gap-2">
                                        <div className="text-xs sm:text-sm mb-2 flex gap-1 italic items-center">
                                            <IoCube color={data.color} style={{ filter: data.name !== "Free" && `drop-shadow(0 0 6px ${data.color})` }} /> TIER {index + 1}
                                        </div>
                                        <button className={`w-full ${data.buttonName === "CURRENT PLAN" ? "bg-brand-selected_card text-brand-selected_card_text" : "bg-white text-black"} rounded-md py-3 font-bold mt-2 italic text-lg`} >
                                            {data.buttonName}
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="divide-y divide-gray-700">
                                {feature.map((feature, index) => (
                                    <div key={index} className="grid grid-cols-5 gap-4 p-4 text-xs xl:text-sm">
                                        <div>{feature.name}</div>
                                        <div className="text-center">
                                            {feature.name == "Features" ? feature.optionOne : feature.optionOne && <Check className="w-4 h-4 mx-auto" />}
                                        </div>
                                        <div className="text-center">
                                            {feature.name == "Features" ? feature.optionTwo : feature.optionTwo && <Check className="w-4 h-4 mx-auto" />}
                                        </div>
                                        <div className="text-center">
                                            {feature.name == "Features" ? feature.optionThree : feature.optionThree && <Check className="w-4 h-4 mx-auto" />}
                                        </div>
                                        <div className="text-center">
                                            {feature.name == "Features" ? feature.optionFour : feature.optionFour && <Check className="w-4 h-4 mx-auto" />}
                                        </div>
                                    </div>
                                ))}
                                <div className="divide-y divide-gray-700"></div>
                            </div>

                            <div className="divide-y divide-gray-700">
                                {Server.map((server, index) => (
                                    <div key={index} className="grid grid-cols-5 gap-4 p-4 text-xs xl:text-sm _hover:bg-gray-200 cursor-pointer">
                                        <div className={`${server.name == "Server Hosting" && "font-bold"}`}>{server.name}</div>
                                        <div className="text-center flex justify-center items-center font-bold italic">
                                            {(server.optionOne == 0 && server.optionOne !== "") ? <FaInfinity /> : server.optionOne == false ? null : server.optionOne == true ? <Check className="w-4 h-4 mx-auto" /> : server.optionOne}
                                        </div>
                                        <div className="text-center flex justify-center items-center font-bold italic">
                                            {(server.optionTwo == 0 && server.optionTwo !== "") ? <FaInfinity /> : server.optionTwo == false ? null : server.optionTwo == true ? <Check className="w-4 h-4 mx-auto" /> : server.optionTwo}
                                        </div>
                                        <div className="text-center flex justify-center items-center font-bold italic">
                                            {(server.optionThree == 0 && server.optionThree !== "") ? <FaInfinity /> : server.optionThree == false ? null : server.optionThree == true ? <Check className="w-4 h-4 mx-auto" /> : server.optionThree}
                                        </div>
                                        <div className="text-center flex justify-center items-center font-bold italic">
                                            {(server.optionFour == 0 && server.optionFour !== "") ? <FaInfinity /> : server.optionFour == false ? null : server.optionFour == true ? <Check className="w-4 h-4 mx-auto" /> : server.optionFour}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="px-4 sm:px-6 py-12 lg:py-16">
                <div className="max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
                            <span className="">
                                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                    QUESTIONS?
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                    NO PROBLEM.
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                    WE HAVE THE
                                </span>
                                <br />
                                <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                                    ANSWERS
                                </span>
                            </span>
                        </h2>

                        <p className="text-lg sm:text-xl text-gray-400 mb-6 lg:mb-8">Just ping us, feel free!</p>
                        <p className="text-gray-400 mb-6 lg:mb-8 text-sm sm:text-base">
                            Or read our FAQ. Who knows,
                            <br className="hidden sm:block" />
                            maybe you can find answer
                            <br className="hidden sm:block" />
                            by yourself
                        </p>
                        <button
                            variant="outline"
                            className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
                        >
                            GO TO FAQ
                        </button>
                    </div>

                    <div className="bg-[#0d0b0f] border border-brand-border_color rounded-lg p-6 ">
                        <h3 className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8">Contact us</h3>
                        <div className="space-y-4 lg:space-y-6">
                            <div>
                                <label className="block text-sm  mb-2">Name</label>
                                <div className="relative bg-[#121014] border border-brand-border_color gap-2 text-white rounded-md p-2 flex justify-center">
                                    <div className="px-1 flex justify-center items-center"><UserRound size={26} className=" " /></div>
                                    <input
                                        placeholder="John Doe"
                                        className=" placeholder-gray-400 pl-2 h-12 bg-[#0000] outline-none border-none flex-1 "
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm  mb-2">Discord username</label>
                                <div className="relative bg-[#121014] border border-brand-border_color gap-2 text-white rounded-md p-2 flex justify-center">
                                    <div className="px-1 flex justify-center items-center"><FaDiscord size={26} className=" " /></div>
                                    <input
                                        placeholder="@fluffymonkey"
                                        className=" placeholder-gray-400 pl-2 h-12 bg-[#0000] outline-none border-none flex-1 "
                                    />
                                </div>

                            </div>

                            <div>
                                <label className="block text-sm  mb-2">Your question</label>
                                <div className="relative bg-[#121014] border border-brand-border_color gap-2 text-white rounded-md p-2 flex justify-center">
                                    <div className="px-1 flex justify-start items-start"><MessageSquare size={26} className=" " /></div>
                                    <textarea
                                        placeholder="Drop some lines here"
                                        className="bg-[#121014] flex-1 border-none text-white placeholder-gray-400 outline-none min-h-[120px] resize-none"
                                    />
                                </div>
                            </div>

                            <button className="w-full bg-[#8800f0] hover:bg-[#6b1eb5] text-white py-3 h-12 text-sm sm:text-base font-semibold">
                                SEND
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
