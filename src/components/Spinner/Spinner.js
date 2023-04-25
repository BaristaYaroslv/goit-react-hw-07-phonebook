import { Bars } from 'react-loader-spinner';
import { Overlay } from './Spinner.styled';

const Spinner = () => {
  return (
    <Overlay className="overlay">
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Overlay>
  );
};

export default Spinner;
