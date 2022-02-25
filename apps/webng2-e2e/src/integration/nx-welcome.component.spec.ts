describe('webng2', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('test-manzi-nx-welcome').should('exist');
  });
});