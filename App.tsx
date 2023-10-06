import { ThemeProvider } from '@shopify/restyle';
import { theme } from '@/theme';
import Routes from '@/routes/index.routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme} >
        <StatusBar
          backgroundColor='transparent'
          translucent
          barStyle='light-content'
        />
        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

