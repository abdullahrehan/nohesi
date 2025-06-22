"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Check, User, MessageSquare, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#08060a] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between max-w-[1920px] mx-auto">
          <div className="flex items-center space-x-4 lg:space-x-8">
            <div className="text-lg sm:text-xl font-bold">NO HESI</div>
            <nav className="hidden lg:flex space-x-6 text-sm xl:text-base">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Get started
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Shop
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                About us
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                News
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Contacts
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          {/* Desktop Header Actions */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-[#ed1e02] rounded-full"></div>
              <span>Live</span>
            </div>
            <Button variant="ghost" size="sm" className="text-xs xl:text-sm">
              Subscriptions
            </Button>
            <Button variant="ghost" size="sm" className="text-xs xl:text-sm">
              Servers
            </Button>
            <Button variant="ghost" size="sm" className="text-xs xl:text-sm hidden xl:block">
              Download launcher
            </Button>
            <Button className="bg-[#8800f0] hover:bg-[#6b1eb5] text-white px-3 xl:px-6 text-xs xl:text-sm">
              SUBSCRIBE VIP
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
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
              <Button className="bg-[#8800f0] hover:bg-[#6b1eb5] text-white mt-4">SUBSCRIBE VIP</Button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="text-center py-8 sm:py-12 lg:py-16 xl:py-20 px-4 sm:px-6">
        <div className="max-w-[1920px] mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 lg:mb-6 leading-tight">
            JOIN <span className="text-[#dd0355]">00,000</span> OTHERS
            <br />
            ON NO HESI VIP
          </h1>
          <p className="text-gray-400 text-base sm:text-lg xl:text-xl mb-6 lg:mb-8">
            Enhance your No Hesi experience with VIP
          </p>

          <div className="flex justify-center mb-4 lg:mb-6">
            <div className="bg-gray-800 rounded-lg p-1 flex flex-col sm:flex-row w-full max-w-sm sm:max-w-none sm:w-auto">
              <Button className="bg-white text-black hover:bg-gray-200 px-4 sm:px-6 mb-1 sm:mb-0">Monthly</Button>
              <Button variant="ghost" className="text-white px-4 sm:px-6 flex items-center justify-center">
                Annual
                <Badge className="ml-2 bg-[#6aff67] text-black text-xs">SAVE 20%</Badge>
              </Button>
            </div>
          </div>

          <p className="text-sm text-gray-400">
            Can't choose?{" "}
            <a href="#" className="text-[#8800f0] hover:underline">
              Compare plans →
            </a>
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-4 sm:px-6 pb-12 lg:pb-16">
        <div className="max-w-[1920px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">
            {/* Tier 0 - Free */}
            <Card className="bg-gray-900 border-gray-700 relative">
              <CardHeader className="text-center pb-4 p-4 lg:p-6">
                <div className="text-xs sm:text-sm text-gray-400 mb-2">TIER 0</div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2">Public</h3>
                <div className="text-2xl lg:text-3xl font-bold">Free</div>
                <Badge className="bg-gray-700 text-white mt-2 text-xs">CURRENT PLAN</Badge>
              </CardHeader>
              <CardContent className="space-y-3 p-4 lg:p-6 pt-0">
                <Button variant="outline" className="w-full bg-transparent border-gray-600 text-white text-sm">
                  Send as a Gift
                </Button>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#6aff67] flex-shrink-0" />
                    <span>Access to 100+ public servers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#6aff67] flex-shrink-0" />
                    <span>Monthly public cap updates</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#6aff67] flex-shrink-0" />
                    <span>Help & FAQ support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tier 1 - Public+ */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader className="text-center pb-4 p-4 lg:p-6">
                <div className="text-xs sm:text-sm text-gray-400 mb-2">TIER 1</div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2">Public+</h3>
                <div className="text-2xl lg:text-3xl font-bold">
                  $3.99<span className="text-sm font-normal">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 p-4 lg:p-6 pt-0">
                <Button className="w-full bg-white text-black hover:bg-gray-200 text-sm">SUBSCRIBE</Button>
                <Button variant="outline" className="w-full bg-transparent border-gray-600 text-white text-sm">
                  Send as a Gift
                </Button>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#6aff67] flex-shrink-0" />
                    <span>Access to "Public Pack" Servers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#6aff67] flex-shrink-0" />
                    <span>In-Game Badges</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#6aff67] flex-shrink-0" />
                    <span>VIP Alternative and DnR Servers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#6aff67] flex-shrink-0" />
                    <span>Priority Queue for Server Hosting</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tier 2 - Midnight */}
            <Card className="bg-gray-900 border-gray-700">
              <CardHeader className="text-center pb-4 p-4 lg:p-6">
                <div className="text-xs sm:text-sm text-gray-400 mb-2">TIER 2</div>
                <h3 className="text-lg lg:text-xl font-semibold mb-2">Midnight</h3>
                <div className="text-2xl lg:text-3xl font-bold">
                  $7.99<span className="text-sm font-normal">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 p-4 lg:p-6 pt-0">
                <Button className="w-full bg-[#6aff67] text-black hover:bg-[#5ee05b] text-sm">FREE 7-DAYS TRIAL</Button>
                <Button variant="outline" className="w-full bg-transparent border-gray-600 text-white text-sm">
                  Send as a Gift
                </Button>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#6aff67] flex-shrink-0" />
                    <span>Spec Cars in Spec Servers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#6aff67] flex-shrink-0" />
                    <span>JDM, VTEC & Manual Servers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#6aff67] flex-shrink-0" />
                    <span>No Server Hosting Presets</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#6aff67] flex-shrink-0" />
                    <span>No Server Hosting Queue</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#6aff67] flex-shrink-0" />
                    <span>6-Hour Server Hosting Limit</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Tier 3 - Underground */}
            <Card className="bg-gradient-to-b from-[#dd0355] to-[#8800f0] border-0 relative sm:col-span-2 xl:col-span-1">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#dd0355] text-white px-3 sm:px-4 py-1 text-xs">
                MOST POPULAR
              </Badge>
              <div className="absolute top-4 right-4 text-xs sm:text-sm text-gray-300">TIER 3</div>
              <CardHeader className="text-center pb-4 pt-8 p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-semibold mb-2">Underground</h3>
                <div className="text-2xl lg:text-3xl font-bold">
                  $12.99<span className="text-sm font-normal">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 p-4 lg:p-6 pt-0">
                <Button className="w-full bg-white text-black hover:bg-gray-200 text-sm">SUBSCRIBE</Button>
                <Button variant="outline" className="w-full bg-transparent border-white text-white text-sm">
                  Send as a Gift
                </Button>
                <div className="space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                    <span>Early Access to Content & Features</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                    <span>Exclusive Access to TD Map</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                    <span>Three New Spec Cars Every Month</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                    <span>Exclusive Access to Spec Cars on Public Servers</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                    <span>Unlimited Server Hosting Presets</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                    <span>No Time Limits on Server Hosting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white flex-shrink-0" />
                    <span>Host Up to 32 Players on Server Hosting</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Comparison Table */}
      <section className="px-4 sm:px-6 pb-12 lg:pb-16">
        <div className="max-w-[1920px] mx-auto">
          <div className="bg-gray-900 rounded-lg overflow-x-auto">
            <div className="min-w-[800px]">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-4 p-6 border-b border-gray-700">
                <div className="font-semibold text-sm xl:text-base">Features</div>
                <div className="text-center">
                  <div className="text-xs xl:text-sm text-gray-400 mb-1">TIER 0</div>
                  <div className="font-semibold text-sm xl:text-base">CURRENT PLAN</div>
                  <div className="text-xs xl:text-sm">Everything you need to start playing.</div>
                </div>
                <div className="text-center">
                  <div className="text-xs xl:text-sm text-gray-400 mb-1">TIER 1</div>
                  <Button className="w-full bg-white text-black text-xs py-1">SUBSCRIBE</Button>
                  <div className="text-xs xl:text-sm mt-1">Get a taste</div>
                </div>
                <div className="text-center">
                  <div className="text-xs xl:text-sm text-gray-400 mb-1">TIER 2</div>
                  <Button className="w-full bg-[#6aff67] text-black text-xs py-1">FREE 7-DAYS TRIAL</Button>
                  <div className="text-xs xl:text-sm mt-1">Amplify your experience</div>
                </div>
                <div className="text-center">
                  <div className="text-xs xl:text-sm text-gray-400 mb-1">TIER 3</div>
                  <Button className="w-full bg-white text-black text-xs py-1">SUBSCRIBE</Button>
                  <div className="text-xs xl:text-sm mt-1">Reach new limits</div>
                </div>
              </div>

              {/* Feature Rows */}
              <div className="divide-y divide-gray-700">
                {[
                  "Access to Hesi and Hesi FAQ",
                  "Monthly Public Car Updates",
                  "Access to 100+ Public Servers",
                  "VIP slots for TruckCars on Public Servers",
                  'VIP Only "Public Pack" Servers',
                  "VIP Alternative and DnR Servers",
                  "In-game Badges",
                  "Spec Cars in Spec Servers",
                  "JDM, VTEC and Manual servers",
                  "Complete Server Access",
                  "Community Voting Access",
                  "Early Access to Exclusive Content",
                  "Exclusive access to Hesi Map",
                  "Exclusive access to Spec cars on Public",
                  "Three new Spec cars a month",
                ].map((feature, index) => (
                  <div key={index} className="grid grid-cols-5 gap-4 p-4 text-xs xl:text-sm">
                    <div>{feature}</div>
                    <div className="text-center">
                      {index < 3 ? <Check className="w-4 h-4 text-[#6aff67] mx-auto" /> : ""}
                    </div>
                    <div className="text-center">
                      {index < 7 ? <Check className="w-4 h-4 text-[#6aff67] mx-auto" /> : ""}
                    </div>
                    <div className="text-center">
                      {index < 12 ? <Check className="w-4 h-4 text-[#6aff67] mx-auto" /> : ""}
                    </div>
                    <div className="text-center">
                      <Check className="w-4 h-4 text-[#6aff67] mx-auto" />
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
              QUESTIONS?
              <br />
              NO PROBLEM.
              <br />
              WE HAVE THE
              <br />
              ANSWERS
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-6 lg:mb-8">Just ping us, feel free!</p>
            <p className="text-gray-400 mb-6 lg:mb-8 text-sm sm:text-base">
              Or read our FAQ. Who knows,
              <br className="hidden sm:block" />
              maybe you can find answer
              <br className="hidden sm:block" />
              by yourself
            </p>
            <Button
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
            >
              GO TO FAQ
            </Button>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8">Contact us</h3>
            <div className="space-y-4 lg:space-y-6">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="John Doe"
                    className="bg-gray-800 border-gray-600 pl-10 text-white placeholder-gray-400 h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Discord username</label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="@fluffymonkey"
                    className="bg-gray-800 border-gray-600 pl-10 text-white placeholder-gray-400 h-12"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Your question</label>
                <Textarea
                  placeholder="Drop some lines here"
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 min-h-[120px] resize-none"
                />
              </div>

              <Button className="w-full bg-[#8800f0] hover:bg-[#6b1eb5] text-white py-3 h-12 text-sm sm:text-base font-semibold">
                SEND
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
