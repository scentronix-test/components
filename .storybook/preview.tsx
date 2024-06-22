import React from "react";
import { Preview } from "@storybook/react";
import { ThemeProvider } from "@emotion/react";
import { muiTheme } from "../src/theme/mui";
import { CssBaseline } from "@mui/material";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story: any) => (
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default preview;
