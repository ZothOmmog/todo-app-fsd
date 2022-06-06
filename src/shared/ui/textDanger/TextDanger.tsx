import { Typography } from 'antd';
import { TextProps } from 'antd/lib/typography/Text';
import React from 'react';

type TextDangerProps = Omit<TextProps, 'type'>;

export const TextDanger: React.FC<TextDangerProps> = (props) => {
  return <Typography.Text type="danger" {...props} />;
};
