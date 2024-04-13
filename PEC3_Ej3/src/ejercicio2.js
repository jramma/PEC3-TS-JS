var myHangar = {};
myHangar["123Z"] = {
    model: "airbus",
    npassengers: 200,
};
myHangar["H789"] = {
    model: "boeing",
    npassengers: 151,
};
// Print the planes in the hangar
for (var plane in myHangar) {
    console.log("".concat(plane, ":").concat(myHangar[plane].model, "(").concat(myHangar[plane].npassengers, ")"));
}
