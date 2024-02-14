import SplashScreen from "@/components/FullScreenLoader";
import RandomFact from "@/components/fact";
import Header from "@/components/header";
import Info from "@/components/info";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>
      <SplashScreen />
      <main className="">
        <Header />
        <Skills />
        <RandomFact />
      </main>
    </>
  );
}
