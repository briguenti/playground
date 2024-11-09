describe('Tags', () => {
    beforeEach(() => {
        cy.doLogin()
        cy.navBar('tags', 'Tags')
    })

    it('Deve adicionar algumas tags', () => {

        const tags = ['Cypress', 'Javascript', 'NodeJS']

        tags.forEach(tag => {
            cy.get('.new-tag')
                .type(`${tag}{Enter}`)
                .should('have.value', '')
            cy.wait(500) //think time, para humanizar
        })

        tags.forEach(tag => {
            cy.get('.tag-input')
                .should('contain', tag)
        })
    })
})