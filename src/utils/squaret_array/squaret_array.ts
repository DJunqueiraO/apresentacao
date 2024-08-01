import { UseStateObject } from "../Utils"

export const squaret_array = <T>(array: Array<T>, n: number) => {

  const result: T[][] = []

  for(let i = 0; i < array.length; i += n) {
    result.push(array.slice(i, i + n))
  }

  return result
}