describe('Checkbox', () => {

    beforeEach(() => {
        cy.doLogin()
        cy.navBar('checkbox', 'Checkbox')
    })

    it('Deve marcar as linguagens que usam NodeJS', () => {
        //Sempre um checkbox precisa ter a propriedade value com valores diferentes para cada opção
        cy.get('label[for="javascript"]')
            .click()
        //.parent() busca o elemento pai para clicar
        //.click({force: true}) O dev ocultou o elemento input padrão na pagina, pois foi feito uma estilização que quando clicada, ativada o checkbox

        cy.get('label[for="typescript"]')
            .click()
    })

    it('Deve marcar todas as opções', () => {
        const languages = ['javascript', 'python', 'rust', 'go', 'typescript']

        languages.forEach(lang => {
            cy.get(`label[for="${lang}"]`)
                .click()
        })

        cy.get('input[type="checkbox"]').should('be.checked')
    })
})

