export type TClassDictionary = Record<
  string,
  boolean | number | null | undefined
>

export type TClassValue =
  | string
  | boolean
  | null
  | undefined
  | TClassDictionary
  | TClassValue[]

export const classNames = (...args: TClassValue[]): string => {
  const result: string[] = []

  const collect = (item: TClassValue): void => {
    if (!item) return

    if (typeof item === 'string') {
      result.push(item)
      return
    }

    if (Array.isArray(item)) {
      for (const i of item) collect(i)
      return
    }

    if (typeof item === 'object' && item !== null) {
      for (const key in item) {
        if (Object.hasOwn(item, key) && item[key]) {
          result.push(key)
        }
      }
    }
  }

  for (const arg of args) collect(arg)

  return result.join(' ')
}
