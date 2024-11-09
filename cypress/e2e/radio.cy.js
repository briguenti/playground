describe('Radio Buttons', () => {
    beforeEach(() => {
        cy.doLogin()
        cy.navBar('radio', 'Radio Buttons')
    })

    it('Deve marcar o framework usado no Curso Cypress Skills', () => {
        cy.contains('label', 'Cypress')
            .click()
    })
})