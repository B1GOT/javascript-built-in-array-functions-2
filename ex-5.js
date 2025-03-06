let crimeRecordNames = ["Theodora Milenko", "Tinashe Benigno", "Mahalia Priyanka", "Maisy Sudhir"];

function searchCrimeRecord(array,name) {
  // Start coding here
  return array.includes(name) 
        ? `${name} has no crime record` 
        : `${name} has crime record !!!`
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord(crimeRecordNames,"Dilan Sandra")); //"Dilan Sandra has no crime record"

//ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord(crimeRecordNames,"Tinashe Benigno")); //"Tinashe Benigno has crime record !!!"