import { createContext, useContext } from "react";

// Create the Theme context
const ThemeContext = createContext({
  ThemeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// Export the ThemeProvider
export const ThemeProvider = ThemeContext.Provider;

// Custom hook to use the Theme context
export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
