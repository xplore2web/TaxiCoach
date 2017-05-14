import { TaxiCoacherPage } from './app.po';

describe('taxi-coacher App', () => {
  let page: TaxiCoacherPage;

  beforeEach(() => {
    page = new TaxiCoacherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
