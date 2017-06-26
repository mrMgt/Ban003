import { Ban003Page } from './app.po';

describe('ban003 App', () => {
  let page: Ban003Page;

  beforeEach(() => {
    page = new Ban003Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
