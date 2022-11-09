import { ReactNode } from 'react';

import cn from 'classnames';

import s from './Text.module.scss';

type HTMLTag = 'p' | 'span';

interface Props {
  size?: 'small' | 'small-medium' | 'medium' | 'media-large' | 'large';
  weight?: 'regular' | 'medium' | 'semibold' | 'bold';
  children: ReactNode | string;
  className?: string;
  inline?: boolean;
}

const Text: React.FC<Props> = ({
  size = 'medium',
  className,
  inline = false,
  weight,
  children,
}) => {
  const classes = cn(
    s.root,
    s[`size-${size}`],
    weight ? s[`weight-${weight}`] : null,
    className,
  );
  const Tag: HTMLTag = inline ? 'span' : 'p';

  return <Tag className={classes}>{children}</Tag>;
};

export default Text;
