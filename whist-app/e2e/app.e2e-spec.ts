import { WhistAppPage } from './app.po';

describe('whist-app App', function() {
  let page: WhistAppPage;

  beforeEach(() => {
    page = new WhistAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
