import cn from 'classnames';

import Text from 'components/Text';

import s from './Button.module.scss';

interface Props {
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (param: React.MouseEvent<HTMLElement>) => void;
  ghost?: boolean;
}

const Button: React.FC<Props & JSX.IntrinsicElements['button']> = ({
  className,
  children,
  disabled = false,
  onClick,
  ghost,
  type = 'button',
  ...props
}) => {
  const classes = cn(ghost ? s.ghost : s.root, className);

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {typeof children === 'string' ? (
        <Text className={s.text} inline>
          {children}
        </Text>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
