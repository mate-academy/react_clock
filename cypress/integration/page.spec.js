const page = {
  getByDataCy: name => cy.get(`[data-cy="${name}"]`),
  allButton: () => page.getByDataCy('all-button'),
  firstFiveButton: () => page.getByDataCy('first-five-button'),
  redButton: () => page.getByDataCy('red-button'),
  goods: () => page.getByDataCy('good'),
};

const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

describe('Page', () => {
  beforeEach(() => {
    cy.intercept(API_URL, cy.spy().as('apiCall'));
    cy.visit('/');
  });

  it('should show no goods by default', () => {
    page.goods()
      .should('have.length', 0);
  });

  it('should load all 13 goods', () => {
    page.allButton().click();

    page.goods()
      .should('have.length', 13);
  });

  it('should use expected colors for the goods', () => {
    page.allButton().click();

    page.goods().eq(0).should('have.css', 'color', 'rgb(255, 0, 0)');
    page.goods().eq(1).should('have.css', 'color', 'rgb(0, 128, 0)');
    page.goods().eq(2).should('have.css', 'color', 'rgb(0, 0, 255)');
    page.goods().eq(3).should('have.css', 'color', 'rgb(255, 0, 0)');
  });

  it('should load the first 5 goods', () => {
    page.firstFiveButton().click();

    page.goods()
      .should('have.length', 5);

    page.goods().eq(0).should('have.text', 'Apple');
    page.goods().eq(1).should('have.text', 'Bread');
    page.goods().eq(2).should('have.text', 'Carrot');
    page.goods().eq(3).should('have.text', 'Dumplings');
    page.goods().eq(4).should('have.text', 'Eggs');
  });

  it('should load red goods', () => {
    page.redButton().click();

    page.goods()
      .should('have.length', 5);
    
    page.goods().eq(0).should('have.text', 'Potato');
    page.goods().eq(1).should('have.text', 'Ice cream');
    page.goods().eq(2).should('have.text', 'Fish');
    page.goods().eq(3).should('have.text', 'Garlic');
    page.goods().eq(4).should('have.text', 'Dumplings');
  });

  it('should not send requests to the server by default', () => {
    cy.get('@apiCall')
      .its('callCount')
      .should('equal', 0);
  });

  it('should send a new request on each click', () => {
    page.allButton().click();
    cy.get('@apiCall').its('callCount').should('equal', 1);

    page.firstFiveButton().click();
    cy.get('@apiCall').its('callCount').should('equal', 2);

    page.redButton().click();
    cy.get('@apiCall').its('callCount').should('equal', 3);

    page.allButton().click();
    cy.get('@apiCall').its('callCount').should('equal', 4);
  })
});
