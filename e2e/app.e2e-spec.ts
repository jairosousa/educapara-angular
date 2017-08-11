import { UfraVerosolAngularPage } from './app.po';

describe('ufra-verosol-angular App', () => {
  let page: UfraVerosolAngularPage;

  beforeEach(() => {
    page = new UfraVerosolAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
