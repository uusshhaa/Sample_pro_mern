import React from 'react';
import { Scale, Book, ShieldCheck, Home as HomeIcon } from 'lucide-react';

const LegalRights = () => {
  return (
    <div className="bg-transparent min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl flex justify-center items-center gap-3">
            <Scale className="h-10 w-10 text-indigo-300 transform transition-transform duration-300 hover:scale-110" />
            Your Legal Rights & Protections
          </h1>
          <p className="mt-4 text-xl text-gray-100 font-medium max-w-3xl mx-auto drop-shadow-sm">
            Ignorance of the law is not an excuse, but knowledge of the law is power. 
            Understanding your rights under the Domestic Violence Act.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Physical Abuse Right */}
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-white/30 hover:-translate-y-1 transform group">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-indigo-300 mb-4 group-hover:bg-white/30 transition-colors">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Protection from Physical Abuse</h3>
            <p className="text-gray-100 text-sm leading-relaxed">
              You have the right to seek a Protection Order (Sec 18, PWDVA) prohibiting the abuser from committing any further acts of physical violence, entering your workplace, or communicating with you.
            </p>
          </div>

          {/* Emotional Abuse Right */}
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-white/30 hover:-translate-y-1 transform group">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-indigo-300 mb-4 group-hover:bg-white/30 transition-colors">
              <Book className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Against Emotional Abuse</h3>
            <p className="text-gray-100 text-sm leading-relaxed">
              Verbal and emotional abuse is legally recognized. You can file for injunctions to prevent the abuser from continuing verbal harassment and seek counseling directives for the abuser.
            </p>
          </div>

          {/* Sexual Abuse Right */}
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-white/30 hover:-translate-y-1 transform group">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-indigo-300 mb-4 group-hover:bg-white/30 transition-colors">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Safety from Sexual Abuse</h3>
            <p className="text-gray-100 text-sm leading-relaxed">
              Any non-consensual sexual act is punishable. Victims can seek immediate medical, shelter, and legal assistance under the PWDVA and IPC.
            </p>
          </div>

          {/* Economic Abuse Right */}
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-white/30 hover:-translate-y-1 transform group">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-indigo-300 mb-4 group-hover:bg-white/30 transition-colors">
              <Scale className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Relief from Economic Abuse</h3>
            <p className="text-gray-100 text-sm leading-relaxed">
              You have the Right to Financial Relief (Sec 20). The court can direct the abuser to pay monetary maintenance, medical expenses, and compensate for loss of earnings.
            </p>
          </div>

          {/* Dowry Abuse Right */}
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-white/30 hover:-translate-y-1 transform group">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-indigo-300 mb-4 group-hover:bg-white/30 transition-colors">
              <HomeIcon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Protection against Dowry Demands</h3>
            <p className="text-gray-100 text-sm leading-relaxed">
              Under the Dowry Prohibition Act and IPC Section 498A, demanding dowry or harassing a woman for dowry is a criminal offense punishable by strict imprisonment.
            </p>
          </div>

          {/* Cyber Abuse Right */}
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-white/30 hover:-translate-y-1 transform group">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-indigo-300 mb-4 group-hover:bg-white/30 transition-colors">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Actions for Cyber Abuse</h3>
            <p className="text-gray-100 text-sm leading-relaxed">
              Under the IT Act, you can report online stalking, doxxing, or non-consensual sharing of images. The Cyber Crime cell can take immediate takedown actions.
            </p>
          </div>

          {/* Child Abuse Right */}
          <div className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-white/30 hover:-translate-y-1 transform group lg:col-span-3 lg:w-1/3 lg:mx-auto">
            <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-indigo-300 mb-4 group-hover:bg-white/30 transition-colors mx-auto lg:mx-0">
              <Scale className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 text-center lg:text-left">Preventing Child Abuse (POCSO)</h3>
            <p className="text-gray-100 text-sm leading-relaxed text-center lg:text-left">
              The POCSO Act provides stringent protections for children against sexual offenses. Temporary custody can also be granted to the reporting victim under the DV Act to protect the child from the abuser.
            </p>
          </div>
        </div>

        <div className="bg-black/30 rounded-2xl p-8 border border-indigo-400/30 shadow-2xl text-center transition-all duration-300">
          <h2 className="text-2xl font-bold text-white mb-4">How to file a legal complaint?</h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto font-medium">
            While our portal allows you to record your incident securely, an official legal complaint usually begins by approaching the local Police Station or a Protection Officer appointed by the State Government.
          </p>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-3xl mx-auto text-left shadow-inner border border-white/10">
            <ol className="list-decimal list-inside space-y-4 text-gray-100 font-medium">
              <li><strong className="text-white bg-black/20 px-2 py-1 rounded inline-block">Step 1:</strong> Prepare a detailed account of the incidents (Date, Time, Place). Use the dashboard records.</li>
              <li><strong className="text-white bg-black/20 px-2 py-1 rounded inline-block">Step 2:</strong> Contact the local police to file an FIR (First Information Report) if an immediate crime occurred.</li>
              <li><strong className="text-white bg-black/20 px-2 py-1 rounded inline-block">Step 3:</strong> Consult a designated Protection Officer or contact a legal aid organization (like NALSA) who can help file an application before a Magistrate under the Domestic Violence Act.</li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LegalRights;
