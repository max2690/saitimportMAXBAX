import About from "@/components/About";
import StepsRoute from "@/components/HowWeWork/StepsRoute";
import Hero from "@/components/Hero";
import TransportModes from "@/components/TransportModes";
import TelegramCTA from "@/components/TelegramCTA";
import WhyUs from "@/components/WhyUs";
import Cases from "@/components/Cases";
import Process from "@/components/Process";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ChatWidget from "@/components/ChatWidget";
import { jsonLdOrganization, jsonLdBreadcrumbs } from "@/lib/seo";

export default function Page(){
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdOrganization)}} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLdBreadcrumbs)}} />

      <Hero />
      <About />
      <TransportModes />
      <WhyUs />
      <Cases />
      <Process />
      <Team />
      <CTA />
      <Footer />
      <ChatWidget />
    </main>
  )
}
