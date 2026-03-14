import React from 'react';
import { Shield, Phone, AlertCircle, Hand, Brain, Coins } from 'lucide-react';

const Awareness = () => {
  return (
    <div className="bg-transparent min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">Abuse Awareness & Support</h1>
          <p className="mt-4 text-xl text-gray-100 font-medium drop-shadow-sm max-w-3xl mx-auto leading-relaxed">
            Understanding the different forms of domestic violence is the first step toward getting help. 
            Remember, abuse is NEVER your fault.
          </p>
        </div>

        {/* Emergency Contacts Section */}
        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8 mb-12 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-white/30">
          <h2 className="text-2xl font-bold text-red-300 flex items-center gap-2 mb-6">
            <Phone className="h-6 w-6" /> Immediate Emergency Helplines
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <div className="bg-black/20 rounded-xl p-4 shadow-md border border-white/10 flex items-center hover:bg-black/30 transition-all duration-300 hover:-translate-y-1 transform">
              <div className="bg-white/20 font-bold text-red-300 h-12 w-12 rounded-full flex items-center justify-center text-xl mr-4 shadow-sm">100</div>
              <div>
                <p className="font-bold text-white">Police Emergency</p>
                <p className="text-sm text-gray-200 font-medium">Immediate threat to life</p>
              </div>
            </div>
            <div className="bg-black/20 rounded-xl p-4 shadow-md border border-white/10 flex items-center hover:bg-black/30 transition-all duration-300 hover:-translate-y-1 transform">
              <div className="bg-white/20 font-bold text-red-300 h-12 w-12 rounded-full flex items-center justify-center text-xl mr-4 shadow-sm">1091</div>
              <div>
                <p className="font-bold text-white">Women Helpline</p>
                <p className="text-sm text-gray-200 font-medium">National women's crisis line</p>
              </div>
            </div>
            <div className="bg-black/20 rounded-xl p-4 shadow-md border border-white/10 flex items-center hover:bg-black/30 transition-all duration-300 hover:-translate-y-1 transform">
              <div className="bg-white/20 font-bold text-red-300 h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center text-lg md:text-xl mr-3 md:mr-4 shadow-sm shrink-0">181</div>
              <div>
                <p className="font-bold text-white text-sm md:text-base">Domestic Abuse</p>
                <p className="text-xs md:text-sm text-gray-200 font-medium">Specialized DV line</p>
              </div>
            </div>
            <div className="bg-black/20 rounded-xl p-4 shadow-md border border-white/10 flex items-center hover:bg-black/30 transition-all duration-300 hover:-translate-y-1 transform">
              <div className="bg-white/20 font-bold text-red-300 h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center text-lg md:text-xl mr-3 md:mr-4 shadow-sm shrink-0">1098</div>
              <div>
                <p className="font-bold text-white text-sm md:text-base">Childline India</p>
                <p className="text-xs md:text-sm text-gray-200 font-medium">Protecting Children</p>
              </div>
            </div>
            <div className="bg-black/20 rounded-xl p-4 shadow-md border border-white/10 flex items-center hover:bg-black/30 transition-all duration-300 hover:-translate-y-1 transform">
              <div className="bg-white/20 font-bold text-red-300 h-10 w-10 md:h-12 md:w-12 rounded-full flex items-center justify-center text-lg md:text-xl mr-3 md:mr-4 shadow-sm shrink-0">1930</div>
              <div>
                <p className="font-bold text-white text-sm md:text-base">Cybercrime</p>
                <p className="text-xs md:text-sm text-gray-200 font-medium">Report online abuse</p>
              </div>
            </div>
          </div>
        </div>

        {/* Types of Abuse Section */}
        <h2 className="text-2xl font-bold text-white mb-8">Recognizing Different Forms of Abuse</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-black/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform flex flex-col h-full">
            <div className="flex-grow">
              <Hand className="h-8 w-8 text-indigo-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Physical Abuse</h3>
              <p className="text-gray-100 text-sm font-medium leading-relaxed mb-4">Use of physical force against someone in a way that injures or endangers them, including hitting, pushing, or restraining.</p>
            </div>
            <div className="mt-auto pt-4 border-t border-white/10">
              <p className="text-red-300 font-bold text-sm flex items-center gap-2"><Phone className="h-4 w-4"/> Emergency: 100/112</p>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-black/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform flex flex-col h-full">
            <div className="flex-grow">
              <Brain className="h-8 w-8 text-indigo-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Emotional Abuse</h3>
              <p className="text-gray-100 text-sm font-medium leading-relaxed mb-4">Verbal attacks, humiliation, manipulation, and controlling behavior aimed at destroying self-worth.</p>
            </div>
            <div className="mt-auto pt-4 border-t border-white/10">
              <p className="text-red-300 font-bold text-sm flex items-center gap-2"><Phone className="h-4 w-4"/> Helpline: 1091 (Women)</p>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-black/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform flex flex-col h-full">
            <div className="flex-grow">
              <AlertCircle className="h-8 w-8 text-indigo-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Sexual Abuse</h3>
              <p className="text-gray-100 text-sm font-medium leading-relaxed mb-4">Any situation in which force or threat is used to obtain participation in unwanted sexual activity.</p>
            </div>
            <div className="mt-auto pt-4 border-t border-white/10">
              <p className="text-red-300 font-bold text-sm flex items-center gap-2"><Phone className="h-4 w-4"/> Emergency: 1091 / 100</p>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-black/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform flex flex-col h-full">
            <div className="flex-grow">
              <Coins className="h-8 w-8 text-indigo-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Economic Abuse</h3>
              <p className="text-gray-100 text-sm font-medium leading-relaxed mb-4">Controlling finances, withholding money, or preventing someone from gaining employment or financial independence.</p>
            </div>
            <div className="mt-auto pt-4 border-t border-white/10">
              <p className="text-red-300 font-bold text-sm flex items-center gap-2"><Phone className="h-4 w-4"/> Helpline: 181</p>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-black/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform flex flex-col h-full">
            <div className="flex-grow">
              <Shield className="h-8 w-8 text-indigo-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Dowry Abuse</h3>
              <p className="text-gray-100 text-sm font-medium leading-relaxed mb-4">Harassment, violence, or death threats directed at a woman by her husband or his relatives in connection with demands for dowry.</p>
            </div>
            <div className="mt-auto pt-4 border-t border-white/10">
              <p className="text-red-300 font-bold text-sm flex items-center gap-2"><Phone className="h-4 w-4"/> NCW Helpline: 7827170170</p>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-black/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform flex flex-col h-full">
            <div className="flex-grow">
              <AlertCircle className="h-8 w-8 text-indigo-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Cyber Abuse</h3>
              <p className="text-gray-100 text-sm font-medium leading-relaxed mb-4">Online harassment, non-consensual sharing of intimate images, stalking, or doxxing using digital platforms.</p>
            </div>
            <div className="mt-auto pt-4 border-t border-white/10">
              <p className="text-red-300 font-bold text-sm flex items-center gap-2"><Phone className="h-4 w-4"/> Cyber Helpline: 1930</p>
            </div>
          </div>

          <div className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-black/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform flex flex-col h-full">
            <div className="flex-grow">
              <Shield className="h-8 w-8 text-indigo-300 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Child Abuse</h3>
              <p className="text-gray-100 text-sm font-medium leading-relaxed mb-4">Physical, sexual, emotional maltreatment, or neglect of a child, often occurring within the home setting.</p>
            </div>
            <div className="mt-auto pt-4 border-t border-white/10">
              <p className="text-red-300 font-bold text-sm flex items-center gap-2"><Phone className="h-4 w-4"/> Childline: 1098</p>
            </div>
          </div>

        </div>

        {/* Resources banner */}
        <div className="mt-12 bg-black/20 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center text-white shadow-2xl transition-all duration-300 hover:shadow-indigo-500/20">
          <Shield className="h-10 w-10 mx-auto mb-4 text-indigo-300 transform transition-transform duration-300 hover:scale-110 hover:rotate-6" />
          <h2 className="text-2xl font-bold mb-4">You have rights under the PWDVA, 2005.</h2>
          <p className="mb-6 max-w-2xl mx-auto text-gray-100 font-medium">Explore the Legal Rights section to understand provisions like protection orders, residence orders, and child custody.</p>
        </div>
      </div>
    </div>
  );
};

export default Awareness;
