import { globalStyles } from '@/styles/global-styles'
import { useFonts } from 'expo-font'
import * as NavigationBar from 'expo-navigation-bar'
import { Slot, SplashScreen } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { useEffect } from 'react'
import { Platform, View } from 'react-native'

const isAndroid = Platform.OS === 'android'

if (isAndroid) {
  NavigationBar.setPositionAsync('absolute')
  NavigationBar.setButtonStyleAsync('light')
}



const RootLayout = () => {
  const [loaded] = useFonts({
    'SpaceMono': require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={globalStyles.background}>
      <Slot />
      <StatusBar style="light" />
    </View>
  )
}

export default RootLayout