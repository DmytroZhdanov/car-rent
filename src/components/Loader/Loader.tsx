import { FC, ReactElement } from "react";
import { ThreeDots } from "react-loader-spinner";

import { Backdrop, Container } from "./Loader.styled";

const Loader: FC = (): ReactElement => {
  return (
    <Backdrop>
      <Container>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#3470FF"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </Container>
    </Backdrop>
  );
};

export default Loader;
