
function toMinute() {
    return function(val){
        var second = Math.floor(val / 1000);
        var minute = Math.floor(second / 60);
        second = second % 60;
        var time_min = minute + ":" + second;
        return time_min;
    }
}

export default toMinute;
