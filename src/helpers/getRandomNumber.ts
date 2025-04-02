const todaySeed = new Date().setHours(0, 0, 0, 0)

export function getRandomNumber(min: number, max: number, seed?: number) {
  const seededRandom = (() => {
    let s = seed ?? todaySeed
    return () => {
      s = (s * 16807) % 2147483647
      return (s - 1) / 2147483646
    }
  })()

  return Math.floor(seededRandom() * (max - min + 1)) + min
}
