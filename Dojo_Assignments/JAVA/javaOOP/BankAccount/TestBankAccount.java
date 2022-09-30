public class TestBankAccount {
    public static void main(String[] args){
        BankAccount account1= new BankAccount(); 

            account1.addToAccount(2000.98,"savings");
            account1.addToAccount(2000.99,"checking");

            account1.withdrawFromAccount(100.05,"savings");
            account1.withdrawFromAccount(100.88,"checking");

            account1.seeAccountTotal();
    
    }
}