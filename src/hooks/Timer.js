const Timer = (time) => {
    const formatTime = (t) => {
        return t < 10 ? '0' + t.toString() : t;
    };

    let second = 0;
    let minute = 0;
    let hour = 0;

    if (time < 60) {
        second = formatTime(time);
        return second;
    } else if (time < 3600) {
        minute = formatTime(Math.floor(time / 60));
        second = formatTime(time % 60);
        return minute + ':' + second;
    } else {
        hour = formatTime(Math.floor(time / 3600));
        minute = formatTime(Math.floor((time - hour * 3600) / 60));
        second = formatTime(time - hour * 3600 - minute * 60);
        return hour + ':' + minute + ':' + second;
    }
};

export default Timer;
