import "./styles.css";
import Header from "../../components/Header";
import CatalogCard from "../../components/CatalogCard";
import Depoimentos from "../../components/Depoimentos";
import Footer from "../../components/Footer";

export default function Catalog() {
    return(
        <>
        <Header/>
        <main className="catalog-main">
            <section id="catalog-section">
                <h2>Venha nos visitar</h2>
                <div >
                   <CatalogCard/>
                   <CatalogCard/>
                </div>

                <div className="catalog-card-container">
                 <Depoimentos/>
                </div>

            </section>
        </main>

        <footer>
        <Footer/>
        </footer>
        </>
        
    );
}

