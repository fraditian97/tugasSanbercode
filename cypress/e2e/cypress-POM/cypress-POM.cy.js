import loginpage from "../../support/pageObject/loginpage";

describe ('Secanrio Login',() =>{

    beforeEach(()=>{
        cy.visit('/index.php/auth/login');

    });

    it ('tc1-loginValid', () => {
        cy.get("input[placeholder='Username']").clear().type('Admin')
        cy.xpath("//input[@placeholder='Password']").clear().type('admin123')
        cy.get("button[type='submit']").click()

    })

});