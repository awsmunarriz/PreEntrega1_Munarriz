import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Precio: ${price}
          <br />
          Stock disponible: {stock}
        </Card.Text>
        <Link to={`/item/${id}`} className="btn btn-primary">
          Ver detalle
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
