import { Input, InputProps, forwardRef } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BasicInputProps extends InputProps {
  children?: ReactNode;
}
export const BasicInput = forwardRef<InputProps, "input">(
  ({ children, ...rest }: BasicInputProps, ref) => {
    return (
      <Input
        ref={ref}
        p="5px 5px 5px 10px"
        borderColor="#3C5192"
        fontSize="16px"
        borderRadius="4px"
        {...rest}
      >
        {children}
      </Input>
    );
  }
);
