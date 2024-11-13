// src/screens/NotificationsScreen.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const NotificationCard: React.FC<{ title: string; description: string; onPress: () => void }> = ({ title, description, onPress }) => (
  <TouchableOpacity style={styles.notificationCard} onPress={onPress}>
    <Icon name="exclamation-circle" size={24} color="#333" style={styles.notificationIcon} />
    <View style={styles.notificationContent}>
      <Text style={styles.notificationTitle}>{title}</Text>
      <Text style={styles.notificationDescription}>{description}</Text>
    </View>
    <Icon name="bell" size={24} color="#333" style={styles.notificationAlertIcon} />
  </TouchableOpacity>
);

const NotificationsScreen: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Unread');

  const handleFilterPress = (filter: string) => {
    setSelectedFilter(filter);
    console.log(`Filter selected: ${filter}`);
  };

  const handleNotificationPress = () => {
    console.log("Notification pressed");
  };

  const handleNavPress = (nav: string) => {
    console.log(`Navigation pressed: ${nav}`);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} />
        <TouchableOpacity onPress={() => console.log("Menu pressed")}>
          <Icon name="bars" size={24} color="#333" />
        </TouchableOpacity>
      </View>
      
      {/* Separator Line */}
      <View style={styles.separator} />

      {/* Title */}
      <Text style={styles.notificationsTitle}>Notifications</Text>

      {/* Filter Buttons */}
      <View style={styles.filterButtons}>
        {["All", "Unread", "Read", "Status", "Remove"].map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterButton,
              selectedFilter === filter ? styles.activeFilterButton : null,
            ]}
            onPress={() => handleFilterPress(filter)}
          >
            <Text style={selectedFilter === filter ? styles.activeFilterText : styles.filterText}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Notification List */}
      <ScrollView style={styles.notificationsList}>
        {Array.from({ length: 6 }).map((_, index) => (
          <NotificationCard
            key={index}
            title="Notification Heading"
            description="Notification Description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id."
            onPress={handleNotificationPress}
          />
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigation}>
        {["home", "file", "bell", "user"].map((icon, index) => (
          <TouchableOpacity key={index} onPress={() => handleNavPress(icon)}>
            <Icon name={icon} size={24} color="#333" /> {/* Removed background color */}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0', // Light gray line to separate the top bar
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  notificationsTitle: {
    margin: 16,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
    backgroundColor: '#f0f0f0',
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  filterText: {
    fontSize: 16,
    color: '#333',
  },
  activeFilterButton: {
    backgroundColor: '#d1b055', // Yellow color for the active filter
  },
  activeFilterText: {
    color: '#fff',
  },
  notificationsList: {
    flex: 1,
    padding: 16,
  },
  notificationCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  notificationIcon: {
    marginRight: 12,
    color: '#333', // Ensures icon color consistency
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  notificationDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  notificationAlertIcon: {
    marginLeft: 12,
    color: '#333', // Ensures icon color consistency
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 8,
    backgroundColor: '#fff',
  },
});
