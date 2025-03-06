const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(array,carBrand) {
  // Start coding here
  if (array.includes(carBrand)) {
    let neww = array.indexOf(carBrand)
    return `${carBrand} has already existed in the ${neww+1} position of car collection.`
  } else {
    array.push(carBrand)
    return `new car collection is : ${carCollection}`
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection(carCollection,"audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection(carCollection,"toyota")); //toyota has already existed in the 1 position of car collection.