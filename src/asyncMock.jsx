const products = [
  {
    id: "1",
    name: "Iphone 12",
    price: 211600,
    category: "celular",
    img: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-12-pro-pacific-blue-back.png?v=34",
    stock: 25,
    descripcion: "Descripcion de Iphone 12",
  },
  {
    id: "2",
    name: "Samsung A13",
    price: 125999,
    category: "celular",
    img: "https://images.fravega.com/f500/c93187b609899f51b11399d511cc117a.jpg",
    stock: 25,
    descripcion: "Descripcion de Samsung A13",
  },
  {
    id: "3",
    name: "Tablet A7 Lite",
    price: 61999,
    category: "tablet",
    img: "https://http2.mlstatic.com/D_NQ_NP_860534-MLU69483007614_052023-O.webp",
    stock: 25,
    descripcion: "Descripcion de Tablet A7 Lite",
  },
  {
    id: "4",
    name: "Notebook Samsung i5",
    price: 250000,
    category: "notebook",
    img: "https://http2.mlstatic.com/D_NQ_NP_976983-MLA29102740253_012019-O.jpg",
    stock: 25,
    descripcion: "Descripcion de Notebook Samsung i5",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};
