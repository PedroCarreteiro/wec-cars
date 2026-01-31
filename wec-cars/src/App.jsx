import { useState, useEffect } from 'react'
import './App.css'
import Element from './components/Element/Element'
import data from './db/db.json'

export default function App() {

    const [favoritos, setFavoritos] = useState(() => {
        const salvos = localStorage.getItem('meusFavoritos');
        return salvos ? JSON.parse(salvos) : [];
    });

    const [filtro, setFiltro] = useState("Todos");

    useEffect(() => {
        localStorage.setItem("meusFavoritos", JSON.stringify(favoritos));
    }, [favoritos]);

    const controleFavorito = (id) => {
        if (favoritos.includes(id)) {
            setFavoritos(favoritos.filter((favId) => favId !== id));
        } else {
            setFavoritos([...favoritos, id]);
        }
    };

    const carrosFiltrados = data.filter((carro) => {
        if (filtro === "Todos") return true;
        return carro.categoria === filtro;
    });
    
    return (
        <>
            <main>
                <div className='initial'>
                    <h1>Carros da WEC/2025</h1>
                    <p>Favoritos: {`${favoritos.length}`}</p>
                </div>

                <div className='filtros'>
                    <button className={filtro === "Todos" ? "btnFiltroAll ativo" : "btnFiltroAll"} onClick={() => setFiltro("Todos")}>Todos</button>
                    <button className={filtro === "LMH" ? "btnFiltroLMH ativo" : "btnFiltroLMH"} onClick={() => setFiltro("LMH")}>LMH</button>
                    <button className={filtro === "LMGT3" ? "btnFiltroLMGT3 ativo" : "btnFiltroLMGT3"} onClick={() => setFiltro("LMGT3")}>LMGT3</button>
                </div>

                <div className='cardsContainer'>
                    {carrosFiltrados.map((item) => (
                        <Element
                            key={item.id}
                            carro={item.carro}
                            equipe={item.equipe} 
                            fabricante={item.fabricante}
                            imagemCarro={item.imagem_carro}
                            imagemFabricante={item.imagem_fabricante}
                            categoria={item.categoria}
                            favorito={favoritos.includes(item.id)}
                            favoritar={() => controleFavorito(item.id)}
                        />
                    ))}
                </div>
            </main>
        </>
    )
}
