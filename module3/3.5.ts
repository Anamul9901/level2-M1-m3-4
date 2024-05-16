{
  // access modifires
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number;  // private use korle only nejer class e eccess pabe. protected use korle nejer+ child class e eccess pabe.

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    public addDeposit(amount:number){
        this._balance = this._balance + amount
    }

    public getBalance(){
        return this._balance;
    }
  }

  const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
// goribManusherAccount.balance = 23;
goribManusherAccount.addDeposit(10)

const myBalance = goribManusherAccount.getBalance();
console.log(myBalance);
//----------

class StudentAccoutn extends BankAccount{
    test(){
        this._balance   // protected _balance use korar karone aikhane access pua gese. privet use korle pua jeto nah
    }
}
  //
}
