import { ThreeDots } from 'react-loader-spinner';
import { Backdrop, Container } from './Loader.styled';

const Loader = () => {
  return (
    <Backdrop>
      <Container>
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#52c4db"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      </Container>
    </Backdrop>
  );
};

export default Loader;
