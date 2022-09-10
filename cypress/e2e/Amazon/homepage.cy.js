/// <reference types="cypress" />




describe('amazon website page', () => {


  it('search for a product', () => {


      
      cy.visit('https://www.amazon.com')


    

   cy.url().should('include','https://www.amazon.com')

   cy.get('#twotabsearchtextbox').type('iphone 13')

   cy.get('#nav-flyout-searchAjax')

   //cy.get(':nth-child(4) > .s-suggestion-container > .s-suggestion').click();//
   


    })
    });

