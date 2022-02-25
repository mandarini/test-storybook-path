describe('threeng', () => {
  beforeEach(() => cy.visit('/iframe.html?id=ccccomponent--primary'));
  it('should render the component', () => {
    cy.get('test-manzi-ccc').should('exist');
  });
});