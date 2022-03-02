package com.trig.api.network.response;
import com.google.gson.*;
interface IWynnResponse {


  // the "data" main object.
  JsonArray getHead();



  JsonObject getMeta();


  JsonArray getClassData();



  
}