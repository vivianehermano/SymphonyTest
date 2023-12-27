describe('Check whether the text content of the selected element, after being converted to an array and sorted, remains the same.', () => {
  it('Sorting Test', () => {
    cy.visit('https://www.saucedemo.com/')

    cy.get('.login_credentials_wrap-inner').invoke('text')
    .then(originalText => {
      const originalArray = Cypress.$.makeArray(originalText).map(item => item.trim());
      const sortedArray = [...originalArray].sort();
      expect(originalArray).to.eql(sortedArray);
});
});
});

