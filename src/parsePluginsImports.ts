export type InteropDefault<T> = T extends { default: infer U } ? U : T;

/* #__NO_SIDE_EFFECTS__ */
export function interopDefault<T>(m: T): InteropDefault<T> {
  // @ts-ignore
  return "default" in m ? interopDefault(m.default) : m;
}
