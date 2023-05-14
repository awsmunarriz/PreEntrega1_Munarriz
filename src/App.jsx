import React from "react";
import "./App.css";

// COMPONENTS
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer"

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <Header
          greeting="- San Fernando -"
          subtitle="Capital de la Nautica Argentina"
        />
        <div className="ProductSection">
          <ItemListContainer
            name="Indumentaria"
            img="https://img.freepik.com/foto-gratis/retrato-hermosa-mujer-joven-atractiva-cabello-largo-vestida-traje-surfear-tabla-surf-lo-largo-orilla-su-leccion-estilo-vida-activo-deporte-verano-playa-tropical_291650-209.jpg"
          />
          <ItemListContainer
            name="Bodyboard"
            img="https://img.freepik.com/foto-gratis/surfista-activo-corre-oceano-felicidad-hace-salpicaduras-agua-lleva-bodyboard-brazo_273609-17716.jpg"
          />
          <ItemListContainer
            name="Skimboard"
            img="https://img.freepik.com/fotos-premium/amante-olas-apuesto-joven-sosteniendo-skimboard-ajustando-gafas-mientras-camina-playa_425904-23161.jpg"
          />
          <ItemListContainer
            name="Surfboard"
            img="https://img.freepik.com/foto-gratis/ajuste-positivo-deportista-saludable-disfruta-deportes-acuaticos-piensa-algo-agradable-mientras-sienta-playa-arena_273609-17786.jpg"
          />
        </div>
        <div className="ProductSection">
          <ItemListContainer
            name="Paddlesurf"
            img="https://img.freepik.com/foto-gratis/silueta-joven-bella-mujer-navegando-mar-al-amanecer_176420-2036.jpg"
          />
          <ItemListContainer
            name="Windsurf"
            img="https://img.freepik.com/foto-gratis/chico-joven-tabla-kitesurf_23-2148197340.jpg"
          />
          <ItemListContainer
            name="Kitesurf"
            img="https://img.freepik.com/fotos-premium/mujer-haciendo-kitesurf-aguas-oceano_695793-779.jpg"
          />
          <ItemListContainer
            name="Accesorios"
            img="https://img.freepik.com/foto-gratis/mujer-rubia-playa-tabla-surf_273609-15308.jpg"
          />
        </div>
        <Footer />
      </div>

    );
  }
}

export default App;
