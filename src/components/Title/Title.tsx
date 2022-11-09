import { ReactNode } from 'react';

import cn from 'classnames';

import s from './Title.module.scss';

type HTMLTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
interface TOwnProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  weight?: 'medium' | 'semibold' | 'bold';
  children: ReactNode;
  className?: string;
  fontsangbleu?: boolean;
}

const Title: React.FC<TOwnProps> = ({
  level = 1,
  className = '',
  weight = '',
  children,
  fontsangbleu = false,
}) => {
  const Tag = `h${level}` as HTMLTag;
  const classes = cn(
    s.root,
    s[`level-${level}`],
    s[`weight-${weight}`],
    { [s.fontSangbleu]: fontsangbleu },
    className,
  );

  return <Tag className={classes}>{children}</Tag>;
};

export default Title;
