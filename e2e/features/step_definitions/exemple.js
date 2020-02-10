const {Given, Then} = require('cucumber');

Given('I tap Go to Friends', async () => {
  await expect(element(by.id('gotofriends'))).toBeVisible();
  await element(by.id('gotofriends')).tap();
});

Then('I should show Friends screen after tap', async () => {
  await expect(element(by.id('friends'))).toBeVisible();
});
