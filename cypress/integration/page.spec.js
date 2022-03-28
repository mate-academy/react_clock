describe('Page', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('consoleLog');
      },
    });
  });

  it('should show actual time by default', () => {
    const actualTime = new Date().toLocaleTimeString();

    cy.getByDataCy('clock')
      .should('contain', actualTime);
  });

  it('should contain show button', () => {
    cy.getByDataCy('clock')
      .selectElement('show-button')
      .should('exist');
  });

  it('should contain hide button', () => {
    cy.getByDataCy('clock')
      .selectElement('hide-button')
      .should('exist');
  });

  it('should hide clock after the clicj on the hide button', () => {
    cy.getByDataCy('clock')
      .selectElement('clock')
      .should('exist');

    cy.getByDataCy('clock')
      .selectElement('hide-button')
      .click();
    
    cy.getByDataCy('clock')
      .selectElement('clock')
      .should('not.exist');
  });

  it('should show clock after the click on the show button', () => {
    cy.getByDataCy('clock')
      .selectElement('hide-button')
      .click();
    
    cy.getByDataCy('clock')
      .selectElement('clock')
      .should('not.exist');
    
    cy.getByDataCy('clock')
      .selectElement('show-button')
      .click();
    
    cy.getByDataCy('clock')
      .selectElement('clock')
      .should('exist');
  });

  it('should print each second also in DevTools ', () => {
    cy.wait(2000);
    cy.get('@consoleLog').should('to.be.calledThrice')
  });
});
