import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Input,
  Image,
  Center,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
interface ValuesProps {
  domain: string;
  user: string;
  password: string;
}

export const Login = () => {
  const [messageError, setMessageError] = useState<String | undefined>("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ValuesProps>();

  const onSubmit: SubmitHandler<ValuesProps> = (values) => {
    console.log(values);
  };

  const isInvalid = () => {
    return (
      Boolean(errors.user) || Boolean(errors.domain) || Boolean(errors.password)
    );
  };

  useEffect(() => {
    if (!!errors.domain) {
      setMessageError(errors.domain.message);
    } else if (!!errors.user) {
      setMessageError(errors.user.message);
    } else if (!!errors.password) {
      setMessageError(errors.password.message);
    }
  }, [errors]);

  return (
    <Flex
      h="100vh"
      w="100vw"
      justify="center"
      alignItems="center"
      bgImg="http://10.1.1.6:3000/static/media/background.a911becc.jpg"
    >
      <Box
        bg="#FEFEFE"
        p="50px 25px"
        boxShadow="0 1px 10px 0 rgb(22 22 22 / 60%)"
        borderRadius="8px"
      >
        <Image
          src="http://10.1.1.6:3000/static/media/logo_sem_fundo.ce584908.png"
          w="260px"
          h="70px"
          mb="50px"
        />
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={isInvalid()} display="grid" gap={3}>
            <Input
              placeholder="Domínio"
              p="5px"
              borderColor="#3C5192"
              borderRadius="4px"
              {...register("domain", {
                required: "Domínio é obrigratório",
              })}
            />
            <Input
              placeholder="Usuário"
              p="5px"
              borderColor="#3C5192"
              borderRadius="4px"
              {...register("user", {
                required: "Usuário é obrigratório",
              })}
            />
            <InputGroup size="md">
              <Input
                p="5px"
                borderColor="#3C5192"
                placeholder="Senha"
                type={show ? "text" : "password"}
                {...register("password", {
                  required: "Senha é obrigratório",
                })}
              />
              <InputRightElement width="4.5rem">
                {show ? (
                  <FaEye
                    size={20}
                    onClick={handleClick}
                    cursor="pointer"
                    color="#3C5192"
                  />
                ) : (
                  <FaEyeSlash
                    size={20}
                    onClick={handleClick}
                    cursor="pointer"
                    color="#3C5192"
                  />
                )}
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{messageError}</FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={isSubmitting}
            type="submit"
            bgColor="#3C5192"
            w="100%"
          >
            <Flex justify="space-between" alignItems="center" w="100%">
              <FaLock size={10} />
              <Center w="100%">Acessar</Center>
            </Flex>
          </Button>
        </form>
      </Box>
    </Flex>
  );
};
