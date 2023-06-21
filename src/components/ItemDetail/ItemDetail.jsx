import { Card } from "react-bootstrap";

const ItemDetail = ({ name, img, category, descripcion, price }) => {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "18rem", margin: "18px" }}>
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Categoría: {category}
            <br />
            Descripción: {descripcion}
            <br />
            Precio: ${price}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
