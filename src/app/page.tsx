import Requisites from "@/components/Requisites";
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
  <StepsRoute />
  <TransportModes />
      <WhyUs />
  {/* <Cases /> удалено, чтобы не было дубля */}
  <TelegramCTA />
      <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-bold">Свяжитесь с нами</h2>
        <p className="text-white/70 mt-2">Ответим в течение рабочего дня. Для срочных задач используйте чат.</p>
        <div className="mt-6 grid lg:grid-cols-2 gap-6">
          <ContactForm />
          <div className="card p-6">
            <h3 className="text-xl font-semibold">Почему мы</h3>
            <ul className="list-disc pl-5 text-white/70 mt-2 space-y-2">
              <li>Работаем по договору, прозрачные сметы</li>
              <li>Отчётность, фото/видео контроль на каждом этапе</li>
              <li>Подбираем оптимальную схему доставки под задачу</li>
            </ul>
          </div>
        </div>
      </section>
  <Team />
  <CTA />
  <Requisites />
  <Footer />

  <ChatWidget />
    </main>
  )
}
