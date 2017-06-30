import { BootstrapAngularPage } from './app.po';

describe('bootstrap-angular App', () => {
  let page: BootstrapAngularPage;

  beforeEach(() => {
    page = new BootstrapAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
