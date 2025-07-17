import "@/styles/globals.css";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type { AppProps } from "next/app";
const theme = createTheme({
  palette: {
    primary: {
      main: '#c9f31d', // Red color
      light: '#ffcdd2',
      dark: '#d32f2f',
      contrastText: '#ffffff',
    },
    // Optional: You can also customize secondary color
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
