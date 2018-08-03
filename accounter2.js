// Zadatak:
// Kreirajte 2 klase: BaseAccount i VipAccount, gdje je VipAccount izveden iz BaseAccount.
// BaseAccount sadrze informacije: ime, prezime, broj racuna, iznos novca i metodu PayAmount(amount) koja umanji
// iznos novca za uneseni iznos.
// VipAccount sadrzi broj besplatnih milja i metodu ReceiveFilghtBonus koja uvecava broj besplatnih milja za 1,
// na svakih utrosenih $100.
// Uz izradu provjeriti koristenje redefinisanja metoda i konverziju sa Object.assign.

function BaseAccount (ime, prezime, brojRacuna, iznosNovca) {
    this.ime = ime;
    this.prezime = prezime;
    this.brojRacuna = brojRacuna;
    this.iznosNovca = iznosNovca;
    this.payAmount = function (amount) {
        this.iznosNovca -= amount;
    }
}

let mojRacun = new BaseAccount("Igor", "Vukic", "12345", 100);
console.log(mojRacun.iznosNovca);
mojRacun.payAmount(30)
console.log(mojRacun.iznosNovca);

function VipAccount (ime, prezime, brojRacuna, iznosNovca, brojBesplatnihMilja){
    BaseAccount.call(this, ime, prezime, brojRacuna, iznosNovca);
    this.brojBesplatnihMilja = brojBesplatnihMilja;
    this.amountSpent = 0;
    // bonus per 100 USD
    this.bonus = 1000;
    this.payAmount = function (amount) {
        this.iznosNovca -= amount;
        let bonusMultiplier = Math.floor((this.amountSpent + amount) / 100);
        if (bonusMultiplier > 0){
            this.receiveFlightBonus(bonusMultiplier * this.bonus);
            this.amountSpent = (this.amountSpent + amount) - bonusMultiplier * 100;
        } else {
            this.amountSpent += amount;
        }
    }
    this.receiveFlightBonus = function (bonusAddition) {
        this.brojBesplatnihMilja += bonusAddition;
    }
}

let mojVipRacun = new VipAccount("Igorije", "Vukici", "54321", 200,1000);
console.log(mojVipRacun.prezime)
console.log("Iznos milja: " + mojVipRacun.brojBesplatnihMilja)
console.log("Iznos novca: " + mojVipRacun.iznosNovca)
mojVipRacun.payAmount(140)
console.log("Iznos novca: " + mojVipRacun.iznosNovca)
console.log("Iznos milja: " + mojVipRacun.brojBesplatnihMilja)
console.log("Potroseno: " + mojVipRacun.amountSpent)
mojVipRacun.payAmount(30)
console.log("Iznos milja: " + mojVipRacun.brojBesplatnihMilja)
console.log("Potroseno: " + mojVipRacun.amountSpent)
