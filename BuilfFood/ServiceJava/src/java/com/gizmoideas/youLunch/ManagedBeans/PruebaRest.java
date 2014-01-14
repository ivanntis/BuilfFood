/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gizmoideas.youLunch.ManagedBeans;

import RESTdELETE.ClientRest;
import javax.faces.component.html.HtmlOutputText;

/**
 *
 * @author ipena
 */

public class PruebaRest {
    HtmlOutputText textPOST=new HtmlOutputText();
    /**
     * Creates a new instance of PruebaRest
     */
    public PruebaRest() {
       // NewJerseyClient test =new NewJerseyClient("Ivan", "Pena");
        ClientRest test =new ClientRest();
        textPOST.setValue(test.getLogin("ivan","pena"));
       
    }

    public HtmlOutputText getTextPOST() {
        return textPOST;
    }

    public void setTextPOST(HtmlOutputText textPOST) {
        this.textPOST = textPOST;
    }
    

    

}
