import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginTemplate } from "../../components/templates/Login";
interface ValuesProps {
  domain: string;
  user: string;
  password: string;
}

export const Login = () => {
  const [messageError, setMessageError] = useState<string | undefined>("");
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ValuesProps>();

  const onSubmit: SubmitHandler<ValuesProps> = (values) => {
    navigate("/dashboard");
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
    <LoginTemplate
      messageError={messageError}
      isInvalid={isInvalid}
      onSubmit={onSubmit}
      register={register}
      handleSubmit={handleSubmit}
      isSubmitting={isSubmitting}
    />
  );
};
