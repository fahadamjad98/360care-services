
import HeroBanner from "./components/hero";
import MaintenanceServicesCards from "./components/maintenanceServicesCards";
import CounterSection from "./components/counterforservices";
import ServiceAreas from "./components/homeImageGraph";

export default function Home() {
  return (
    <>
      <section className="">
        <HeroBanner />
      </section>
      <section>
        <MaintenanceServicesCards />
      </section>
      <section>
        <ServiceAreas />
      </section>
      <section>
        <CounterSection />
      </section>
    </>
  );
}
