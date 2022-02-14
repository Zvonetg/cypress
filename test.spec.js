/// <reference types ="cypress" />

it('loads the home page', () =>   //naziv scenarija

{   
    //cy.viewport - za prikaz, može biti mobitel može druga rezolucija itd itd...
    cy.visit('https://agency04.com/');    //link za stranicu ili poveznica za index
})
   it('setanje po hederu', () => 
   {
    cy.contains('Projects').should('exist');  //sadržaj
    //cy.contains('Projects').should('not.exist');
    cy.get('.menu-item-172').click();
    cy.wait(2000);
    cy.get('.menu-item-2532').click();
    cy.wait(2000);
    cy.get('.menu-item-405').click();
    cy.wait(2000);
    cy.get('.menu-item-1306').click();
    cy.wait(2000);
   })
 
   it('prijava za posao', () => 
    {
        cy.get(':nth-child(9) > .c-jobs__item_link > .e-btn').click();
        cy.wait(2000);
        cy.scrollTo("bottom");
        //poslati slova na e-mail polje
        //označiti checkbox i kliknuti na submit
        
        // cy.get('input').type('Hello, World') // Type 'Hello, World' into the 'input'
   })

// dodati jos nesto