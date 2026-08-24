/*
  Task 1 - Profil sederhana

  File ini adalah template.
  Salin ke submissions/<username-github>/javascript/task-01-profile.js
  lalu kerjakan salinannya.

  Tujuan:
  - Melatih console.log()
  - Melatih variabel const
  - Melatih tipe data dasar

  Cara menjalankan:
  node modules/03-basic-javascript/tasks/task-01-profile.js
*/

const nama = "Achmad Yanuar Fairuzzi";
const jurusan = "TKJ";
const angkatan = 2026;
const minatTeknologi = "FrontEnd/BackEnd";

console.log("Profil Peserta MokDev");
console.log(`Nama: ${nama}`);
console.log(`Jurusan: ${jurusan}`);
console.log(`Angkatan: ${angkatan}`);
console.log(`Minat teknologi: ${minatTeknologi}`);

console.assert(nama === "Achmad Yanuar Fairuzzi", "Namanya harus Achmad Yanuar Fairuzzi");
console.assert(jurusan === "TKJ", "Jurusannya harus TKJ");
console.assert(minatTeknologi === "FrontEnd/BackEnd", "Minat teknologinya di FrontEnd/BackEnd");