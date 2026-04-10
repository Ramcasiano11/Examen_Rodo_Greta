import './card.css';
interface Props {
    nombre: string;
    imagen: string;
    nivel: string;
}

function Card({ nombre, imagen, nivel }: Props) {
    return (
        <>
        <div className={`card ${nivel === "In Training" ? "card1" : nivel === "Rookie" ? "card2" : nivel === "Champion" ? "card3" : nivel ==="Ultimate" ? "card4" : nivel === "Mega" ? "card5" : nivel === "Fresh" ? "card6" : ""}`}>
            <div className="card img">
                <img src={imagen} alt={nombre} />  
            </div>
            <h3>{nombre}</h3>
            <p>Nivel: {nivel}</p>
        </div>
        </>
    )
}

export default Card;