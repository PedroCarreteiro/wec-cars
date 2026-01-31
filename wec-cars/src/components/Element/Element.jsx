import "./Element.css"

export default function Element({carro, equipe, fabricante, imagemCarro, imagemFabricante, categoria, favorito, favoritar}){
    
    let classes = `card ${categoria}`;

    if(favorito){
        classes += ` favorito${categoria}`; 
    }

    return (
        <article className={classes}>
            <img src={`src/assets/images/manufactures/${imagemFabricante}`} alt={`Logo ${fabricante}`} className="logoFabricante"/>

            <img src={`src/assets/images/cars/${imagemCarro}`} alt={`Imagem ${carro}`} className="imagemCarro"/>

            <div className="info">
                <h2>{carro}</h2>
                <p>Equipe: {equipe}</p>
                <p>Fabricante: {fabricante}</p>
                <img src={`src/assets/images/categories/${categoria}.png`} alt={`Imagem ${categoria}`} className="imagemCategoria"/>
            </div>

            <button onClick={favoritar} className="btnFavorito">
                {favorito ? "Desfavoritar" : "Favoritar"}    
            </button>
        </article>
    ); 
}