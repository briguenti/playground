describe('Selects', () => {
    beforeEach(() => {
        cy.doLogin()
        cy.navBar('select', 'Select')
    })

    it('Deve selecionar o Cypress', () => {
        cy.contains('label', 'Selecione um Framework de Testes')
            .parent()
            .find('select')
            .select('Cypress')
    })

    it('Deve selecionar as linguagens preferidas', () => {
        const languages = ['Java', 'Python', 'TypeScript', 'Go']

        cy.get('input[placeholder^="Linguagens de programação"]')
            .click()

        languages.forEach(lang => {
            cy.contains('.option-item', new RegExp("^" + lang + "$"))
                .click()
        })

        cy.get('.language-item')
            .should('have.length', languages.length)
    })
})