// app/restaurants/[id].tsx
import { View, Text, FlatList, SafeAreaView, Image, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { restaurants } from '@/libs/data/ResturantData';
import { Restaurant } from '@/libs/types/resturant';

const RestaurantDetail = () => {
  const { id } = useLocalSearchParams();
  
  // Find the restaurant by ID
  const restaurant = restaurants.find(r => r.id === id);

  if (!restaurant) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>Restaurant not found</Text>
      </SafeAreaView>
    );
  }

  const renderMenuItem = ({ item }: { item: Restaurant['menu'][0]['items'][0] }) => (
    <View style={styles.menuItem}>
      <View style={styles.menuItemText}>
        <Text style={styles.menuItemName}>{item.name}</Text>
        <Text style={styles.menuItemDescription}>{item.description}</Text>
      </View>
      <Text style={styles.menuItemPrice}>${item.price.toFixed(2)}</Text>
    </View>
  );

  const renderMenuSection = ({ item }: { item: Restaurant['menu'][0] }) => (
    <View style={styles.menuSection}>
      <Text style={styles.menuSectionTitle}>{item.category}</Text>
      <FlatList
        data={item.items}
        renderItem={renderMenuItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={{ uri: restaurant.image }} 
        style={styles.headerImage}
        resizeMode="cover"
      />
      
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{restaurant.name}</Text>
        
        <View style={styles.metaContainer}>
          <Text style={styles.metaText}>{restaurant.cuisine}</Text>
          <Text style={styles.metaText}>⭐ {restaurant.rating}</Text>
          <Text style={styles.metaText}>{restaurant.priceRange}</Text>
          <Text style={styles.metaText}>🚚 {restaurant.deliveryTime}</Text>
        </View>
        
        <View style={styles.detailsContainer}>
          <Text style={styles.detailTitle}>Address</Text>
          <Text style={styles.detailText}>{restaurant.address}</Text>
          
          <Text style={styles.detailTitle}>Phone</Text>
          <Text style={styles.detailText}>{restaurant.phone}</Text>
          
          <Text style={styles.detailTitle}>Hours</Text>
          <Text style={styles.detailText}>{restaurant.hours}</Text>
        </View>
        
        <Text style={styles.menuTitle}>Menu</Text>
        <FlatList
          data={restaurant.menu}
          renderItem={renderMenuSection}
          keyExtractor={(item) => item.category}
          scrollEnabled={false}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  infoContainer: {
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  metaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  metaText: {
    backgroundColor: '#f3f4f6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    fontSize: 14,
  },
  detailsContainer: {
    marginBottom: 24,
  },
  detailTitle: {
    fontWeight: 'bold',
    marginTop: 8,
  },
  detailText: {
    color: '#4b5563',
  },
  menuTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  menuSection: {
    marginBottom: 24,
  },
  menuSectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1f2937',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  menuItemText: {
    flex: 1,
    marginRight: 16,
  },
  menuItemName: {
    fontWeight: '500',
    marginBottom: 4,
  },
  menuItemDescription: {
    color: '#6b7280',
    fontSize: 14,
  },
  menuItemPrice: {
    fontWeight: '600',
  },
});

export default RestaurantDetail;