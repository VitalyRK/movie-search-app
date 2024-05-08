import { Center, Loader } from "@mantine/core";

function LoaderCenter() {
  return (
    <Center h={"100%"}>
      <Loader type="bars" />
    </Center>
  );
}

export default LoaderCenter;
