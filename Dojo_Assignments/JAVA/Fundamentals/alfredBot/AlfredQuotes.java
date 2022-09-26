import java.util.Date;

public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String dayPeriod, String name) {
        return String.format("Good %s, %s. Lovely to see you.", dayPeriod, name);
}
    
    public String dateAnnouncement() {
        return String.format("It is currently %s", new Date());
    }
    
    public String respondBeforeAlexis(String conversation) {
        if(conversation.indexOf("Alexis") > -1){
            return "She is not useful.  What do you desire?";
        }
        if(conversation.indexOf("Alfred") > 0) {
            return "At your service. How may I help you?";
        }
        return "Okay, let me know if you need anything else.";
    }
    
}