// theme.js
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          primary: { main: '#1976d2' },
          background: { default: '#f5f5f5', paper: '#ffffff' },
          text: { primary: '#000000', secondary: '#555555' },
        }
      : {
      primary: { main: '#a78bfa' }, 
      background: { default: '#0f0e24', paper: 'transparent' },
      text: { primary: '#ffffff', secondary: '#c7c7c7' },
    }),
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`,
  },
});
