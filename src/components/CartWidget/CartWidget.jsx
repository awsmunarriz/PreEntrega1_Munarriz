import IconButton from "@mui/material/IconButton";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Badge from "@mui/material/Badge";

const CartWidget = () => {
  return (
    <IconButton size="large" aria-label="show 4 new products" color="inherit">
      <Badge badgeContent={4} color="error">
        <LocalGroceryStoreIcon />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;
