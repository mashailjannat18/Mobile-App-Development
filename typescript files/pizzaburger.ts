export type ItemProps = {
    id: number;
    image: string;
    title: string;
    price: string;
};

export type PizzaBurgerProps = {
  myProps: ItemProps[];
};

export type itemType = {
  item: ItemProps;
};