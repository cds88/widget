import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import WidgetTHR08 from '../components/WidgetOrganisms/WidgetTHR08';
 
import { WidgetErrorFallback, WidgetLoadingFallback } from '../components/WidgetMolecules/WidgetFallbacks';
import { AppWrapper } from './styled';
const queryClient = new QueryClient();



const App = () => {
 
  return (
    <AppWrapper>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<WidgetLoadingFallback  />}>
          <ErrorBoundary FallbackComponent={WidgetErrorFallback}>
            <WidgetTHR08 />
          </ErrorBoundary>
        </Suspense>
      </QueryClientProvider>
    </AppWrapper>
  );
};

export default App;
