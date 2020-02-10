describe('Go to Friends Screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should tap Go to Friends button', async () => {
    await expect(element(by.id('gotofriends'))).toBeVisible();
    await element(by.id('gotofriends')).tap();
  });
});
