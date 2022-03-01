package com.trig.api.player.classes.enums;
import java.util.*;

enum WynnClassType {

  MAGE("Mage", ""),
  ARCHER("Archer", "Hunter"),
  ;

  private String name;
  
  private List<String> alternativeNames; 


  WynnClassType(String name, String... alternativeNames) {
    this.name = name;
    this.alternativeNames = Arrays.asList(alternativeNames);    
  }

  public String getName() {
    return this.name;
  }

  
  public List<String> getAlternativeNames() {
    return alternativeNames;
  }
  
}