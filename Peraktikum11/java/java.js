document.querySelectorAll("#option a").forEach((a) => {
    //  Jika di click dia akan menjalankan sebuah fungsion computerChoice()
    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
})

function computerChoice(element){
    //Pilihan User
    let pilihanuser = element.target.innerText;

    //Menangkan Elememt hasil komputer dengan quertyselector
    let pilihankomputer = document.querySelector("#result");

    //mengisi pilihan komputer dengan array
    let choice = ["Rock","Paper","Scissors"];

    // Pilihan Komputer Secara Random
    pilihankomputer.innerHTML = choice[Math.round(Math.random() * choice.length)];
    pilihankomputer = pilihankomputer.innerHTML;
    console.log(pilihankomputer);

    // Jika USER DAN KOMPUTER SERI
    if(pilihanuser == pilihankomputer){
        alert("SERI");
    }
 
    //Pilihan Jika User Menang
    if(pilihanuser ==  "Rock" && pilihankomputer == "Scissors"){
        alert("Menang");
    } else if(pilihanuser == "Paper" && pilihankomputer == "Rock"){
        alert("Menang");
    } else  if(pilihanuser == "Scissors" && pilihankomputer == "Paper"){
        alert("Menang");
    }
    //pilihan jika komputer menang
}