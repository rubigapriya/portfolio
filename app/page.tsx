import { Mail, Phone, User, GraduationCap, Lightbulb, Award, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
// import Image from "next/image"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/50 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-600 shadow-2xl">
                {/* <Image
                  src="/images/rubiga-profile.png"
                  alt="Rubiga S."
                  width={256}
                  height={256}
                  className="w-full h-full object-cover"
                /> */}
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
            </div>

            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">Rubiga S.</h1>
              <p className="text-xl text-gray-300 mb-6">B.E. Production Engineering</p>
              <p className="text-2xl lg:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
                Aspiring Production Engineer passionate about leadership, events, and design
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  <a href="https://www.linkedin.com/in/rubiga-s06/" target="_blank">Contact Me</a>
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3 rounded-full transition-all duration-300 bg-transparent"
                >
                  <User className="w-5 h-5 mr-2" />
                  <a href="#about">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section  id = "about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">About Me</h2>
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
                As a dedicated Production Engineering graduate, I bring a unique blend of technical expertise and
                creative leadership to every project. My passion lies in organizing impactful events that bring
                communities together, while my technical interests focus on designing innovative products and aircraft
                tools that push the boundaries of engineering excellence. I thrive in collaborative environments where I
                can leverage my leadership skills to drive meaningful results and inspire others to achieve their best.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-6 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Core Skills</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-[#0066ff] to-blue-700/20 border-blue-600/50 hover:border-blue-600 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Leadership</h3>
                <p className="text-white">
                  Natural ability to guide teams, make strategic decisions, and inspire others to achieve collective
                  goals with confidence and vision.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#8000ff] to-purple-800/20 border-purple-700/50 hover:border-purple-600 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Event Organizing</h3>
                <p className="text-white">
                  Exceptional talent for planning, coordinating, and executing memorable events that engage audiences
                  and create lasting impact.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#00ff00] to-green-800/20 border-green-700/50 hover:border-green-600 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Product & Aircraft Tool Design</h3>
                <p className="text-white">
                  Innovative approach to designing cutting-edge products and specialized aircraft tools with focus on
                  functionality and efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education & Interests */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <GraduationCap className="w-8 h-8 text-blue-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-semibold text-white">HSC</h4>
                    <p className="text-blue-400 font-medium">State Board</p>
                    <p className="text-gray-400 mt-2">
                      Completed Higher Secondary Certificate with a focus on computer science and mathematics under the State Board curriculum.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-semibold text-white">Bachelor of Engineering</h4>
                    <p className="text-blue-400 font-medium">Production Engineering</p>
                    <p className="text-gray-400 mt-2">
                      Comprehensive education in manufacturing processes, quality control, industrial engineering, and production optimization techniques.
                    </p>
                  </div>
                </div>

              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <Lightbulb className="w-8 h-8 text-purple-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">Interests</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Event Organization</h4>
                      <p className="text-gray-400">
                        Creating memorable experiences through strategic planning and creative execution
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Innovative Product Design</h4>
                      <p className="text-gray-400">
                        Developing cutting-edge solutions that merge functionality with aesthetic appeal
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">Aircraft Tool Engineering</h4>
                      <p className="text-gray-400">
                        Specialized focus on precision tools and equipment for aerospace applications
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to collaborate on your next project or discuss opportunities
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-br from-[#2c7da0]/30 to-[#2c7da0] border-blue-700/50 hover:border-blue-500 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <Linkedin className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
                <a
                  href="https://www.linkedin.com/in/rubiga-s06/"
                  className="text-white hover:text-blue-300 text-lg font-medium transition-colors"
                >
                  rubiga
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-[#7a2c7d]/30 to-[#7a2c7d] border-purple-700/50 hover:border-purple-500 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                <a
                  href="mailto:rubigapriya@gmail.com"
                  className="text-white hover:text-purple-300 text-lg font-medium transition-colors"
                >
                  rubigapriya@gmail.com
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center space-x-6">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Message
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white">Rubiga S.</h3>
              <p className="text-gray-400">Production Engineer & Design Enthusiast</p>
            </div>

            <div className="flex space-x-6">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
              >
                <Github className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-white hover:bg-gray-800 rounded-full"
              >
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-500">© 2025 Rubiga S. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
