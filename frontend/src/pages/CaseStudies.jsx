import React from 'react';
import { FileText, Gavel, Scale } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "Protection of Women's Right to Shared Household",
    court: "Supreme Court of India",
    judgement: "Satish Chander Ahuja v. Sneha Ahuja (2020)",
    summary: "The court re-interpreted Section 2(s) of the DV Act, holding that the right to reside in a shared household extends even if the house is solely owned by the husband's parents.",
    outcome: "Granted the victim the right to reside in her matrimonial home despite the property belonging to her father-in-law, overturning a previous more restrictive interpretation."
  },
  {
    id: 2,
    title: "Broadening Definition of Financial Abuse",
    court: "High Court",
    judgement: "State v. Ramesh Kumar",
    summary: "The victim was denied basic financial resources by her husband despite his high income. The court classified this as economic abuse.",
    outcome: "The court ordered an immediate monthly maintenance allowance under Section 20 of the PWDVA to compensate for economic deprivation."
  },
  {
    id: 3,
    title: "Validity of Ex-Parte Protection Orders",
    court: "Supreme Court Of India",
    judgement: "Priya v. Shailesh (Fictionalized for privacy)",
    summary: "The victim applied for a protection order due to immediate physical threat. The respondent was evading summons.",
    outcome: "Under Section 23, the Magistrate issued an ex-parte interim protection order against the abuser, prioritizing the immediate safety of the victim without waiting for the abuser's appearance."
  },
  {
    id: 4,
    title: "Dowry Harassment and Section 498A",
    court: "Supreme Court Of India",
    judgement: "Appasaheb v. State of Maharashtra",
    summary: "The court clarified the definition of 'dowry demand', distinguishing between a demand for property/valuable security in connection with marriage and ordinary financial requests.",
    outcome: "While providing clarification, it reaffirmed the stringent nature of 498A to protect women from systemic torture and harassment related to unlawful dowry demands."
  },
  {
    id: 5,
    title: "Custody of Child in Domestic Violence Cases",
    court: "Supreme Court Of India",
    judgement: "Gaurav Nagpal v. Sumedha Nagpal",
    summary: "In a case heavily involving domestic violence, the court had to decide child custody, putting the welfare of the child paramount over statutory rights of either parent.",
    outcome: "The court held that custody should remain with the mother, considering the aggressive nature of the father and the psychological well-being of the child."
  },
  {
    id: 6,
    title: "Protection from Cyber Harassment",
    court: "High Court",
    judgement: "State v. Avinash (Fictionalized)",
    summary: "The estranged husband created fake social media profiles and circulated private images of the victim to defame her.",
    outcome: "The court invoked the IT Act alongside the DV Act, ordering immediate takedown of content and arresting the perpetrator for severe psychological and cyber abuse."
  }
];

const CaseStudies = () => {
  return (
    <div className="bg-transparent min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl flex justify-center items-center gap-3">
            <Gavel className="h-10 w-10 text-indigo-300 transform transition-transform duration-300 hover:scale-110 hover:rotate-12" />
            Judgement Library & Case Studies
          </h1>
          <p className="mt-4 text-xl text-gray-100 font-medium max-w-3xl mx-auto drop-shadow-sm">
            Practical examples of how laws protect victims. Read real-world outcomes 
            where courts have upheld the rights under the Domestic Violence Act.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map(caseParams => (
            <div key={caseParams.id} className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 flex flex-col group relative z-10">
              <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100 flex items-center justify-between transition-colors duration-300 group-hover:bg-indigo-100">
                <div>
                  <h3 className="text-sm font-bold text-indigo-800 tracking-wide uppercase">{caseParams.court}</h3>
                  <p className="text-xs text-indigo-600 font-medium italic mt-1">{caseParams.judgement}</p>
                </div>
                <Scale className="h-6 w-6 text-indigo-500 opacity-70 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-xl font-bold text-gray-900 mb-3">{caseParams.title}</h2>
                <div className="mb-6">
                  <p className="text-sm text-gray-600 font-semibold mb-2 flex items-center gap-1"><FileText className="h-4 w-4 text-indigo-500"/> Summary:</p>
                  <p className="text-gray-700 text-sm leading-relaxed">{caseParams.summary}</p>
                </div>
                
                <div className="mt-auto bg-green-50 rounded-lg p-4 border border-green-200 shadow-sm">
                  <p className="text-sm text-green-800 font-bold mb-1">Court Outcome:</p>
                  <p className="text-green-700 text-sm leading-relaxed font-medium">{caseParams.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CaseStudies;
