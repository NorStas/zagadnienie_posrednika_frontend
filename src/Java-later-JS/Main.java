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
        int [] sellers = {30,30};
        //jednorazowe koszty zakupu
        int [] oneTimeFee = {12,12};
        //koszty transportu
        int [][] transportCosts = {{1,1,1,1},{8,8,8,8}};
        // popyt
        int [] buyers = {20,1,9,30};
        //ceny sprzedazy
        int [] sellingPrice = {31,5,2,38};
        //zysk
        int [][] income = new int[oneTimeFee.length][sellingPrice.length];
        Map<Integer, Integer> map = new HashMap<>();
        for(int i = 0; i<oneTimeFee.length; i++)
        {
            for(int j = 0; j<sellingPrice.length; j++)
            {
                income[i][j] = sellingPrice[j] - oneTimeFee[i] - transportCosts[i][j];
                System.out.println(income[i][j]);

                if(i == 0) {
                    map.put(j, income[i][j]);
                }
                else{
                    map.put(j+sellingPrice.length,income[i][j]);
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
                    if (k <= 3 && sellers[0] >= 0) {
                       if(buyers[k]>0)
                       {
                           if(sellers[0]-buyers[k]>0)
                           {
                               grandFinale[0][k] =  buyers[k];
                               sellers[0] -= buyers[k];
                               buyers[k] -= sellers[0];
                           }
                           else
                           {
                               grandFinale[0][k] = sellers[0];
                               grandFinale[1][k] = buyers[k] - sellers[0];
                               sellers[1] -= sellers[0];
                               sellers[0] = 0;
                               buyers[k] = 0;
                           }
                       }
                        System.out.println("1 "+ grandFinale[0][k]);
                    }
            if (k > 3 && sellers[1] > 0){
                if(buyers[k-4]>0)
                {
                    if(sellers[1] - buyers[k-4]>=0)
                    {
                        grandFinale[1][k-4] = buyers[k-4];
                        sellers[1] -= buyers[k-4];
                        buyers[k-4] -= sellers[1];
                    }
                    else
                    {
                        grandFinale[1][k-4] = sellers[1];
                        grandFinale[0][k-4] = buyers[k-4] - sellers[1];
                        sellers[0] -= sellers[1];
                        sellers[1] = 0;
                        buyers[k-4] = 0;
                    }
                }
                System.out.println("2 "+ grandFinale[1][k-4]);
            }
        }
        System.out.println(grandFinale[0][0] + "\t" + grandFinale[0][1] + "\t" +grandFinale[0][2] + "\t" + grandFinale[0][3] );
        System.out.println(grandFinale[1][0] + "\t" + grandFinale[1][1] + "\t" +grandFinale[1][2] + "\t" + grandFinale[1][3] );
    }
}
