function calEntTime(n) {
    var time = "";

    if (n >= 1000 && n < 60000) {
        time=Math.floor(n / 1000)+" Seconds ";
    }
    if (n >= 60000 && n < 3600000) {
        var min = Math.floor(n / 60000);
        time = min + " Minutes ";
        var rem = n % 60000;
        if (rem < 60000) {
            var sec = Math.floor(rem / 1000);
            time = time + sec + " Seconds";
        }
    }
    if (n >= 3600000) {
        var hr = Math.floor(n / 3600000);
        time = time + hr + " Hours ";
        rem = n % 3600000;
        if (rem < 3600000 && rem >= 60000) {
            var min = Math.floor(rem / 60000)
            time = time + min + " Minutes "
            var rem2 = rem % 60000;
            if (rem2 < 60000) {
                var sec = Math.floor(rem2 / 1000);
                time = time + sec + " Seconds ";
            }
        }
    }
    return time.trim();
}

module.exports={calEntTime};

