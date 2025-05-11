export type Restaurant = {
    id: string;
    name: string;
    cuisine: string;
    rating: number;
    deliveryTime: string;
    priceRange: string;
    image: string;
    address: string;
    phone: string;
    hours: string;
    menu: {
      category: string;
      items: {
        id: string;
        name: string;
        description: string;
        price: number;
      }[];
    }[];
  };