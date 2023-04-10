const nextElementInList = <T>(list: T[], value: T) => {
  const currentValueIndex = list.indexOf(value)
  const nextValueIndex = (currentValueIndex + 1) % list.length
  const nextValue = list[nextValueIndex]
  return nextValue
}

export default nextElementInList
