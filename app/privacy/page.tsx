import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export const metadata: Metadata = {
  title: "Privacy Policy | Elegance Estate - Luxury Real Estate",
  description: "Learn about how we protect your information and ensure complete privacy while helping you find your dream home in India.",
  keywords: ["Privacy Policy", "Real Estate Data Protection India", "Elegance Estate Legal"],
  robots: { index: false, follow: true }, 
};
const PrivacyPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F8F9FA]">
      <Header />
      <main className="flex-grow pt-32 md:pt-48 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter mb-4 leading-none uppercase">
               Privacy <span className="text-blue-600">Policy.</span>
            </h1>
            <p className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest">Effective Date: April 13, 2026</p>
          </div>
          <div className="bg-white p-10 md:p-16 rounded-3xl border border-zinc-200 shadow-sm space-y-12 text-zinc-600 leading-relaxed font-normal">
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 tracking-tight uppercase">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Elegance Estate. We are committed to protecting your personal information and your 
                right to privacy. If you have any questions or concerns about this privacy notice, or our 
                practices with regards to your personal information, please contact us at concierge@eleganceestate.in.
              </p>
              <p>
                When you visit our website and use our services, you trust us with your personal information. 
                In this privacy notice, we seek to explain to you in the clearest way possible what information 
                we collect, how we use it and what rights you have in relation to it.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 tracking-tight uppercase">2. Information We Collect</h2>
              <p className="mb-4">
                We collect personal information that you voluntarily provide to us when you express an interest 
                in obtaining information about us or our products and services, when you participate in 
                activities on the website or otherwise when you contact us.
              </p>
              <ul className="list-disc pl-6 space-y-2 font-medium text-sm text-zinc-800">
                <li>Personal Data (Name, Email, Phone Number, LinkedIn Profiles)</li>
                <li>Location Data (City, State, Country of interest)</li>
                <li>Property Preferences (Price range, Configuration, Category)</li>
                <li>Communication Records (Visit schedules, Email inquiries)</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 tracking-tight uppercase">3. How We Use Your Information</h2>
              <p className="mb-4">
                We use personal information collected via our website for a variety of business purposes 
                described below. We process your personal information for these purposes in reliance on 
                our legitimate business interests, in order to enter into or perform a contract with you, 
                with your consent, and/or for compliance with our legal obligations.
              </p>
              <ul className="list-disc pl-6 space-y-2 font-medium text-sm text-zinc-800">
                <li>To facilitate account creation and logon process.</li>
                <li>To send you administrative information.</li>
                <li>To fulfill and manage your property visit requests.</li>
                <li>To post testimonials with your consent.</li>
                <li>To deliver targeted advertising to you.</li>
                <li>To respond to legal requests and prevent harm.</li>
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 tracking-tight uppercase">4. Sharing Your Information</h2>
              <p>
                We only share information with your consent, to comply with laws, to provide you with services, 
                to protect your rights, or to fulfill business obligations. We may process or share your 
                data that we hold based on the following legal basis: Consent, Performance of a Contract, 
                Legal Obligations, and Legitimate Interests.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 tracking-tight uppercase">5. Data Retention</h2>
              <p>
                We will only keep your personal information for as long as it is necessary for the purposes 
                set out in this privacy notice, unless a longer retention period is required or permitted 
                by law (such as tax, accounting or other legal requirements).
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 tracking-tight uppercase">6. Your Rights</h2>
              <p>
                In some regions (like the European Economic Area), you have certain rights under applicable 
                data protection laws. These may include the right (i) to request access and obtain a copy of 
                your personal information, (ii) to request rectification or erasure; (iii) to restrict the 
                processing of your personal information; and (iv) if applicable, to data portability.
              </p>
            </section>
            <div className="pt-12 border-t border-zinc-100 italic text-sm text-zinc-400">
               If you wish to exercise any of these rights, please contact our Data Protection Officer at 
               dpo@eleganceestate.in.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export default PrivacyPage;
