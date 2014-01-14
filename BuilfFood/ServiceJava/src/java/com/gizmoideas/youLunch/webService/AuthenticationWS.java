/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package com.gizmoideas.youLunch.webService;

import com.gizmoideas.youLunch.dto.UserApp;
import com.google.gson.Gson;
import java.io.File;
import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

/**
 *
 * @author ipena
 */
@Path("/")
public class AuthenticationWS {
    

    @GET
    @Produces("text/plain")
    @Path("/{email}")
    public String getEmail(@PathParam("email") String email){
        return "Hola Mundo GET "+email;
    }
//    @GET
//    @Produces("text/plain")
//    @Path("/{version}")
//    public String getVersion(@PathParam("version") String version){
//        return "Hola Mundo  "+version;
//    }
//    
//    @GET
//    @Produces("text/plain")
//    @Path("/")
//    public String getAuthor(@DefaultValue("IPENA") @QueryParam("autor") String author, @DefaultValue("2013") @QueryParam("createDate") String createDate){
//        return "Hola Mundo  "+author+" "+createDate;
//    }
//    
    @GET
    @Produces("application/json")
    @Path("/{userName}/{password}")
    public String getLogin(@PathParam("userName") String userName,@PathParam("password") String password) throws ClassNotFoundException, IOException{
       ArrayList userList=new ArrayList();
       userList.add(new UserApp("../img/offerIMG/DonGato.jpg",userName, password, "Ivan Ricardo", "Peña Sierra"));
       userList.add(new UserApp("../img/offerIMG/imgGoogleGizmo.png",userName, password, "Daniela Katerin", "Peña Sierra"));
        Gson mapUser=new Gson();
        return mapUser.toJson(userList);
        //UserApp.class.getAnnotation(com.gizmoideas.youLunch.Annotation.PojoRMO.class);
        //String scanPackage="com";
        //Class scanAnnotiation=com.gizmoideas.youLunch.Annotation.PojoRMO.class;
       // return "Clases en "+scanPackage+":\n "+classesForPackage(scanPackage).toString()
        //        +"\n\nClases con anotacion "+scanAnnotiation.getName()+":\n "+getAnnotationForPackage(scanPackage,scanAnnotiation).toString();
         
    }
    
    public List<Class<?>>classesForPackage(String scannedPackage) throws IOException, ClassNotFoundException{
        
        Enumeration<URL> res=(Thread.currentThread().getContextClassLoader()).getResources(scannedPackage);
        ArrayList allClassesPackage=new ArrayList();
        while (res.hasMoreElements()){
            allClassesPackage.addAll(findClasses(new File(res.nextElement().getFile()),scannedPackage,scannedPackage));
        }
       
        return  allClassesPackage;
        
    }
    public List<Class<?>>findClasses(File file,String resourseScanned, String scannedPackage) throws ClassNotFoundException{
             ArrayList allClassesPackage=new ArrayList();

            if(file.isDirectory()){
                for (File nestedFile : file.listFiles()) {
                    allClassesPackage.addAll(findClasses(nestedFile, scannedPackage+"/"+file.getName(),scannedPackage));
                }
            }else if(file.getName().endsWith(".class")){
              String fullClass=getFullNameClass(scannedPackage, file); 
              allClassesPackage.add(Class.forName(fullClass.substring(0,fullClass.lastIndexOf("."))));
                
            }
            return  allClassesPackage;
    }
    
    public List<Class<?>>getAnnotationForPackage(String scannedPackage,Class annotation) throws IOException, ClassNotFoundException{
        ArrayList allClassesPackage=new ArrayList();
        for (Class next : classesForPackage(scannedPackage)) {
            if(next.getAnnotation(annotation)!=null){
                allClassesPackage.add(next);
            }
        }
        return  allClassesPackage;
    }
    
    public String getFullNameClass(String scannedPackage,File file){
        String pathFull= file.getAbsolutePath().replace(File.separator, ".");
        return pathFull.substring(pathFull.indexOf(scannedPackage.replace("/",".")));
         
    }
    
    @POST
    @Produces("text/plain")
    @Path("/{version}")
    public String getPostVersion(@PathParam("version") String version){
        return "Hola Mundo PUT "+version;
    }
    
    
}
