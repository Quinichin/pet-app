import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  View,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import COLORS from '../../const/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import pets from '../../const/pets';
const { height } = Dimensions.get('window');
const petCategories = [
  { name: 'CATS', icon: 'cat' },
  { name: 'DOGS', icon: 'dog' },
  // { name: 'BIRDS', icon: 'bird' },
  // { name: 'BUNNIES', icon: 'rabbit' },
];

const Card = ({ pet, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('DetailsScreen', pet)}
    >
      <View style={style.cardContainer}>
        {/* Render the card image */}
        <View style={style.cardImageContainer}>
          <Image
            source={pet.image}
            style={{
              height: 150,
              width: 140,
              borderRadius: 20,
              resizeMode: 'contain',
            }}
          />
        </View>

        {/* Render all the card details here */}
        <View style={style.cardDetailsContainer}>
          {/* Name and gender icon */}
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text
              style={{ fontWeight: 'bold', color: COLORS.dark, fontSize: 20 }}
            >
              {pet.name}
            </Text>
            <Icon name={pet.gender} size={22} color={COLORS.primary} />
          </View>

          {/* Render the age and type */}
          <Text style={{ fontSize: 16, marginTop: 5, color: COLORS.dark }}>
            {pet.type}
          </Text>
          <Text style={{ fontSize: 16, marginTop: 5, color: COLORS.secondary }}>
            {pet.age}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = ({ navigation }) => {
  const [selectedCategoryIndex, setSeletedCategoryIndex] = React.useState(0);
  const [filteredPets, setFilteredPets] = React.useState([]);

  const fliterPet = (index) => {
    const currentPets = pets.filter(
      (item) => item.pet.toUpperCase() == petCategories[index].name
    )[0].pets;
    setFilteredPets(currentPets);
  };

  React.useEffect(() => {
    fliterPet(0);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, color: COLORS.white }}>
      <View style={style.header}>
        <Text
          style={{ color: COLORS.primary, fontWeight: 'bold', fontSize: 24 }}
        >
          Pet Adoption
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.mainContainer}>
          {/* Render the search inputs and icons */}
          <View style={style.searchInputContainer}>
            <Icon name="magnify" size={24} color={COLORS.grey} />
            <TextInput
              placeholderTextColor={COLORS.grey}
              placeholder="Search pet to adopt"
              style={{ flex: 1 }}
            />
            <Icon name="sort-ascending" size={24} color={COLORS.grey} />
          </View>

          {/* Render all the categories */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 20,
            }}
          >
            {petCategories.map((item, index) => (
              <View
                key={'pet' + index}
                style={{ alignItems: 'center', marginHorizontal: 20 }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setSeletedCategoryIndex(index);
                    fliterPet(index);
                  }}
                  style={[
                    style.categoryBtn,
                    {
                      backgroundColor:
                        selectedCategoryIndex == index
                          ? COLORS.primary
                          : COLORS.white,
                    },
                  ]}
                >
                  <Icon
                    name={item.icon}
                    size={30}
                    color={
                      selectedCategoryIndex == index
                        ? COLORS.white
                        : COLORS.primary
                    }
                  />
                </TouchableOpacity>
                <Text style={style.categoryBtnName}>{item.name}</Text>
              </View>
            ))}
          </View>

          {/* Render the cards with flatlist */}
          <View style={{ marginTop: 20 }}>
            {filteredPets.map((pet) => (
              <Card pet={pet} navigation={navigation} key={pet.id} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.light,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 20,
    minHeight: height,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.white,
    borderRadius: 7,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryBtn: {
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  categoryBtnName: {
    color: COLORS.dark,
    fontSize: 10,
    marginTop: 5,
    fontWeight: 'bold',
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  cardDetailsContainer: {
    height: 120,
    backgroundColor: COLORS.white,
    flex: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
    justifyContent: 'center',
  },
  cardImageContainer: {
    height: 150,
    width: 140,
    borderRadius: 20,
    backgroundColor: COLORS.background,
  },
});
export default HomeScreen;
