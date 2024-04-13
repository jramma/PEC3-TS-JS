interface Plane {
  model: string;
  npassengers: number;
}

// Define HangarHash interface
interface HangarHash {
  [key: string]: Plane;
}

let myHangar: HangarHash = {};

myHangar["123Z"] = {
  model: "airbus",
  npassengers: 200,
};
myHangar["H789"] = {
  model: "boeing",
  npassengers: 151,
};

// Print the planes in the hangar
for (let plane in myHangar) {
  console.log(
    `${plane}:${myHangar[plane].model}(${myHangar[plane].npassengers})`
  );
}
