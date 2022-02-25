describe('webng2', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('test-manzi-root').should('exist');
  });
});