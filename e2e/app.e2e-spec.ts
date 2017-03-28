import { ShareArchiverAppPage } from './app.po';

describe('share-archiver-app App', () => {
  let page: ShareArchiverAppPage;

  beforeEach(() => {
    page = new ShareArchiverAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
