/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gizmoideas.youLunch.dto;

import com.gizmoideas.youLunch.Annotation.PojoRMO;

/**
 *
 * @author ipena
 */
@PojoRMO()
public class UserApp {
    private String id;
    private String email;
    private String password;
    private String firstName;
    private String lastName;
    

    

    public UserApp(String id, String email, String password, String firstName, String lastName) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public UserApp() {
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getId() {
        return id;
    }
    
    
    
    
}
