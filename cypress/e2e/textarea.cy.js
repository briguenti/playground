describe('Textarea', () => {
    it('Deve preencher o campo da área de texto', () => {
        cy.doLogin()
        cy.navBar('textarea', 'Textarea')

        cy.get('textarea[name="message"]')
            .type("Boas vindas ao Cypress Skills. Um curso de formação completo para você aprender sobre automação de testes com o Cypress.")
    })
})

