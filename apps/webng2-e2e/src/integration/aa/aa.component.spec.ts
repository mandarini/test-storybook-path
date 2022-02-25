describe('webng2', () => {
  beforeEach(() => cy.visit('/iframe.html?id=aacomponent--primary'));
  it('should render the component', () => {
    cy.get('test-manzi-aa').should('exist');
  });
});