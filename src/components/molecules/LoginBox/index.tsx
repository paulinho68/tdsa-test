import {
  Box,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Image,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { BasicInput } from "../../atoms/BasicInput";
import { Button } from "../../atoms/Button";

interface LoginBoxProps {
  onSubmit: SubmitHandler<any>;
  isInvalid: () => boolean;
  messageError: string | undefined;
  isSubmitting: boolean;
  register: UseFormRegister<any>;
  handleSubmit: UseFormHandleSubmit<any>;
}

export const LoginBox = ({
  onSubmit,
  isInvalid,
  messageError,
  isSubmitting,
  register,
  handleSubmit,
}: LoginBoxProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  return (
    <Box
      bg="#FEFEFE"
      p="50px 25px"
      boxShadow="0 1px 10px 0 rgb(22 22 22 / 60%)"
      borderRadius="8px"
    >
      <Image
        src="https://app.healther.com.br/static/media/logo_sem_fundo.ce584908.png"
        w="260px"
        h="70px"
        mb="50px"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={isInvalid()} display="grid" gap={3}>
          <BasicInput
            id="domain"
            placeholder="Domínio"
            {...register("domain", {
              required: "Domínio é obrigratório",
            })}
          />
          <BasicInput
            id="user"
            placeholder="Usuário"
            {...register("user", {
              required: "Usuário é obrigratório",
            })}
          />
          <InputGroup size="md">
            <BasicInput
              id="password"
              placeholder="Senha"
              type={showPassword ? "text" : "password"}
              {...register("password", {
                required: "Senha é obrigratório",
              })}
            />
            <InputRightElement width="4.5rem">
              {showPassword ? (
                <FaEye
                  size={20}
                  onClick={handleClickShowPassword}
                  cursor="pointer"
                  color="#3C5192"
                />
              ) : (
                <FaEyeSlash
                  size={20}
                  onClick={handleClickShowPassword}
                  cursor="pointer"
                  color="#3C5192"
                />
              )}
            </InputRightElement>
          </InputGroup>
          <FormErrorMessage>{messageError}</FormErrorMessage>
        </FormControl>
        <Button isLoading={isSubmitting} type="submit" mt={4}>
          <Flex justify="space-between" alignItems="center" w="100%">
            <FaLock size={10} />
            <Center w="100%">Acessar</Center>
          </Flex>
        </Button>
      </form>
    </Box>
  );
};
