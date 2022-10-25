import React from 'react';
import {
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  View,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../const/colors';

const DetailsScreen = ({ navigation, route }) => {
  const pet = route.params;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <StatusBar backgroundColor={COLORS.background} />
      <View
        style={{
          height: 280,
          backgroundColor: COLORS.background,
        }}
      >
        <ImageBackground
          resizeMode="contain"
          source={pet.image}
          style={{
            height: 160,
          }}
        >
          {/* Render  Header */}
          <View style={style.header}>
            <Icon
              name="arrow-left"
              size={28}
              color={COLORS.dark}
              onPress={navigation.goBack}
            />
            <Icon name="dots-vertical" size={28} color={COLORS.dark} />
          </View>
        </ImageBackground>

        <View style={style.detailsContainer}>
          {/* Pet name and gender icon */}
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text
              style={{ fontSize: 20, color: COLORS.dark, fontWeight: 'bold' }}
            >
              {pet.name}
            </Text>
            <Icon name="gender-male" size={25} color={COLORS.primary} />
          </View>

          {/* Render Pet type and age */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 12, color: COLORS.dark }}>{pet.type}</Text>
            <Text style={{ fontSize: 13, color: COLORS.dark }}>{pet.age}</Text>
          </View>

          {/* Render location and icon */}
          {/* 
          <View style={{ marginTop: 5, flexDirection: 'row' }}>
            <Icon name="map-marker" color={COLORS.primary} size={20} />
            <Text style={{ fontSize: 14, color: COLORS.grey, marginLeft: 5 }}>
              5 Bulvarna-Kudriavska Street, Kyiv
            </Text>
          </View>
          */}
        </View>
      </View>

      {/* Comment container */}
      <ScrollView
        style={{ marginTop: 60, paddingHorizontal: 20, marginBottom: 90 }}
      >
        <View style={{ flex: 1 }}>
          {/* Render Common information about Pet */}
          <View style={style.partInfo}>
            <Text style={style.title}>Properties</Text>
            <View style={style.ruler} />
            <View style={style.groupIcon}>
              <View style={style.shortInfo}>
                <IconMaterial
                  name="cloud-done"
                  size={25}
                  color={COLORS.primary}
                />
                <Text style={{ marginLeft: 12,fontSize:16 }}>Tiêm dại</Text>
              </View>
              <View style={style.shortInfo}>
                <IconMaterial
                  name="cloud-done"
                  size={25}
                  color={COLORS.primary}
                />
                <Text style={{ marginLeft: 12,fontSize:16 }}>Tiêm phòng bệnh</Text>
              </View>
              <View style={style.shortInfo}>
                <Icon name="cloud-question" size={25} color={COLORS.pending} />
                <Text style={{ marginLeft: 12,fontSize:16 }}>Triệt sản</Text>
              </View>
              <View style={style.shortInfo}>
                <Icon name="cloud-question" size={25} color={COLORS.pending} />
                <Text style={{ marginLeft: 12,fontSize:16 }}>Chế độ ăn riêng</Text>
              </View>
              <View style={style.shortInfo}>
                <Icon name="cloud-question" size={25} color={COLORS.pending} />
                <Text style={{ marginLeft: 12,fontSize:16 }}>Đi vệ sinh đúng</Text>
              </View>
              <View style={style.shortInfo}>
                <IconMaterial
                  name="cloud-done"
                  size={25}
                  color={COLORS.primary}
                />
                <Text style={{ marginLeft: 12,fontSize:16 }}>Thân thiện</Text>
              </View>
            </View>
          </View>
          {/* Render description about Pet */}
          <View style={style.partInfo}>
            <Text style={style.title}>Information</Text>
            <View style={style.ruler} />
            <View style={{ marginTop: 12 }}>
              <Text>{pet.description}</Text>
            </View>
          </View>
          {/* Render Gallery about Pet */}
          <View style={style.partInfo}>
            <Text style={style.title}>Gallery</Text>
            <View style={style.ruler} />
            <View style={style.galleryImg}>
              {pet.gallery.map((img, idx) => (
                <View key={`${pet.id}-${idx}`} style={style.gallery}>
                  <Image source={img} style={style.gallery} />
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Render footer */}
      </ScrollView>
      <View style={style.footer}>
        <View style={style.iconCon}>
          <Icon name="heart-outline" size={22} color={COLORS.white} />
        </View>
        <View style={style.btn}>
          <Text style={{ color: COLORS.white, fontWeight: 'bold' }}>
            ADOPTION
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  detailsContainer: {
    height: 100,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    bottom: -40,
    borderRadius: 18,
    elevation: 10,
    padding: 20,
    justifyContent: 'center',
  },
  partInfo: {
    marginVertical: 12,
  },
  groupIcon: {
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  shortInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    margin: 5,
  },
  comment: {
    marginTop: 10,
    fontSize: 14,
    color: COLORS.dark,
    lineHeight: 20,
    marginHorizontal: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: COLORS.light,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  iconCon: {
    backgroundColor: COLORS.primary,
    width: 50,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  btn: {
    backgroundColor: COLORS.primary,
    flex: 1,
    height: 50,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ruler: {
    marginTop: 5,
    width: 40,
    height: 1,
    backgroundColor: 'black',
  },
  galleryImg: {
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  gallery: {
    width: 150,
    height: 200,
    margin: 5,
  },
});
export default DetailsScreen;
