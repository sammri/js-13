


// Напиши сценарій керування особистим кабінетом інтернет-банку.
// Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.


/*
 * Типів транзацкій всього два.
 * Можна покласти або зняти гроші з рахунку.
 */
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  /*
   * Кожна транзакція - це об'єкт з властивостями: id, type і amount
   */
  const account = {
    // Поточний баланс рахунку
    balance: 0,
  
    // Історія транзакцій
    transactions: [
        
    ],


    /*
     * Метод створює і повертає об'єкт транзакції.
     * Приймає суму і тип транзакції.
     */
    createTransaction(amount, type) {
      let newId;
      do {
        newId = Math.floor(Math.random() * 9999) + 1;
      } while (this.transactions.some(transaction => transaction.id === newId));

      const transaction = {
        id: newId,
        type: type,
        amount: amount,
      }
      return transaction;
    },


    /*
     * Метод відповідає за додавання суми до балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій
     */
    deposit(amount) {
          if (isNaN(amount) || amount <= 0) {
            alert("Некорректная сумма!");
            return;
          }
          else{
            this.balance += amount;
          }

          const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
          this.transactions.push(transaction)
    },


  
    /*
     * Метод відповідає за зняття суми з балансу.
     * Приймає суму танзакції.
     * Викликає createTransaction для створення об'єкта транзакції
     * після чого додає його в історію транзакцій.
     *
     * Якщо amount більше, ніж поточний баланс, виводь повідомлення
     * про те, що зняття такої суми не можливо, недостатньо коштів.
     */
    withdraw(amount) {

      if (isNaN(amount) || amount <= 0) {
        alert("Введи корректную сумму!");
        return;
      }
    
      if (amount > this.balance) {
        alert("Недостаточно средств!");
        return;
      }
    
      this.balance -= amount;
    
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      this.transactions.push(transaction);
    },
    
  
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {
      return this.balance;
    },


    /*
     * Метод шукає і повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {
      return this.transactions.find(transaction => transaction.id === id)
    },
  
    /*
  
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {
      const filterTransctions = this.transactions.filter(transaction => transaction.type === type);
      return filterTransctions.reduce((sum, transaction) => sum + transaction.amount, 0) ; 
    },
  };