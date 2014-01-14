/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gizmoideas.youLunch.dto;

/**
 *
 * @author ipena
 */
public class Address {
    String city;
    String contry;
    String departament;
    String addressNumber;

    public Address(String city, String contry, String departament, String addressNumber) {
        this.city = city;
        this.contry = contry;
        this.departament = departament;
        this.addressNumber = addressNumber;
    }

    public Address() {
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getContry() {
        return contry;
    }

    public void setContry(String contry) {
        this.contry = contry;
    }

    public String getDepartament() {
        return departament;
    }

    public void setDepartament(String departament) {
        this.departament = departament;
    }

    public String getAddressNumber() {
        return addressNumber;
    }

    public void setAddressNumber(String addressNumber) {
        this.addressNumber = addressNumber;
    }
    
    
}
