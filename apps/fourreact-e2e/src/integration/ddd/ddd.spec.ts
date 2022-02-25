describe('fourreact: Ddd component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=ddd--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Ddd!');
    });
});
