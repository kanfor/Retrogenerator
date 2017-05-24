import { RetrogenPage } from './app.po';

describe('retrogen App', () => {
  let page: RetrogenPage;

  beforeEach(() => {
    page = new RetrogenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
