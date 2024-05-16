{
    // getter and setter
    class BankAccount {
      public readonly id: number;
      public name: string;
      protected _balance: number;  // private use korle only nejer class e eccess pabe. protected use korle nejer+ child class e eccess pabe.
  
      constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
      }
  
    //   public addDeposit(amount:number){
    //       this._balance = this._balance + amount
    //   }
  
    // setter
    set deposit(amount:number){
        this._balance = this._balance + amount
    }


    //   public getBalance(){
    //       return this._balance;
    //   }

    // getter
    get balance(){
        return this._balance
    }
    }
  
    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 30);
  // goribManusherAccount.balance = 23;
//   goribManusherAccount.addDeposit(10)  // function call korte hoise
    goribManusherAccount.deposit = 20;

//   const myBalance = goribManusherAccount.getBalance();  // function call korte hoise
const myBalance = goribManusherAccount.balance;  // property er moto kore
  console.log(myBalance);
  
  
  
    //
  }
  