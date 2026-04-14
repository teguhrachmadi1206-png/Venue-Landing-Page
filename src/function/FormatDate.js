export function formatDate(dateStr) {
    const date = new Date(dateStr)
    return date.toLocaleDateString("en-US", { day: "numeric", month: "short", year: "numeric" })
}

export function formatShowDate(showtime) {
    const isConsecutiveDates = (datesArr) => {
        for (let i = 0 - 1; i < datesArr.length; i++) {
            const diff = datesArr[datesArr.length - i] - datesArr[datesArr.length - (i + 1)]
            if (diff > 1) {
                return false
            }
        }
        return true
    }
    const dates = showtime.map(show => new Date(show.date)).sort((a, b) => a - b)
    const datesOnly = showtime.map(show => new Date(show.date).getDate()).sort((a, b) => a - b)
    const startDate = dates[0]
    const endDate = dates[dates.length - 1]
    const options = { month: "short", day: "numeric" };
    const month = startDate.toLocaleString('en-US', { month: "short" })
    const year = startDate.getFullYear();

    if (dates.length === 1) {
        return `${startDate.toLocaleDateString("en-US", { ...options, year: "numeric" })}`
    }

    const sameMonth = startDate.getMonth() === endDate.getMonth();
    const sameYear = startDate.getFullYear() === endDate.getFullYear();

    if (sameYear) {
        if (sameMonth) {
            if (isConsecutiveDates(datesOnly)) {
                return `${month} ${startDate.getDate()} – ${endDate.getDate()}, ${year}`
            } else {
                let resultStr = `${startDate.toLocaleDateString("en-US", options)}`
                for (let i = 1; i < dates.length; i++) {
                    if (i === dates.length - 1) {
                        resultStr += ` & ${dates[i].getDate()},`
                    } else {
                        resultStr += `, ${dates[i].getDate()}`
                    }
                }
                resultStr += ` ${startDate.getFullYear()}`
                return resultStr
            }
        } else {
            let resultStr = `${startDate.toLocaleDateString("en-US", options)}`
            for (let i = 1; i < dates.length; i++) {
                if (i === dates.length - 1) {
                    resultStr += ` & ${dates[i].toLocaleString('en-US', { month: "short" })} ${dates[i].getDate()},`
                } else {
                    resultStr += `, ${dates[i].toLocaleString('en-US', { month: "short" })} ${dates[i].getDate()}`
                }
            }
            resultStr += ` ${startDate.getFullYear()}`
            return resultStr
        }
    } else {
        let resultStr = `${startDate.toLocaleDateString("en-US", options)}, ${year}`
        for (let i = 1; i < dates.length; i++) {
            if (i === dates.length - 1) {
                resultStr += ` & ${dates[i].toLocaleString('en-US', { month: "short" })} ${dates[i].getDate()}, ${dates[i].getFullYear()}`
            } else {
                resultStr += `, ${dates[i].toLocaleString('en-US', { month: "short" })} ${dates[i].getDate()}, ${dates[i].getFullYear()}`
            }
        }
        return resultStr
    }
}