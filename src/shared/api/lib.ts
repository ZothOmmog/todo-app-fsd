import { LsKey } from "./config";

export const getLsValue = <T>(key: LsKey): T | undefined => {
  const value = localStorage[key] as string | undefined;

  if (value === undefined) return value;

  return JSON.parse(value) as T;
};

export const setLsValue = (key: LsKey, value: unknown): void => {
  localStorage[key] = JSON.stringify(value);
};

export const wait = async (ms = 1000) => new Promise((r) => setTimeout(r, ms));
