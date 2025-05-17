
class loginpage {
    visit() {
        //Buka halaman Website Login
     cy.visit('/index.php/auth/login');
     }
    inputUsername (){
    cy.get("input[placeholder='Username']").clear().type('Admin')
    }
    Inputpassword (){
    cy.xpath("//input[@placeholder='Password']").clear().type('admin123')
    }
    loginbtn(){
    cy.get("button[type='submit']").click()
    }
 }

 export default new loginpage()
