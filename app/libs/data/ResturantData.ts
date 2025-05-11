
import { Restaurant } from "../types/resturant"

export const restaurants: Restaurant[] = [
    {
      id: '1',
      name: 'Italian Bistro',
      cuisine: 'Italian',
      rating: 4.5,
      deliveryTime: '30-45 min',
      priceRange: '$$',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
      address: '123 Main St, New York, NY',
      phone: '(555) 123-4567',
      hours: 'Mon-Fri: 11am-10pm, Sat-Sun: 10am-11pm',
      menu: [
        {
          category: 'Appetizers',
          items: [
            {
              id: '101',
              name: 'Bruschetta',
              description: 'Toasted bread topped with tomatoes, garlic, and basil',
              price: 8.99
            },
            {
              id: '102',
              name: 'Calamari',
              description: 'Fried squid served with marinara sauce',
              price: 12.99
            }
          ]
        },
        {
          category: 'Main Courses',
          items: [
            {
              id: '201',
              name: 'Spaghetti Carbonara',
              description: 'Pasta with eggs, cheese, pancetta, and pepper',
              price: 16.99
            }
          ]
        }
      ]
    },
]