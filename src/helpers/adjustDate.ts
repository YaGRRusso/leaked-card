export function adjustDate(
  referenceDate: Date,
  unit: "years" | "months" | "days" | "hours" | "minutes",
  value: number,
): Date {
  const adjustedDate = new Date(referenceDate)

  switch (unit) {
    case "years":
      adjustedDate.setFullYear(adjustedDate.getFullYear() + value)
      break
    case "months":
      adjustedDate.setMonth(adjustedDate.getMonth() + value)
      break
    case "days":
      adjustedDate.setDate(adjustedDate.getDate() + value)
      break
    case "hours":
      adjustedDate.setHours(adjustedDate.getHours() + value)
      break
    case "minutes":
      adjustedDate.setMinutes(adjustedDate.getMinutes() + value)
      break
    default:
      return referenceDate
  }

  return adjustedDate
}
