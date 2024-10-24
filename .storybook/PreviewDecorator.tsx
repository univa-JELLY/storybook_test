import React from "react";
import { Decorator } from "@storybook/react";
import { ThemeProvider, createTheme } from "@mui/material";

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const PreviewDecorator: Decorator = (Story, context) => {
  const { mode } = context.globals;

  const theme = React.useMemo(() => {
    switch (mode) {
      case "light":
        return lightTheme;

      case "dark":
        return darkTheme;

      default:
        return lightTheme;
    }
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  );
};

export default PreviewDecorator;
