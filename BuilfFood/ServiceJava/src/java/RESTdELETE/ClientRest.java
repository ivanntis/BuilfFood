/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package RESTdELETE;

import com.sun.jersey.api.client.Client;
import com.sun.jersey.api.client.UniformInterfaceException;
import com.sun.jersey.api.client.WebResource;

/**
 * Jersey REST client generated for REST resource:AuthenticationWS [/]<br>
 * USAGE:
 * <pre>
 *        ClientRest client = new ClientRest();
 *        Object response = client.XXX(...);
 *        // do whatever with response
 *        client.close();
 * </pre>
 *
 * @author ipena
 */
public class ClientRest {
    private WebResource webResource;
    private Client client;
    private static final String BASE_URI = "http://localhost:3080/wsLunch/authentication";

    public ClientRest() {
        com.sun.jersey.api.client.config.ClientConfig config = new com.sun.jersey.api.client.config.DefaultClientConfig();
        client = Client.create(config);
        webResource = client.resource(BASE_URI);
    }

    public String getPostVersion(String version) throws UniformInterfaceException {
        return webResource.path(java.text.MessageFormat.format("{0}", new Object[]{version})).post(String.class);
    }

    public String getLogin(String userName, String password) throws UniformInterfaceException {
        WebResource resource = webResource;
        resource = resource.path(java.text.MessageFormat.format("{0}/{1}", new Object[]{userName, password}));
        return resource.accept(javax.ws.rs.core.MediaType.APPLICATION_JSON).get(String.class);
    }

    public String getEmail(String email) throws UniformInterfaceException {
        WebResource resource = webResource;
        resource = resource.path(java.text.MessageFormat.format("{0}", new Object[]{email}));
        return resource.accept(javax.ws.rs.core.MediaType.TEXT_PLAIN).get(String.class);
    }

    public void close() {
        client.destroy();
    }
    
}
