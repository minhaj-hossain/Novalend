import Accordion from "@/components/main/accordion/Accordion";
import Banner from "@/components/main/banner/Banner";
import Featured from "@/components/main/featured/Featured";
import MarqueePage from "@/components/main/marquee/MarqueePage";
import Testimonials from "@/components/main/testimonials/Testimonial";

export default async function Home() {

  return (
    <div className="">
      <MarqueePage />

      <Banner />

      <Featured />

      <Testimonials />
      <Accordion />
    </div>
  );
}
