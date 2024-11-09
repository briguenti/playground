describe('Date Picker', () => {
    beforeEach(() => {
        cy.doLogin()
        cy.navBar('date-picker', 'Date Picker')
    })

    it('Deve adicionar minha data de aniversário', () => {
        cy.get('input[placeholder="Escolha uma data"][readonly]')
            .click()

        cy.get('select[aria-label="Month"]')
            .select('Maio')
        
        cy.get('input[aria-label="Year"]')
            .type('1999')
        
        cy.get('span[aria-label="Maio 26, 1999"]')
            .click()
    })
})