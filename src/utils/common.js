export const isNight = () => {
    const hour = new Date().getHours();
    var night;
    if (hour >= 19 || hour < 6) {
        night = true
    } else {
        night = false
    }
    return night;
}