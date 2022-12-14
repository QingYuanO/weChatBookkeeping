import { PropsWithChildren } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './app.scss';
import useQueryConfig from './hooks/useQueryConfig';

const queryClient = new QueryClient();

function App({ children }: PropsWithChildren<{}>) {
  useQueryConfig()
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

export default App;
