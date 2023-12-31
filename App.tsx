import { ThemeProvider } from '@shopify/restyle';
import { theme } from '@/theme';
import Routes from '@/routes/index.routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { store } from '@/feature/store';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider store={store}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <ThemeProvider theme={theme} >
              <StatusBar
                backgroundColor='transparent'
                translucent
                barStyle='light-content'
              />
              <Routes />
            </ThemeProvider>
          </GestureHandlerRootView>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

