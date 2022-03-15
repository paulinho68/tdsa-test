import { Input, InputProps } from "@chakra-ui/react";
import React, { ReactNode, useRef } from "react";

interface BasicInputProps extends InputProps {
  children?: ReactNode;
}

export const BasicInput = React.forwardRef(
  ({ children, ...rest }: BasicInputProps, ref) => {
    console.log(rest);
    const node = useRef<HTMLInputElement>(null);
    return (
      <Input
        ref={node}
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
