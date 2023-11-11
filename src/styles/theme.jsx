/* Usage example:

const SomeName = styled.div`
  color: ${({theme}) => theme.color.white};
  background-color: ${({theme}) => theme.color.blue};
  

  &:hover, &:focus {
    color: ${({theme}) => theme.color.white};
    background-color: ${({theme}) => theme.color.blueHover};
  }

  @media screen and (min-width: ${({theme}) => theme.breakpoint.tablet}) {
    color: ${({theme}) => theme.color.blackMain};
    background-color: ${({theme}) => theme.color.greyBackgroundTag};
  }
`
*/

export const theme = {
  // Colors
  color: {
    white: "#FFFFFF",

    greyBackgroundSelect: "#F7F7FB",
    greyBackgroundTag: "#F9F9F9",
    greyFilterTitle: "#8A8A89",
    greyOption: "rgba(18, 20, 23, 0.2)",
    greyDescription: "rgba(18, 20, 23, 0.5)",

    blackMain: "#121417",
    blackSecond: "#363535",

    blue: "#3470FF",
    blueHover: "#0B44CD",

    backdropBackground: "rgba(18, 20, 23, 0.50)",

    imageBackground: "#a6a6a6",
  },

  // Breakpoints
  breakpoint: {
    firstMobile: "320px",
    mobile: "375px",
    tablet: "768px",
    desktop: "1440px",
  },

  // Animation (transition) on hover & focus
  transition: {
    main: "250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)",
    modal: "300ms ease-in-out",
  },

  gradient: "linear-gradient(180deg, rgba(18, 20, 23, 0.50) 2.5%, rgba(18, 20, 23, 0.00) 41.07%)",
};
