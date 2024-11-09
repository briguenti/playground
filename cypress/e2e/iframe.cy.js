describe('Iframe', () => {
    beforeEach(() => {
        cy.doLogin()
        cy.navBar('iframe', 'IFrame')
    })

    it('Deve preencher o nome em uma página Iframe', () => {
        cy.get('[data-cy="iframe-inputs"]')
            .then(($iframe) => {
                const $body = $iframe.contents().find('body')
                
                cy.wrap($body)
                    .find('input[data-cy="fullname"]')
                    .type('Vinicius Briguenti')
            })
    })
})