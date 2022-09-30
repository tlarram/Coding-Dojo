import java.util.ArrayList;

// Create a BankAccount class.
public class BankAccount {
// The class should have the following attributes: (double) checking balance, (double) savings balance.
    private double checkingBalance;
    private double savingsBalance;
// Create a class member (static) that has the number of accounts created thus far.
    private static int numberOfBankAccount = 0;
// Create a class member (static) that tracks the total amount of money stored in every account created.
    private static double totalAmountOfMoney = 0.0;

// In the constructor, be sure to increment the account count.
    public BankAccount(){
    this.checkingBalance= checkingBalance;
    this.savingsBalance = savingsBalance;
    numberOfBankAccount++;
    }
    public BankAccount(double checkingBalance, double savingsBalance){
        this.checkingBalance= checkingBalance;
        this.savingsBalance = savingsBalance;
        numberOfBankAccount++;

    }
// Create a getter method for the user's checking account balance.
    public double getCheckingBalance(){
            return this.checkingBalance;
    }
// Create a getter method for the user's saving account balance.
    public double getSavingsBalance(){
            return this.savingsBalance;
    }
// Create a method that will allow a user to deposit money into either the checking or saving, be sure to add to total amount stored.
    public void addToAccount(double amount, String account){
        if(account == "savings"){
            this.savingsBalance += amount;
        } else if(account == "checking") {
            this.checkingBalance += amount;
        }

        }
    

// Create a method to withdraw money from one balance. Do not allow them to withdraw money if there are insufficient funds.
    public void withdrawFromAccount(double amount, String account){
        if(account == "savings"){
            if(this.savingsBalance - amount >= 0){
                this.savingsBalance -= amount;
            } else {
                System.out.println("Insuffiecent funds");
            }
        }
        else if(account == "checking"){
            if(this.checkingBalance - amount >= 0){
                this.checkingBalance -= amount;
            } else {
                System.out.println("Insuffiecent funds");
            }
    }
}
// Create a method to see the total money from the checking and saving.
    public void seeAccountTotal(){
        System.out.println("Checking: $"+ this.checkingBalance);
        System.out.println("Savings: $"+ this.savingsBalance);
    }

// Users should not be able to set any of the attributes from the class.

// NINJA BONUS: Add the the following class attribute: account number. The type is up to you, can be a String or a Long or another type.

// NINJA BONUS: Create a private method that returns a random ten digit account number.

// NINJA BONUS: In the constructor, call the private method from above so that each user has a random ten digit account.
}