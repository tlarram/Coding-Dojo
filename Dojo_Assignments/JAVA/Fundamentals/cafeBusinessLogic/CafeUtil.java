import java.util.ArrayList;
import java.util.Arrays;
import java.text.DecimalFormat;

public class CafeUtil {
    public int getStreakGoal() {
        int sum=0;
        for (int i=0; i<=10;i++) {
            sum += i;
        }
        return sum;
    }
    public double getOrderTotal(double[] prices) {
        double total = 0.0;
        for (int i=0; i < prices.length;i++) {
            total += prices[i];
        }
        return total;

    }
    public void displayMenu(ArrayList<String> menu) {
        for(int i=0; i < menu.size(); i++){
            System.out.println(i + " " + menu.get(i));
        }
    }
    ArrayList<String> customerArray = new ArrayList<String>();
    public void addCustomer(ArrayList<String> customer){
        System.out.println("Please Print your name:");
        String userName = System.console().readLine();
        System.out.println("Hello," + userName);
        System.out.println("There are " + customerArray.size() +" people in front of you");
        customerArray.add(userName);
        System.out.println(customerArray);
    }
    // public void printPriceChart(String product, double price, int maxQuantity){
    // double subtract =.5;
    // System.out.println(product);
    // for(int i=0; i< maxQuantity; i++){
    //     if(i>1){
    //         double newPrice = (price * i)- subtract;
    //         System.out.println(i + "-$" + df.format(newPrice));

    //     } else {
    //         System.out.println(i + "-$" + df.format(price * i));
    //     }
    // }
    // }
}