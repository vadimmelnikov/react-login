import React, { InputHTMLAttributes, ReactNode } from 'react';

import cn from 'classnames';

import { CheckboxIcon } from 'components/Icons';
import Text from 'components/Text';

import s from './Checkbox.module.scss';

interface InputPropsTypes extends InputHTMLAttributes<HTMLInputElement> {
  label?: string | ReactNode;
  className?: string;
  sizeIcon?: 'xs' | 'm';
  name: string;
  id: string;
  isError?: boolean;
}

const Checkbox = React.forwardRef<HTMLInputElement, InputPropsTypes>(
  (
    { label, name = '', id, className, isError, sizeIcon = 'm', ...props },
    ref,
  ) => {
    const classes = cn(
      s.root,
      className,
      isError && s.isError,
      s[`size-${sizeIcon}`],
    );

    return (
      <div className={classes}>
        <input type="checkbox" name={name} id={id} ref={ref} {...props} />
        <div className={s.checkBlock}>
          <CheckboxIcon />
        </div>

        {label ? (
          <Text className={s.text} size="small">
            {label}
          </Text>
        ) : null}
      </div>
    );
  },
);

export default Checkbox;
