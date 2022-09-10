/// <reference types="cypress" />




describe('jumia website page', () => {

beforeEach(() => {

    cy.visit('https://www.jumia.com')
 })
        
      it('search for a product', () => {

           cy.get('#fi-q').type('washing machine')
 })


            it('click on account', () => {
                cy.get(':nth-child(1) > .trig > .-mls').click()
                cy.get(':nth-child(1) > .trig').click()
                cy.get('[href="/customer/account/index/"]').click({force:true})

            })
            
            it('order', () => {
                cy.get(':nth-child(1) > .trig > .-mls')
                 cy.get('[href="/customer/order/index/"]').click({force:true})
            })
                 it('order', () => {
                    cy.get(':nth-child(1) > .trig > .-mls')
                    cy.get('[href="/customer/wishlist/index/"]').click({force:true})



            })
             it('click on help', () => {
                
                cy.get(':nth-child(2) > .trig').click()
})
            it('click on cart', () => {

                 //cy.get('.-gy8').click({force:true})
                 cy.get('.header')
                cy.get('.header > .row > .col')
                cy.get('.col > .-gy8').click()

})
            it('click on options', () => {
                cy.get('.col3 > .dpdw > .trig > .-fsh0 > .ic').click()
})
                it ('Jumia Help', ()=>{
                    cy.url().should('include','https://www.jumia.com.ng')
                    cy.get(':nth-child(2) > .trig').click()
                cy.get('[href="https://www.jumia.com.ng/sp-cancel-order/"]').click()
 })

                it('track order', () =>{
                    cy.url().should('include','https://www.jumia.com.ng')
                    cy.get(':nth-child(2) > .trig').click()
                    cy.get('[href="https://www.jumia.com.ng/sp-help-with-my-orders/"]'). click()


        })       
        it('returns and refunds', () =>{
            cy.url().should('include','https://www.jumia.com.ng')
            cy.get(':nth-child(2) > .trig').click()
            cy.get('.inbox > [href="https://www.jumia.com.ng/returns-refunds/"]').click()
})
it('payments', () =>{
    cy.url().should('include','https://www.jumia.com.ng')
    cy.get(':nth-child(2) > .trig').click()
    cy.get('[href="https://www.jumia.com.ng/how-to-pay/"]').click()

})
it ('Sign up', ()=>{
    cy.get(':nth-child(1) > .trig > .-mls').click()
    cy.get('#dpdw-login-box > .inbox > .-pam > .btn').click()
    cy.get('main.-bg-wt > .-pvm').scrollIntoView()
    cy.get(':nth-child(2) > .col12 > ._prim').click({force:true})
    cy.get('#fi-firstName').type('Name', {force:true})
    cy.get('#fi-lastName').type('lastName', {force:true})
       cy.get('#fi-phone').type('09054325689',{force:true})
       cy.get('.-ptl > .btn').click({force:true})
})

it('login',() =>{
    cy.get(':nth-child(1) > .trig > .-mls').click()
    cy.get('#dpdw-login-box > .inbox > .-pam > .btn').click()
    cy.get('main.-bg-wt > .-pvm').scrollIntoView()
    cy.get('#authForm > .-flupp').click({force:true})
    cy.get('#fi-password').type('olawumi',{force:true})
    cy.get('#fi-email').type('adedireolawumi@gmail,com',{force:true})
    cy.get('.-df > .fi-w > .lbl').click
    cy.get('#authForm > ._prim > span').click({force:true})
})
})











    
  