import { ActionP, ContainerDiv, DescriptionP, StartLink, TitleH1 } from "./Home.styled";

export function Home() {
  return (
    <ContainerDiv>
      <TitleH1>Welcome to Car Rent!</TitleH1>

      <DescriptionP>Your perfect place to find a car to rent!</DescriptionP>

      <ActionP>
        Click <StartLink to="catalog">Start</StartLink> to commence discovering our wide selection
        of cars!
      </ActionP>
    </ContainerDiv>
  );
}
