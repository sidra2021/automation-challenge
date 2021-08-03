const { Section1 } = require("c:/Users/Sidra/Documents/automation-challenge/cypress/objects/section-1")

describe('Problem 1', () => {
  /**
   * Example:
   * To access assertSampleApiResponse() from Section1, you can do: Section1.actions.assertSampleApiResponse();
   *
   * Test away!
   */

   //Section1.actions.assertSampleApiResponse();

   

   describe("section 1", () => {
    it("locate anchor tag", () => {
      cy.visit("http://localhost:8080/");
      cy.contains("Section 1 (required)").click();

      //1. Assert that the table is not visible
      cy.get('[data-test=table-header] > :nth-child(1)').should('not.be.visible');

      //2. after clicking the show table button, assert that table is visible
      cy.get('[data-test=table-toggle-button]').click();
      cy.get('[data-test=table-header] > :nth-child(1)').should('be.visible');

     
      //3. how to assert that the table is 5 columns wide
      cy.get('[data-test=table-header]').find('th').should('have.length', 5);

      
      //4. Assert that the table is 10 rows long, excluding the first (header) row
      cy.get('[data-test=user-table]').find('tr').its('length').should('eq', 11);
      //cy.get('table tbody tr').as('cyRows').should('have.length.of', dataTableRaw.length - 1);
      
      
      //5. Assert that at least 5 entries have the role "user"
      cy.get('[data-test=user-table]').find(':nth-child(4) > :nth-child(5)').should('contain', 'user');
      cy.get('[data-test=user-table]').find(':nth-child(5) > :nth-child(5)').should('contain', 'user');
      cy.get('[data-test=user-table]').find(':nth-child(6) > :nth-child(5)').should('contain', 'user');
      cy.get('[data-test=user-table]').find('tbody > :nth-child(8) > :nth-child(5)').should('contain', 'user');
      cy.get('[data-test=user-table]').find(':nth-child(9) > :nth-child(5)').should('contain', 'user');
      cy.get('[data-test=user-table]').find('tr').should('contain', 'user');
       

      });
  
    });

})
