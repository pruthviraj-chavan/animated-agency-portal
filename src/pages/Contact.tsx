
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageConstruction } from "@/components/PageConstruction";

const Contact = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-24">
        <PageConstruction title="Contact Us" />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
