import { Box } from 'components/Box';
import { Oval } from 'react-loader-spinner';

export default function Loader() {
  return (
    <Box display="flex" justifyContent="center">
      <Oval
        height={100}
        width={100}
        color="#fc842d"
        // color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#9b9faa"
        // secondaryColor="#4fa94d"
        strokeWidth={1}
        strokeWidthSecondary={2}
      />
    </Box>
  );
}
