import * as React from 'react';
import './app.css';

export const SystemInfoContext = React.createContext({});

const App = ({ children }) => {
  const [systemInfo, setSystemInfo] = React.useState({});
  return (
    <SystemInfoContext.Provider
      value={{
        systemInfo,
        setSystemInfo
      }}
    >
      {children}
    </SystemInfoContext.Provider>
  )
}

export default App;
