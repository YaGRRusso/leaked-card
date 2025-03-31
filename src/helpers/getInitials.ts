export function getInitials(name?: string) {
  if (!name || name.length === 0) return "?"

  const nameArray = name.split(" ")
  let initials = nameArray[0][0]
  if (nameArray.length > 1) initials += nameArray[nameArray.length - 1][0]

  return initials.toUpperCase()
}
