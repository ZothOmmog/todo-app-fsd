import React from "react";

export const namedLazy = <T extends Record<string, any>>(
  loader: () => Promise<T>,
  name: keyof T
) => {
  return React.lazy(async () => {
    const module = await loader();
    return { default: module[name] };
  });
};
