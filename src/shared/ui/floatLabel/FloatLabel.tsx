import cn from 'classnames';
import React, { useCallback } from 'react';

import { TextDanger } from '../textDanger';

import style from './floatLabel.module.scss';

type FloatLabelProps = React.PropsWithChildren<{
  label: string;
  value?: string;
  status?: 'error';
  isRequired?: boolean;
  isDisabled?: boolean;
}>;

export const FloatLabel: React.FC<FloatLabelProps> = (props) => {
  const { children, label, value, status, isRequired, isDisabled } = props;
  const isError = status === 'error';
  const [focus, setFocus] = React.useState(false);

  const classRoot = cn(style.root, {
    [style.active]: focus,
    [style.disabled]: isDisabled,
  });

  const classLabel = cn(style.label, {
    [style.labelFloat]: focus || (value && value.length !== 0),
    [style.required]: isRequired,
  });

  const onBlur = useCallback(() => setFocus(false), []);
  const onFocus = useCallback(() => setFocus(true), []);

  return (
    <div className={classRoot} onBlur={onBlur} onFocus={onFocus}>
      {children}
      <label className={classLabel}>
        {isError ? <TextDanger>{label}</TextDanger> : label}
      </label>
    </div>
  );
};
