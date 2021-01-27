let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    reareCars: 2
};

for (let key in statistics) {
    if (key.startsWith("R") || statistics[key] % 2 != 0) {
        console.log(statistics[key]);
    }
}