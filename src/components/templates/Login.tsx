import { Flex } from "@chakra-ui/react";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { LoginBox } from "../molecules/LoginBox";

interface LoginTemplateProps {
  onSubmit: SubmitHandler<any>;
  isInvalid: () => boolean;
  messageError: string | undefined;
  isSubmitting: boolean;
  register: UseFormRegister<any>;
  handleSubmit: UseFormHandleSubmit<any>;
}

export const LoginTemplate = ({
  isInvalid,
  onSubmit,
  isSubmitting,
  messageError,
  register,
  handleSubmit,
}: LoginTemplateProps) => {
  return (
    <Flex
      h="100vh"
      w="100vw"
      justify="center"
      alignItems="center"
      bgImg="https://app.healther.com.br/static/media/background.a911becc.jpg"
    >
      <LoginBox
        onSubmit={onSubmit}
        isInvalid={isInvalid}
        messageError={messageError}
        isSubmitting={isSubmitting}
        register={register}
        handleSubmit={handleSubmit}
      />
    </Flex>
  );
};
