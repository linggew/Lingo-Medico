import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Settings, About, DisclaimerInfo, Help, Home } from '../screens';
import ProfileStack from '../routes/ProfileStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Image, View, Text } from 'react-native';
import { UseUIContext } from '../utils/context';

const Drawer = createDrawerNavigator();

interface Props {
  initialRouteName: string;
}

/**
 * Root navigator for entire application. Nested navigation structure that
 * contains the profileStack stack navigator. Render either the home screen
 * or the profile stack depending on data retrieved from storage in App.tsx.
 * Apply color theme and font size settings to all screens.
 *
 * @param props
 */
export default function DrawerNav(props: Props) {
  const { colorMode, fontMode } = UseUIContext();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={props.initialRouteName}
        screenOptions={{
          headerTintColor: colorMode === 'dark' ? '#fff' : 'black',
          drawerStyle: [
            { width: 240 },
            {
              backgroundColor:
                colorMode === 'dark'
                  ? 'black'
                  : colorMode === 'peach'
                  ? '#EFD3CF'
                  : colorMode === 'blue'
                  ? '#DEEEF5'
                  : '#fff'
            }
          ],
          headerStyle: {
            backgroundColor:
              colorMode === 'dark'
                ? '#595d63'
                : colorMode === 'peach'
                ? '#eebab4'
                : colorMode === 'blue'
                ? '#C0E9F9'
                : '#fff'
          }
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: 'LINGO MEDICO',
            drawerLabelStyle: {
              fontSize:
                fontMode === 'small' ? 12 : fontMode === 'large' ? 20 : 16,
              color: colorMode === 'dark' ? '#bdb1e3' : 'black'
            },
            headerTitleStyle: {
              fontSize:
                fontMode === 'small' ? 16 : fontMode === 'large' ? 24 : 20,
              color: colorMode === 'dark' ? '#bdb1e3' : 'black'
            },
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row'
                }}
              >
                <Image
                  source={require('../../assets/Logo.png')}
                  style={{
                    height: 50,
                    width: 50,
                    aspectRatio: 1,
                    resizeMode: 'contain'
                  }}
                ></Image>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: '#1D2468'
                  }}
                >
                  Lingo Medico
                </Text>
              </View>
            )
          }}
        />
        <Drawer.Group screenOptions={{ headerShown: false }}>
          <Drawer.Screen
            name="ProfileStack"
            component={ProfileStack}
            options={{
              title: 'Create a New Profile',
              drawerLabelStyle: {
                fontSize:
                  fontMode === 'small' ? 12 : fontMode === 'large' ? 20 : 16,
                color: colorMode === 'dark' ? '#bdb1e3' : 'black'
              },
              headerTitleStyle: {
                fontSize:
                  fontMode === 'small' ? 16 : fontMode === 'large' ? 24 : 20,
                color: colorMode === 'dark' ? '#bdb1e3' : 'black'
              }
            }}
          />
        </Drawer.Group>
        <Drawer.Screen
          name="Help"
          component={Help}
          options={{
            drawerLabelStyle: {
              fontSize:
                fontMode === 'small' ? 12 : fontMode === 'large' ? 20 : 16,
              color: colorMode === 'dark' ? '#bdb1e3' : 'black'
            },
            headerTitleStyle: {
              fontSize:
                fontMode === 'small' ? 16 : fontMode === 'large' ? 24 : 20,
              color: colorMode === 'dark' ? '#bdb1e3' : 'black'
            },
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row'
                }}
              >
                <Image
                  source={require('../../assets/Logo.png')}
                  style={{
                    height: 50,
                    width: 50,
                    aspectRatio: 1,
                    resizeMode: 'contain'
                  }}
                ></Image>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#1D2468'
                  }}
                >
                  Help
                </Text>
              </View>
            )
          }}
        />
        <Drawer.Screen
          name="Disclaimer Info"
          component={DisclaimerInfo}
          options={{
            drawerLabelStyle: {
              fontSize:
                fontMode === 'small' ? 12 : fontMode === 'large' ? 20 : 16,
              color: colorMode === 'dark' ? '#bdb1e3' : 'black'
            },
            headerTitleStyle: {
              fontSize:
                fontMode === 'small' ? 16 : fontMode === 'large' ? 24 : 20,
              color: colorMode === 'dark' ? '#bdb1e3' : 'black'
            },
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row'
                }}
              >
                <Image
                  source={require('../../assets/Logo.png')}
                  style={{
                    height: 50,
                    width: 50,
                    aspectRatio: 1,
                    resizeMode: 'contain'
                  }}
                ></Image>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#1D2468'
                  }}
                >
                  Disclaimer
                </Text>
              </View>
            )
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerLabelStyle: {
              fontSize:
                fontMode === 'small' ? 12 : fontMode === 'large' ? 20 : 16,
              color: colorMode === 'dark' ? '#bdb1e3' : 'black'
            },
            headerTitleStyle: {
              fontSize:
                fontMode === 'small' ? 16 : fontMode === 'large' ? 24 : 20,
              color: colorMode === 'dark' ? '#bdb1e3' : 'black'
            },
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row'
                }}
              >
                <Image
                  source={require('../../assets/Logo.png')}
                  style={{
                    height: 50,
                    width: 50,
                    aspectRatio: 1,
                    resizeMode: 'contain'
                  }}
                ></Image>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#1D2468'
                  }}
                >
                  About
                </Text>
              </View>
            )
          }}
        />
        <Drawer.Screen
          name="Settings"
          component={Settings}
          options={{
            drawerLabelStyle: {
              fontSize:
                fontMode === 'small' ? 12 : fontMode === 'large' ? 20 : 16,
              color: colorMode === 'dark' ? '#bdb1e3' : 'black'
            },
            headerTitleStyle: {
              fontSize:
                fontMode === 'small' ? 16 : fontMode === 'large' ? 24 : 20,
              color: colorMode === 'dark' ? '#bdb1e3' : 'black'
            },
            headerTitle: () => (
              <View
                style={{
                  flexDirection: 'row'
                }}
              >
                <Image
                  source={require('../../assets/Logo.png')}
                  style={{
                    height: 50,
                    width: 50,
                    aspectRatio: 1,
                    resizeMode: 'contain'
                  }}
                ></Image>
                <Text
                  style={{
                    alignSelf: 'center',
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#1D2468'
                  }}
                >
                  Settings
                </Text>
              </View>
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
