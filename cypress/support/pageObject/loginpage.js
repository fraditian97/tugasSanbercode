import logindata from "../../fixtures/logindata.json";

class loginpage {
    visit() {
        //Buka halaman Website Login
     cy.visit('/index.php/auth/login');
     }

    inputUsername (username){
    cy.get("input[placeholder='Username']").clear().type(username)
    }

    Inputpassword (password){
    cy.xpath("//input[@placeholder='Password']").clear().type(password)
    }
    
    loginbtn(){
    cy.get("button[type='submit']").click()
    }
    
 }

export default new loginpage ()
