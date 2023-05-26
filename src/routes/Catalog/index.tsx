import "./styles.css";
import Header from "../../components/Header";
import CatalogCard from "../../components/CatalogCard";
import Depoimentos from "../../components/Depoimentos";
import Footer from "../../components/Footer";

export default function Catalog() {
  return (
    <>
      <Header />
      <main>
        <section id="catalog-section">
          <h2>Venha nos visitar</h2>
          <div>
            <CatalogCard />
            <CatalogCard />
          </div>
        </section>

        <section>
          <div>
            <Depoimentos />
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
