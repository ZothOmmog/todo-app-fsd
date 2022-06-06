import cn from 'classnames';
import React, { useCallback } from 'react';

import style from './floatLabel.module.scss';

type FloatLabelProps = React.PropsWithChildren<{
  label: string;
  value?: string;
}>;

export const FloatLabel: React.FC<FloatLabelProps> = (props) => {
  const { children, label, value } = props;
  const [focus, setFocus] = React.useState(false);

  const labelClass = cn(style.label, {
    [style.labelFloat]: focus || (value && value.length !== 0),
  });

  const onBlur = useCallback(() => setFocus(false), []);
  const onFocus = useCallback(() => setFocus(true), []);

  return (
    <div className={style.root} onBlur={onBlur} onFocus={onFocus}>
      {children}
      <label className={labelClass}>{label}</label>
    </div>
  );
};
