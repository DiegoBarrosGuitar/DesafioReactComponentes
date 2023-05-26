import "./styles.css"
import carImg from "../../assets/car-card 1.png"; 


export default function CatalogCard() {
    return (
        <div className="card">
            <img src={carImg} alt="Car" />
            <h3>Audi TT</h3>
        </div>
    );
}