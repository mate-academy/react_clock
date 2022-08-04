const clock = {
  time: () => cy.get('.Clock__time'),
  name: () => cy.get('.Clock__name'),
};

describe('Page', () => {
  let actualTime;

  beforeEach(() => {
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log')
          .as('consoleLog');
      },
      onLoad() {
        actualTime = new Date().toLocaleTimeString();
      }
    });
  });

  it('should show actual time by default', () => {
    clock.time()
      .should('have.text', actualTime);
  });

  it('should hide the Clock after a right click', () => {
    clock.time()
      .should('exist')

    cy.get('body').rightclick();

    clock.time()
      .should('not.exist');
  });

  it('should show the Clock after a click', () => {
    cy.get('body').rightclick();

    clock.time()
      .should('not.exist');

    cy.get('body').click();

    clock.time()
      .should('exist');
  });

  it('should print each second also in DevTools console', () => {
    cy.wait(1000);

    cy.get('@consoleLog')
      .should('have.callCount', 2);
  });

  it('should not print \each second to DevTools when clock is hidden', () => {
    cy.get('body').rightclick();

    cy.wait(1000);

    cy.get('@consoleLog')
      .should('have.callCount', 1);
  });

  it('should continue show time after click on "Hide Clock" and "Show Clock"', () => {
    cy.get('body').rightclick();
    clock.time()
      .should('not.exist')

    cy.get('body').click();

    cy.wait(1000);

    cy.get('@consoleLog')
      .should('have.callCount', 3);
  });

  it('should print a renaming message in the console after a name update', () => {
    let oldName = '';

    clock.name().then($name => {
      oldName = $name.text();
    });

    cy.wait(3300);

    cy.get('@consoleLog')
      .should('have.callCount', 5)

    clock.name().then($name => {
      const newName = $name.text();

      cy.get('@consoleLog')
        .should('be.calledWith', `Renamed from ${oldName} to ${newName}`)
    })
  });
});
