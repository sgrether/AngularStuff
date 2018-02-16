import { ClassExamplePage } from './app.po';

describe('class-example App', function() {
  let page: ClassExamplePage;

  beforeEach(() => {
    page = new ClassExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
