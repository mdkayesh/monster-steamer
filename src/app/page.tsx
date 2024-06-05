import Area from "@/components/sections/Area";
import BeforeAndAfter from "@/components/sections/BeforeAndAfter";
import Bookonline from "@/components/sections/Bookonline";
import ClientsFeedback from "@/components/sections/ClientsFeedback";
import Feature from "@/components/sections/Feature";
import Hero from "@/components/sections/Hero";
import QualityService from "@/components/sections/QualityService";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <QualityService />
      <WhyChooseUs />
      <ClientsFeedback />
      <BeforeAndAfter />
      <Bookonline />
      <Area />
    </main>
  );
}
