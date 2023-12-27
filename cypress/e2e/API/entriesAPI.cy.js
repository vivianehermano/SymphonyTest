describe('Authentication & Authorization', () => {
  it('Find objects with property: Authentication & Authorization', () => {
    cy.request('https://api.publicapis.org/entries')
      .then((response) => {
        expect(response.status).to.eq(200);

        const jsonResponse = response.body.entries;

        const entriesArray = jsonResponse && Array.isArray(jsonResponse) ? jsonResponse : [];
        const filteredObjects = entriesArray.filter(entry => entry.Auth === "apiKey");

        const numberOfObjects = filteredObjects.length;

        console.log("Found objects with Auth: apiKey");
        console.log(filteredObjects);
        console.log(`Total number of objects: ${numberOfObjects}`);

        expect(numberOfObjects).to.be.greaterThan(0);
      });
  });
});
