const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class NewsPage extends Page {
  /**
   * define selectors using getter methods
   */
  get audioTrackTitle() {
    return $('.audiotrack__title');
  }
  get subscribeDropDown() {
    return $("//span[contains(.,'SUBSCRIBE')]");
  }
  get applePodcast() {
    return $("//a[contains(.,'APPLE PODCASTS')]");
  }

  get googlePodcast() {
    return $("//a[contains(.,'GOOGLE PODCASTS')]");
  }

  get audioIcon() {
    return $("//span[@class='audiotrack__icon audiotrack__icon--play-pause']");
  }

  get globalPlayerBlock() {
    return $("//div[contains(@data-player-name,'globalPlayerBlock')]");
  }

  get nowPlaying() {
    return $(
      "//div[@class='audio-player__info-panel-label label'][contains(.,'Now Playing')]"
    );
  }

  get playPauseButton() {
    return $(
      "//button[@class='audio-player__button audio-player__button--play-pause button button--clean']"
    );
  }

  get mutePlayerIcon() {
    return $("//span[@class='audio-player__icon audio-player__volume-icon']");
  }

  get scrubFrowardIcon() {
    return $(
      "//span[contains(@class,'audio-player__icon icon icon--step-forward-20')]"
    );
  }

  get scrubBackward() {
    return $(
      "//span[contains(@class,'audio-player__icon icon icon--step-back-20')]"
    );
  }

  get seekBar() {
    return $("//div[@class='audio-player__progress']");
  }

  get languageButton() {
    return $("//span[contains(@class,'icon--translation icon')]");
  }

  get languageToggleText() {
    return $(
      "//div[@class='language-toggle__option-icon'][contains(.,'English')]"
    );
  }

  getSeekBarWidth(value) {
    return parseFloat(value.replace(/^\D+/g, '')) / 100;
  }
  /**
   * overwrite specifc options to adapt it to page object
   */
  open() {
    return super.open(
      'language/english/audio/sbs-hindi-news-13-july-2021-more-financial-support-amid-extended-nsw-lockdown'
    );
  }
}

module.exports = new NewsPage();
