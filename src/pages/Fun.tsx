
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageConstruction } from "@/components/PageConstruction";

const Fun = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <PageConstruction title="Fun Page" />
      </main>
      <Footer />
    </div>
  );
};

export default Fun;
