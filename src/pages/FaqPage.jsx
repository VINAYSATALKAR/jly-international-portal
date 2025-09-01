// src/pages/FaqPage.jsx
import { motion } from 'framer-motion';
import AccordionItem from '../components/AccordionItem';

const jlyFaqs = [
  {
    question: "What is JLY International?",
    answer: "JLY International is a business consultancy firm specializing in connecting businesses with investors, stakeholders, and strategic partners. We facilitate partnerships, alliances, funding, mergers, and acquisitions tailored to your goals.",
  },
  {
    question: "What services does JLY International provide?",
    answer: "We offer: Strategic Partnerships, Collaboration Opportunities, Funding and Investment Support, Custom Business Solutions, Government Contracting Assistance, and Family Office Investment Services.",
  },
  {
    question: "How does JLY ensure compliance and trust in its connections?",
    answer: "Compliance and ethical practices are core to our operations. We thoroughly vet opportunities and maintain transparency throughout our engagements to ensure trust and credibility.",
  },
    {
    question: "Who can benefit from JLY’s services?",
    answer: "Our services are ideal for: Start-ups seeking funding, established businesses looking to expand, investors exploring high-value opportunities, and companies pursuing mergers or government contracts.",
  },
];

const c3shieldFaqs = [
  {
    question: "What is C3Shield?",
    answer: "C3Shield is a division of JLY International dedicated to combating cryptocurrency scams. We assist individuals and organizations in navigating crypto fraud, recovering lost funds, and educating communities to prevent scams.",
  },
  {
    question: "How does C3Shield help with scam recovery?",
    answer: "We collaborate with blockchain experts, cybersecurity professionals, and law enforcement to trace stolen funds and attempt recovery on a success-fee basis.",
  },
    {
    question: "How much does it cost to use C3Shield’s services?",
    answer: "Our services are primarily offered on a success-fee basis. Fees are only charged when we successfully recover funds or achieve specific results.",
  },
  {
    question: "What if I’ve already been scammed?",
    answer: "Contact us immediately at info@jly.international or visit the C3Shield section of our website. Provide all relevant details, and our team will assess your case.",
  },
];


const FaqPage = () => {
  return (
    <div className="bg-white">
       {/* Hero Section */}
      <div className="text-center py-24 pt-30 bg-slate-50">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-blue-800 font-montserrat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Frequently Asked Questions
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Have questions? We’ve got answers. Find the information you’re looking for below.
        </motion.p>
      </div>
      
      {/* FAQ Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">

            {/* JLY International FAQs */}
            <h2 className="text-3xl font-bold text-blue-800 font-montserrat mb-8">JLY International</h2>
            <div className="mb-16">
                {jlyFaqs.map((faq, index) => (
                    <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>

            {/* C3Shield FAQs */}
            <h2 className="text-3xl font-bold text-blue-800 font-montserrat mb-8">C3Shield (Crypto Recovery)</h2>
            <div>
                {c3shieldFaqs.map((faq, index) => (
                    <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>

        </div>
      </section>
    </div>
  );
};

export default FaqPage;