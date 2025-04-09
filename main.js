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
      if (confirm("Хочешь пополнить свой банк?")) {
        let userDepositAmount = prompt("На сколько грн хочешь пополнить?")
        userDepositAmount = parseFloat(userDepositAmount);

            if (userDepositAmount !== null && userDepositAmount >= 0) {
              this.balance += userDepositAmount;
            } else{ 
              return;
            }

            const transaction = this.createTransaction(userDepositAmount,"deposit");
            this.transactions.push(transaction)
      } 
      else {
        return;
      }
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
        if (confirm("Хочешь снять с банка?")) {
          let userWithdrawAmount = prompt("Сколько хочешь снять?");
          
          if (userWithdrawAmount !== null && userWithdrawAmount >= 0) {
            this.balance = this.balance - userWithdrawAmount;
          } else{ 
            return;
          }

          const transaction = this.createTransaction(userDepositAmount,"deposit");
          this.transactions.push(transaction);

        } 
        else {
          return;
        }
    },
  
    /*
     * Метод повертає поточний баланс
     */
    getBalance() {},
    /*
     * Метод шукає і повертає об'єкт транзакції по id
     */
    getTransactionDetails(id) {},
  
    /*
  
     * Метод повертає кількість коштів
     * певного типу транзакції з усієї історії транзакцій
     */
    getTransactionTotal(type) {},
  };