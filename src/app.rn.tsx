import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'react-native';
import './app.scss';
import useQueryConfig from './hooks/useQueryConfig';

const queryClient = new QueryClient();

function App({ children }: PropsWithChildren<{}>) {
  useQueryConfig();
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar translucent backgroundColor='rgba(0, 0, 0, 0)' barStyle='dark-content' />
      {children}
    </QueryClientProvider>
  );
}

export default App;
