describe('Login', () => {
  it('Deve logar com sucesso', () => {
    cy.login('papito@cyskills.com.br', 'showtime')
    cy.userLoggedIn()
  })

  it('Não deve logar com senha curta', () => {
    cy.login('papito@cyskills.com.br', '123')
    cy.noticeHave('A senha precisa ter pelo menos 6 caracteres. Vamos tentar de novo!')
  })

  it('Não deve logar com senha inválida', () => {
    cy.login('papito@cyskills.com.br', 'abc123')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com e-mail não cadastrado', () => {
    cy.login('vini@cyskills.com.br', 'abc123')
    cy.noticeHave('E-mail ou senha incorretos. Por favor, tente novamente!')
  })

  it('Não deve logar com e-mail incorreto', () => {
    cy.login('www.vini.com.br', '123')
    cy.noticeHave('O formato do e-mail está incorreto. Por favor, verifique e tente novamente!')
  })
  
  it('Não deve logar sem o e-mail', () => {
    cy.login('', 'abc123')
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')
  })

  it('Não deve logar sem a senha', () => {
    cy.login('papito@cyskills.com.br', '')
    cy.noticeHave('Por favor, digite sua senha para continuar.')
  })

  it('Não deve logar sem informar campos obrigatórios', () => {
    cy.login('', '')
    cy.noticeHave('Parece que você esqueceu de informar seu e-mail.')
  })
})