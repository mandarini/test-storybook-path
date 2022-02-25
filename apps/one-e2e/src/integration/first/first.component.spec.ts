describe('one', () => {
  beforeEach(() => cy.visit('/iframe.html?id=firstcomponent--primary'));
  it('should render the component', () => {
    cy.get('test-manzi-first').should('exist');
  });
});