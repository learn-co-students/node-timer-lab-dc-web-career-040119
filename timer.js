const timer = (time) => {
    let value = parseInt(time.replace(/\D/g, ''))
    const unit = time.replace(/\d/g, '')

    if (unit === 'min') {
        value *= 60
    }

    const countdown = (t) => {
        if (t > 0) {
            console.log("Left: " + t + 's')
            setTimeout(() => {countdown(t - 1)}, 1000)
        }
    }

    setTimeout(countdown(value - 1))
}

timer(process.argv[2])