package elites.forms;

import javax.servlet.http.HttpServletRequest;
import org.apache.struts.action.ActionErrors;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionMapping;

/**
 * Form bean for a Struts application.
 * @version 	1.0
 * @author
 */
public class MgloginForm extends ActionForm

{private String pwd=null;

   public void setpwd(String pwd){
	  this.pwd=pwd;
 }

   public String getpwd(){
	  return this.pwd;
 }

   private String mgid=null;

   public void setmgid(String mgid){
	  this.mgid=mgid;
 }

   public String getmgid(){
	  return this.mgid;
 }

    public void reset(ActionMapping mapping, HttpServletRequest request) {

	// Reset field values here.

    }

    public ActionErrors validate(ActionMapping mapping,
	    HttpServletRequest request) {

	ActionErrors errors = new ActionErrors();
	// Validate the fields in your form, adding
	// adding each error to this.errors as found, e.g.

	// if ((field == null) || (field.length() == 0)) {
	//   errors.add("field", new org.apache.struts.action.ActionError("error.field.required"));
	// }
	return errors;

    }
}
