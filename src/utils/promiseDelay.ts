export const promiseDelay = (ms: number): Promise<NodeJS.Timeout> => {
  return new Promise(resolve => setTimeout(resolve, ms))
}
