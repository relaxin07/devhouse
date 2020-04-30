let url = 'http://api.dev.cakeiteasy.no/api/store/bakeries/?country_code=no'
let url2 = 'http://api.dev.cakeiteasy.no/api/store/bakeries/test-bakery-pay-in-store/?country=NO'

convertorMinInHours = (min) => {
  let hours = (min / 60) ^ 0
  let minutes = min % 60
  if (minutes < 10) minutes = '0' + minutes
  return `${hours}:${minutes}`
}
transformSchedule = async (url) => {
  const res = await fetch(url)
  const response = await res.json()

  const data = Array.isArray(response) ? response : [response]

  let dataUpdate = data.map((item) => {
    const { schedule } = item
    const result = []
    let valueStr = ''
    let dayStart = null
    let dayEnd = null
    const days = Object.keys(schedule)
    days.forEach((day, ind) => {
      const { order_before: before, day_off: dayOff, days_before_order: daysBefore } = schedule[day]
      const val = `before ${convertorMinInHours(before)}, ${daysBefore} day(s) before`
      if (val !== valueStr || dayOff) {
        if (dayStart) {
          result.push(`For ${dayStart} ${dayEnd ? `- ${dayEnd}` : ''}: ${valueStr}`)
          valueStr = ''
          dayStart = null
          dayEnd = null
        }
        if (dayOff) {
          result.push(`${day}: Closed `)
          valueStr = ''
        } else if (ind === days.length - 1) {
          result.push(`For ${days[ind]}  ${val}`)
        } else {
          dayStart = day
          valueStr = val
        }
      } else {
        dayEnd = day
      }
      if (ind === days.length - 1 && dayStart) {
        result.push(`For ${dayStart} ${dayEnd ? `- ${dayEnd}` : ''}: ${valueStr}`)
      }
    })
    return { ...item, schedule: result }
  })
  console.log(dataUpdate)
  return dataUpdate
}
transformSchedule(url)
transformSchedule(url2)
