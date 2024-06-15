describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('API test without JWT token', () => {
  it('should return unauthorized without JWT token', () => {
    cy.request({
      method: 'GET',
      url: 'http://localhost:8080/api/v1/user',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });
});


