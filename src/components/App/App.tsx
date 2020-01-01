import React, { ReactNode } from 'react';
import { ThemeProvider } from 'emotion-theming';

import theme from '../../theme';

/**
 * This component exists to provide a reusable application wrapper for use in Gatsby API's, testing, etc.
 */
const App = ({ element }: { element: ReactNode }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

export default App;
