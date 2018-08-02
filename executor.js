class BaseCommand {
    execute() {
        return "BaseCommand";
    }
}

class StartCommand extends BaseCommand{
    execute() {
        return "StartCommand";
    }
}

class GoCommand extends BaseCommand {
    execute () {
        return "GoCommand";
    }
}

class StopCommand extends BaseCommand {
    execute () {
        return "StopCommand";
    }
}

var testObj = new BaseCommand;
var testObjS = new StartCommand;
var testObjB = new BaseCommand;
console.log(testObj.execute());
console.log(testObjS.execute());
console.log(testObjB.execute());
/* Zadatak: Implementirajte osnovnu klasu i 3 izvedene klase iz osnovne (BaseCommand - osnovna, StartCommand, GoCommand, StopCommand - izvedene).
Svaka izvedena klasa treba da redefinise metodu Execute() koja na ekran ispisuje tip komande koja se izvrsava. 
U glavnom programu Main() napravite nekoliko varijacija kastovanja i ispitajte upotrebu redefinisanih kao i nasljedjenih metoda.*/