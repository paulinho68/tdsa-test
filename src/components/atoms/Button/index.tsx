import { Button as ButtonChakra, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BasicInputProps extends ButtonProps {
  children?: ReactNode;
}

export const Button = ({ children, ...rest }: BasicInputProps) => {
  return (
    <ButtonChakra
      colorScheme="teal"
      type="button"
      bgColor="#3C5192"
      w="100%"
      {...rest}
    >
      {children}
    </ButtonChakra>
  );
};
