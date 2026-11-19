import java.util.Scanner;

public class largestNumber {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a Num 1");
        int num1=sc.nextInt();
        System.out.println("Enter an num 2");
        int num2=sc.nextInt();

        if (num1>num2) {
            System.out.println("NUM 1 IS greater");
            
        }else{
            System.out.println("num 2 is greater");
        }

    }
}
