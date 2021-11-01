function time_conversion(minutes) {

if(minutes % 60 > 0 && minutes / 60 < 10){
    return `0${Math.floor(minutes / 60)} : ${minutes % 60}`
}
else if(minutes % 60 > 0 && minutes / 60 > 10){
    return `${Math.floor(minutes / 60)} : ${minutes % 60}`
}

else {
    return `${minutes / 60}`
}

}

console.log(time_conversion(155));