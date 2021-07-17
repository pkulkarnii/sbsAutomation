const NewsPage = require('../pageobjects/news.page');
const constantValues = require('../../constant');

describe('User loads news page', () => {
  //Before test starts load respective url
  before('should load the url', async () => {
    await browser.maximizeWindow();
    await NewsPage.open();
    await (await NewsPage.audioIcon).click();
    await browser.pause(constantValues.waitTime);
  });

  it('should verify page header', async () => {
    const audioTrackTitle = await (await NewsPage.audioTrackTitle).getText();
    console.log('audioTrackTitleText: ' + audioTrackTitle);
    await expect(audioTrackTitle).toEqual(constantValues.PAGE_H1_TITLE);
  });

  it('should contain Podcast options in Subscribe dropdown ', async () => {
    await (await NewsPage.subscribeDropDown).click();
    await (await expect(NewsPage.applePodcast)).toBeDisplayed();
    await (await expect(NewsPage.googlePodcast)).toBeDisplayed();
    await (await NewsPage.subscribeDropDown).click();
  });

  it('should check launguage options', async () => {
    await (await NewsPage.languageButton).click();
    const languageToggleText = await (
      await NewsPage.languageToggleText
    ).getText();
    await (await expect(NewsPage.languageToggleText)).toBeDisplayed();
    await (await expect(languageToggleText)).toEqual(constantValues.language);
  });

  it('should verify playback', async () => {
    let globalPlayerBlockAttributes = await (
      await NewsPage.globalPlayerBlock
    ).getAttribute('class');

    //Checking Play/Pause behavior
    await (
      await expect(globalPlayerBlockAttributes)
    ).toContain('is-media-playing');
  });

  it('should verify pause/play', async () => {
    let globalPlayerBlockAttributes = await (
      await NewsPage.globalPlayerBlock
    ).getAttribute('class');

    await (
      await expect(globalPlayerBlockAttributes)
    ).toContain('is-media-playing');

    await (await NewsPage.playPauseButton).click();

    globalPlayerBlockAttributes = await (
      await NewsPage.globalPlayerBlock
    ).getAttribute('class');

    await (
      await expect(globalPlayerBlockAttributes)
    ).toContain('is-media-paused');
  });

  //Checking Mute button
  it('should verify mute button', async () => {
    let globalPlayerBlockAttributes = await (
      await NewsPage.globalPlayerBlock
    ).getAttribute('class');
    await (await expect(globalPlayerBlockAttributes)).not.toContain('is-muted');
    await (await NewsPage.mutePlayerIcon).click();
    globalPlayerBlockAttributes = await (
      await NewsPage.globalPlayerBlock
    ).getAttribute('class');
    await (await expect(globalPlayerBlockAttributes)).toContain('is-muted');
  });

  //Checking Scrub forward behavior
  it('should verify Scrub forward behavior', async () => {
    let initialSeekValue = await (await NewsPage.seekBar).getAttribute('style');
    //Convert value to number
    initialSeekValue = parseFloat(initialSeekValue.replace(/^\D+/g, '')) / 100;

    await (await NewsPage.scrubFrowardIcon).click();
    await browser.pause(constantValues.waitTime);
    //Get width of seekbar and convert it to number
    let finalSeekValue = await (await NewsPage.seekBar).getAttribute('style');
    finalSeekValue = parseFloat(finalSeekValue.replace(/^\D+/g, '')) / 100;
    console.log(
      'initialSeekValue: ' +
        initialSeekValue +
        '\t finalSeekValue: ' +
        finalSeekValue
    );
    await (await expect(finalSeekValue)).toBeGreaterThan(initialSeekValue);
  });

  //Checking Scrub Backward behavior
  it('should verify Scrub backward behavior', async () => {
    await (await NewsPage.scrubFrowardIcon).click();
    initialSeekValue = await (await NewsPage.seekBar).getAttribute('style');
    //Convert value to number
    initialSeekValue = parseFloat(initialSeekValue.replace(/^\D+/g, '')) / 100;

    await (await NewsPage.scrubBackward).click();
    await browser.pause(constantValues.waitTime);
    //Get width of seekbar and convert it to number
    finalSeekValue = await (await NewsPage.seekBar).getAttribute('style');
    finalSeekValue = parseFloat(finalSeekValue.replace(/^\D+/g, '')) / 100;
    console.log(
      'initialSeekValue: ' +
        initialSeekValue +
        '\t finalSeekValue: ' +
        finalSeekValue
    );
    await (await expect(finalSeekValue)).not.toBeGreaterThan(initialSeekValue);
  });
});
