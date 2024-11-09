describe('CEP', () => {
    beforeEach(() => {
        cy.doLogin()
        cy.navBar('cep', 'CEP (API dos Correios)')
    })

    it('Deve cadastrar um endereço consumindo a API dos correios', () => {
        const address = {
            cep: '18276842',
            logradouro: 'Rua Deocacyr Silvestre Domingues',
            localidade: 'Tatuí',
            uf: 'SP'
        }

        cy.intercept('GET', `https://viacep.com.br/ws/${address.cep}/json/`, {
            statusCode: 200,
            body: address
        }).as('getCep')

        cy.get('#cep').type(address.cep)
        cy.contains('button', 'Cadastrar').click()

        cy.wait('@getCep')

        cy.get('input[name="logradouro"]', { timeout: 6000 })
            .should('have.value', address.logradouro)

        cy.get('input[name="cidade"]', { timeout: 6000 })
            .should('have.value', address.localidade)

        cy.get('input[name="estado"]', { timeout: 6000 })
            .should('have.value', address.uf)
    })
})