
public class Item {
    private String name;
    private double price;
    public Item() {
            // CONSTRUCTOR
    //   Takes a name and price as arguments 
    //   and sets them accordingly

    }
    public Item(String name, double price){
        this.name=name;
        this.price=price;
    }
    
    // GETTERS & SETTERS  - for name and price
    public String getName(){
        return this.name;
    }
    public double getPrice(){
        return this.price;
    }
    public void setName(){
        this.name=name;
    }
    public void setPrice(){
        this.price=price;
    }
}