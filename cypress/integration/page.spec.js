const page = {
  clock: () => cy.get('.Clock'),
  clockTime: () => cy.get('.Clock__time'),
  clockName: () => cy.get('.Clock__name'),
};

let failed = false;

Cypress.on('fail', (e) => {
  failed = true;
  throw e;
});

describe('Clock', () => {
  beforeEach(() => {
    if (failed) Cypress.runner.stop();

    cy.clock(1661938351600);

    cy.visit('/', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'info').as('console.info');
        cy.spy(win.console, 'debug').as('console.debug');
      },
    });
  });

  describe('by default', () => {
    it('should be visible', () => {
      page.clock().should('exist');
    });

    it('should be hidden after a right click', () => {
      cy.get('body').rightclick();

      page.clock().should('not.exist');
    });

    it('should appear after a left click', () => {
      cy.get('body').rightclick();
      cy.get('body').click();

      page.clock().should('exist');
    });

    it('should show start time', () => {
      page.clockTime().should('have.text', '09:32:31');
    });

    it('should update time every second', () => {
      cy.tick(1000);
      page.clockTime().should('have.text', '09:32:32');

      cy.tick(1000);
      page.clockTime().should('have.text', '09:32:33');

      cy.tick(1000);
      page.clockTime().should('have.text', '09:32:34');
    });

    it('should not update time before 1s has passed', () => {
      cy.tick(999);
      page.clockTime().should('have.text', '09:32:31');
    });

    it('should print the time with console.info every second', () => {
      cy.tick(1000);
      cy.get('@console.info').should('be.calledOnceWithExactly', '09:32:32')

      cy.tick(1000);
      cy.get('@console.info')
        .should('have.callCount', 2)
        .and('be.calledWith', '09:32:33');

      cy.tick(1000);
      cy.get('@console.info')
        .should('have.callCount', 3)
        .and('be.calledWith', '09:32:34');
    });

    it('should not call console.info before the first time update', () => {
      cy.tick(999);
      cy.get('@console.info').should('not.be.called');
    });

    it('should have the default name', () => {
      page.clockName().should('have.text', 'Clock-0');
    });

    it('should receive and updated name every 3300ms', () => {
      cy.tick(3300);
      page.clockName().should('have.text', 'Clock-4900');

      cy.tick(3300);
      page.clockName().should('have.text', 'Clock-8200');

      cy.tick(3300);
      page.clockName().should('have.text', 'Clock-1500');
    });

    it('should not update the name before 3300ms', () => {
      cy.tick(3299);
      page.clockName().should('have.text', 'Clock-0');
    });

    it('should not call console.debug before the 1st name update', () => {
      cy.tick(3299);
      cy.get('@console.debug').should('not.be.called');
    });

    it('should print new name with console.debug each time it is updated', () => {
      cy.tick(3300);
      cy.get('@console.debug').should('be.calledOnceWithExactly', 'Renamed from Clock-0 to Clock-4900');

      cy.tick(3300);
      cy.get('@console.debug')
        .should('have.callCount', 2)
        .and('be.calledWith', 'Renamed from Clock-4900 to Clock-8200');

      cy.tick(3300);
      cy.get('@console.debug')
        .should('have.callCount', 3)
        .and('be.calledWith', 'Renamed from Clock-8200 to Clock-1500');
    });
  });

  describe('after it was hidden', () => {
    it('should not call console.info', () => {
      cy.tick(1999)
      cy.get('body').rightclick();
      cy.tick(3000);

      cy.get('@console.info').should('have.callCount', 1);
    });

    it('should not print name updates in the console', () => {
      cy.tick(3301);
      cy.get('body').rightclick();
      cy.tick(10000);

      cy.get('@console.debug').should('have.callCount', 1);
    });

    it('should not show clock before document click', () => {
      cy.get('body').rightclick();

      cy.tick(3500);
      page.clock().should('not.exist');

      cy.tick(3500);
      page.clock().should('not.exist');

      cy.tick(3500);
      page.clock().should('not.exist');
    });
  });

  describe('after it appear again', () => {
    beforeEach(() => {
      cy.tick(1500);
      cy.get('body').rightclick();
      cy.tick(2200);
      cy.get('body').click();
    });

    it('should show actual time immediately', () => {
      page.clockTime().should('have.text', '09:32:35');
    });

    it('should not update time before 1s has passed', () => {
      cy.tick(999);
      page.clockTime().should('have.text', '09:32:35');
    });

    it('should proceed updating time every second', () => {
      cy.tick(1000);
      page.clockTime().should('have.text', '09:32:36');

      cy.tick(1000);
      page.clockTime().should('have.text', '09:32:37');

      cy.tick(1000);
      page.clockTime().should('have.text', '09:32:38');
    });

    it('should not print time again to the console before 1s has passed', () => {
      cy.tick(999);
      cy.get('@console.info').should('have.callCount', 1);
    });

    it('should proceed printing time to the console every second', () => {
      cy.tick(1000);
      cy.get('@console.info')
        .should('have.callCount', 2)
        .and('be.calledWith', '09:32:36');

      cy.tick(1000);
      cy.get('@console.info')
        .should('have.callCount', 3)
        .and('be.calledWith', '09:32:37');
    });

    it('should show actual name', () => {
      page.clockName().should('have.text', 'Clock-4900');
    });

    it('should not print rename messages before the next update', () => {
      // 2 renaming delays - time before hiding - time before showing
      cy.tick(2 * 3300 - 1500 - 2200 - 1);

      cy.get('@console.debug').should('not.be.called');
    });

    it('should proceed printing rename messages', () => {
      cy.tick(2 * 3300 - 1500 - 2200);

      cy.get('@console.debug')
        .should('have.callCount', 1)
        .and('be.calledWith', 'Renamed from Clock-4900 to Clock-8200');

      cy.tick(3300);

      cy.get('@console.debug')
        .should('have.callCount', 2)
        .and('be.calledWith', 'Renamed from Clock-8200 to Clock-1500');
    });
  });
});
