describe('Input Fields', () => {
    it('Deve preencher o campo texto', () => {
        cy.doLogin()
        cy.navBar('input-fields', 'Input Fields')

        cy.get('input[data-cy="fullname"]')
            .type('Vinicius Briguenti')

        cy.get('#email')
            .type('vini@teste.com.br')

        cy.get('input[name="number"]')
            .type('15999999999')

        cy.get('input[type="date"]')
            .type('2024-12-01')
    })
})