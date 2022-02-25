describe('fourreact: Fourreact component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=fourreact--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Fourreact!');
    });
});
