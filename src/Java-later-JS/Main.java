package com.company;

import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.stream.Collectors;

public class Main {

    public static void main(String[] args) {
	// write your code here
        //podaż
        int [] sellers = {15,12,13,20};
        //jednorazowe koszty zakupu
        int [] oneTimeFee = {12,12,12,12};
        //koszty transportu
        int [][] transportCosts = {{3,5},{12,6},{10,5},{4,13}};
        // popyt
        int [] buyers = {30,30};
        //ceny sprzedazy
        int [] sellingPrice = {30,30};
        //zysk
        int [][] income = new int[oneTimeFee.length][sellingPrice.length];
        Map<Integer, Integer> map = new HashMap<>();
        // suma
        int sum = 0;
        for(int i = 0; i<oneTimeFee.length; i++)
        {
            for(int j = 0; j<sellingPrice.length; j++)
            {
                income[i][j] = sellingPrice[j] - oneTimeFee[i] - transportCosts[i][j];
                System.out.println("numery tablicy " + i +" " + j + "  ile wyszlo " + income[i][j]);

                if(j == 0) {
                    map.put((i+j)*2, income[i][j]);
                }
                if(j == 1){
                    map.put(i*2+1,income[i][j]);
                }
            }
        }
        System.out.println("----");
        System.out.println(map);

        System.out.println("----");
        Map<Integer, Integer> sortedMap = map.entrySet().stream()
                .sorted(Map.Entry.comparingByValue(Comparator.reverseOrder()))
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue, (e1, e2) -> e1, LinkedHashMap::new));
        System.out.println(sortedMap);

        int grandFinale[][] = new int[sellers.length][buyers.length];
        for(int i =0 ;i<buyers.length*sellers.length;i++){

            System.out.println("ile razy sie petla wykona "+ i);
                int k =sortedMap.keySet().stream().findFirst().get();
                sortedMap.remove(k);
                System.out.println("po usunieciu; "+ sortedMap);
                    if (buyers[k%2] >= sellers[k/2]) {
                       if(sellers[k/2]>0)
                       {
                               grandFinale[k/2][k%2] =  sellers[k/2];
                               buyers[k%2] -= sellers[k/2];
                               sellers[k/2] = 0;
                       }
                    }
                    else
                    {
                        if(buyers[k%2]>0)
                        {
                            grandFinale[k/2][k%2] = buyers[k%2];
                            sellers[k/2] -= buyers[k%2];
                            buyers[k%2] = 0;
                        }
                    }

        }
        for(int i = 0;i<income.length;i++)
        {
            for (int j = 0; j<income[i].length;j++)
            {
                sum = sum + income[i][j]*grandFinale[i][j];
            }
        }

        System.out.println(grandFinale[0][0] +"\t" + grandFinale[0][1] +"\t" );
        System.out.println(grandFinale[1][0] +"\t" + grandFinale[1][1] +"\t" );
        System.out.println(grandFinale[2][0] +"\t" + grandFinale[2][1] +"\t" );
        System.out.println(grandFinale[3][0] +"\t" + grandFinale[3][1] +"\t" );
        System.out.println("INCOME");
        System.out.println(income[0][0] +"\t" + income[0][1] +"\t" );
        System.out.println(income[1][0] +"\t" + income[1][1] +"\t" );
        System.out.println(income[2][0] +"\t" + income[2][1] +"\t" );
        System.out.println(income[3][0] +"\t" + income[3][1] +"\t" );
        System.out.println("suma rowna sie: "+sum);
    }
}
