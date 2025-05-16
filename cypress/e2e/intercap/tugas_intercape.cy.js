describe ('Secanrio Login',() =>{

    beforeEach(()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    });

    it ('tc1-loginValid', () => {
        cy.get("input[placeholder='Username']").clear().type('Admin')
        cy.xpath("//input[@placeholder='Password']").clear().type('admin123')
        cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('adit')
        cy.get("button[type='submit']").click()
        cy.wait('@adit').its('response.statusCode').should('eq',200);
    })

    
    it ('tc2-loginValid', () => {
    cy.get("input[placeholder='Username']").clear().type('Admin')
    cy.xpath("//input[@placeholder='Password']").clear().type('admin123')
    cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/locations').as('location')
    cy.get("button[type='submit']").click()
    cy.wait('@location').its('response.statusCode').should('eq',200);
  })
    
it ('tc3-loginValid', () => {
cy.get("input[placeholder='Username']").clear().type('Admin')
cy.xpath("//input[@placeholder='Password']").clear().type('admin123')
cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/shortcuts').as('shorcut')
cy.get("button[type='submit']").click()
cy.wait('@shorcut').its('response.statusCode').should('eq',200);
})

});