import { useState } from 'react';

import logo from 'assets/logo.svg';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import { EyeIcon, HideEyeIcon, UserIcon } from 'components/Icons';
import Input from 'components/Input';
import Loader from 'components/Loader';
import Text from 'components/Text';
import Title from 'components/Title';
import { EMAIL_VALIDATE_PATTERN } from 'constants/index';
import { useForm } from 'hooks/useForm';
import useFullHeight from 'hooks/useFullHeight';

import s from './Main.module.scss';

interface User {
  email: string;
  password: string;
  remember: string;
}

const Main = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    handleChange,
    handleChangeCheckbox,
    data: user,
    errors,
  } = useForm<User>({
    validations: {
      email: {
        custom: {
          isValid: (value) => EMAIL_VALIDATE_PATTERN.test(value),
          message: 'Please enter a valid email address',
        },
      },
      password: {
        custom: {
          isValid: (value) => value?.length > 6,
          message: 'The password needs to be at least 6 characters long.',
        },
      },
    },
    onSubmit: () => fakeSubmitForm(),
  });

  const fakeSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      document.location.reload();
    }, 2000);
  };

  useFullHeight();

  return (
    <div className="container">
      <div className={s.root}>
        <div className={s.formWrapper}>
          <img
            src={logo}
            alt="logo"
            className={s.logo}
            loading="lazy"
            width="75"
            height="75"
          />

          <Title className={s.title} level={1} weight="semibold">
            Login
          </Title>

          <form onSubmit={handleSubmit} noValidate>
            <div className={s.row}>
              <div className={s.cell}>
                <label className={s.label} htmlFor="email">
                  Your email
                </label>

                <div className={s.inputWrapper}>
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="on"
                    autoFocus
                    value={user.email || ''}
                    onChange={handleChange('email')}
                    isError={!!errors.email}
                    disabled={isLoading}
                  />

                  <span className={s.icon}>
                    <UserIcon />
                  </span>
                </div>
                {errors.email ? (
                  <Text className={s.error}>{errors.email}</Text>
                ) : null}
              </div>

              <div className={s.cell}>
                <label className={s.label} htmlFor="input-password">
                  Your password
                </label>

                <div className={s.inputWrapper}>
                  <Input
                    placeholder="Enter your password"
                    type={showPassword ? 'text' : 'password'}
                    id="input-password"
                    name="input-password"
                    autoComplete="on"
                    value={user.password || ''}
                    onChange={handleChange('password')}
                    isError={!!errors.password}
                    disabled={isLoading}
                  />

                  <Button
                    ghost
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    className={s.button}
                    disabled={isLoading}
                    aria-label="Eye"
                  >
                    {showPassword ? <HideEyeIcon /> : <EyeIcon />}
                  </Button>
                </div>
                {errors.password ? (
                  <Text className={s.error}>{errors.password}</Text>
                ) : null}
              </div>

              <footer className={s.footer}>
                <Checkbox
                  name="checkbox"
                  id="checkox"
                  label="Remember me?"
                  checked={!!user.remember || false}
                  onChange={handleChangeCheckbox('remember')}
                  disabled={isLoading}
                />

                <Button type="submit" className={s.submit} disabled={isLoading}>
                  {isLoading ? <Loader /> : 'Submit'}
                </Button>
              </footer>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
