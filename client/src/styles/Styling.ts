import { styled } from "@mui/material";


export const useStyles = {
  layout: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

export const AnimatedText = styled('span')`
  @keyframes textChange {
     0% { content: "Software"; }
    25% { content: "QA"; }
    50% { content: "DevOps"; }
    75% { content: "Low-Code"; }
    100% { content: "Software"; }
  }

  &::before {
    content: "Software";
    animation: textChange 6s infinite;
     color: green; /* Initial color */
  }
`;