import { AmPage } from './app.po';

describe('am App', () => {
  let page: AmPage;

  beforeEach(() => {
    page = new AmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
