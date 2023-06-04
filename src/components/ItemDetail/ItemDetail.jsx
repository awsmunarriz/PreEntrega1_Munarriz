import "./ItemDetail.css";

const ItemDetail = ({ name, img, category, descripcion, price }) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{name}</h2>
      </header>
      <picture>
        <img src={img} alt={name} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoria: {category}</p>
        <p className="Info">Descripcion: {descripcion}</p>
        <p className="Info">Precio: ${price}</p>
      </section>
      <footer className="ItemFooter"></footer>
    </article>
  );
};

export default ItemDetail;
