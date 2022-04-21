const page = {
  showClock() {
    return cy.contains('Show Clock');
  },
  hideClock() {
    return cy.contains('Hide Clock');
  },
  time() {
    return cy.getByDataCy('time');
  }
};

describe('Page', () => {
  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log')
          .as('consoleLog');
      },
    });
  });

  it('should show actual time by default', () => {
    const actualTime = new Date().toLocaleTimeString();

    cy.get('.App')
      .should('contain', actualTime);
  });

  it('should contain "Show Clock" button', () => {
    page.showClock()
      .should('exist');
  });

  it('should contain "Hide Clock" button', () => {
    page.hideClock()
      .should('exist');
  });

  it('should hide clock after the click on the "Hide Clock" button', () => {
    page.time()
      .should('exist');

    page.hideClock()
      .click();
    
    page.time()
      .should('not.exist');
  });

  it('should show clock after the click on the "Show Clock" button', () => {
    page.hideClock()
      .click();
    
    page.time()
      .should('not.exist');
    
    page.showClock()
      .click();
    
    page.time()
      .should('exist');
  });

  it('should print each second also in DevTools console', () => {
    cy.wait(1000);
    cy.get('@consoleLog')
      .should('to.be.calledTwice');
  });

  it('should not print not pring each second to DevTools when clock is hidden', () => {
    page.hideClock()
      .click();

    cy.wait(1000);
    cy.get('@consoleLog')
      .should('to.be.calledOnce');
  });

  it('should continue show time after click on "Hide Clock" and "Show Clock"', () => {
    page.hideClock()
      .click();
    page.showClock()
      .click();

    cy.wait(1000);
    cy.get('@consoleLog')
      .should('to.be.calledTwice');
  });
});
