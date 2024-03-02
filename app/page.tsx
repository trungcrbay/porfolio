
import RandomFact from "@/components/fact";
import Header from "@/components/header";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <>

      <main className="">
        <Header />
        <Skills />
        <RandomFact />
      </main>
    </>
  );
}
