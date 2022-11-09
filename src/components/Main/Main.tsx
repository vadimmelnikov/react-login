import { useEffect, useState } from 'react';

import logo from 'assets/logo.svg';
import Button from 'components/Button';
import { EyeIcon, HideEyeIcon, UserIcon } from 'components/Icons';
import Input from 'components/Input';
import Text from 'components/Text';

import s from './Main.module.scss';

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};

const Main = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('resize', documentHeight);
    documentHeight();

    return () => {
      window.removeEventListener('resize', documentHeight);
    };
  }, []);

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
          <Text className={s.title} size="media-large">
            Login
          </Text>
          <form>
            <div className={s.row}>
              <div className={s.cell}>
                <label className={s.label} htmlFor="input-name">
                  Your name
                </label>
                <div className={s.inputWrapper}>
                  <Input
                    placeholder="Enter your name"
                    type="text"
                    id="input-name"
                    name="input-name"
                    autoComplete="on"
                  />
                  <span className={s.icon}>
                    <UserIcon />
                  </span>
                </div>
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
                  />
                  <Button
                    ghost
                    onClick={() => setShowPassword((prevState) => !prevState)}
                    className={s.button}
                  >
                    {showPassword ? <HideEyeIcon /> : <EyeIcon />}
                  </Button>
                </div>
              </div>
              <footer className={s.footer}>
                <Button type="reset" ghost>
                  Clear
                </Button>
                <Button type="submit">Submit</Button>
              </footer>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Main;
