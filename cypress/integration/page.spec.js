const page = {
  getShowClockButton() {
    return cy.contains('Show Clock');
  },
  getHideClockButton() {
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
    page.getShowClockButton()
      .should('exist');
  });

  it('should contain "Hide Clock" button', () => {
    page.getHideClockButton()
      .should('exist');
  });

  it('should hide clock after the click on the "Hide Clock" button', () => {
    page.time()
      .should('exist');

    page.getHideClockButton()
      .click();

    page.time()
      .should('not.exist');
  });

  it('should show clock after the click on the "Show Clock" button', () => {
    page.getHideClockButton()
      .click();

    page.time()
      .should('not.exist');

    page.getShowClockButton()
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
    page.getHideClockButton()
      .click();

    cy.wait(1000);
    cy.get('@consoleLog')
      .should('to.be.calledOnce');
  });

  it('should continue show time after click on "Hide Clock" and "Show Clock"', () => {
    page.getHideClockButton()
      .click();
    page.getShowClockButton()
      .click();

    cy.wait(1000);
    cy.get('@consoleLog')
      .should('to.be.calledTwice');
  });
});
