
// input        // result
//[1,4,6,7]       // [14,12,8,2]
//[7,4,2,1]       // [2,4,8,14]
//[5]             // [10]
//[1,3]			//[6,2]

function angka(input) {
    const kalidua = input.map(element => element * 2);
    const hasil = kalidua.reverse()
    return hasil;
}

const angkainput = [1,4,6,7];
const hasil = angka(angkainput);

console.log("");
console.log("Soal pertama");
console.log(angkainput);
console.log(hasil);

//soal kedua

const angkainput2 = [7,4,2,1];
const hasil2 = angka(angkainput2);

console.log("");
console.log("Soal kedua");
console.log(angkainput2);
console.log(hasil2);

//soal ketiga

const angkainput3 = [5];
const hasil3 = angka(angkainput3);

console.log("");
console.log("Soal ketiga");
console.log(angkainput3);
console.log(hasil3);

//soal keempat

const angkainput4 = [1,3];
const hasil4 = angka(angkainput4);

console.log("");
console.log("Soal keempat");
console.log(angkainput4);
console.log(hasil4);