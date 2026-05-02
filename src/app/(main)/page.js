import Banner from "@/components/main/banner/Banner";
import Featured from "@/components/main/featured/Featured";
import MarqueePage from "@/components/main/MarqueePage";

export default async function Home() {

  return (
    <div className="">
      <MarqueePage />

      <Banner />

      <Featured />
    </div>
  );
}
