//
// <* Кликаем по рекламе *>
//
module.exports = function (casper) {
      return {
            casper: casper,
            //
            //
            // Логика для adnow  
            //
            //           
            adnow: function () {
                  casper = this.casper;
                  casper.then(function () {
                        console.log('KЛИКАЮ НА РЕКЛАМУ {{adnow}}');
                        this.page.injectJs('devlibs/browserScripts/api.js');
                        this.evaluate(function () {
                              document.body.scrollTop = document.getElementById('__adv__').scrollTop;
                              try {
                                    var dispatchElement = document.querySelector('.SC_TBlock:nth-child(' + getRandomInt(1, 2) + ') .itemAddBlock:nth-child(' + getRandomInt(1, 6) + ') a')
                                          , minX = dispatchElement.offsetLeft
                                          , maxX = dispatchElement.offsetLeft + dispatchElement.offsetWidth
                                          , minY = dispatchElement.offsetTop
                                          , maxY = dispatchElement.offsetTop + dispatchElement.offsetHeight;
                                    console.log('adMaven  <a/>  ', dispatchElement);
                                    var evt = document.createEvent("MouseEvents"), px = getRandomInt(minX, maxX), py = getRandomInt(minY, maxY);
                                    evt.initMouseEvent('mousemove', true, true, window, 1, 1, 1, px, py, false, false, false, false, 0, dispatchElement);
                                    dispatchElement.dispatchEvent(evt);
                                    dispatchElement.dispatchEvent(evt);
                                    dispatchElement.removeAttribute('target');
                                    dispatchElement.click();
                                    //clickElementByPoints(getRandomInt(50, 700), getRandomInt(450, 500));
                              } catch (error) {
                                    console.log('adMaven error', error);
                              }
                        });
                        this.wait(50 * 1000, function () { });
                  })
                        .waitForSelector('body', function () {
                              console.log("(-$$$-)=>    Я кликнул по рекламе и оказался на   ", this.getCurrentUrl());
                              this.wait(getRandomInt(3, 6) * 1000, function () { });
                              for (var i = 0; i < 50; i += 1) {
                                    this.scrollTo(getRandomInt(10, 500), getRandomInt(3000, 3100));
                                    this.scrollTo(getRandomInt(100, 700), getRandomInt(3200, 3300));
                                    this.mouseEvent('mousemove', 'body');
                                    this.scrollTo(getRandomInt(200, 800), getRandomInt(3400, 3500));
                                    this.scrollTo(getRandomInt(300, 900), getRandomInt(3600, 3900));
                              }
                              this.wait(getRandomInt(3, 6) * 1000, function () { });
                              for (var i = 0; i < 50; i += 1) {
                                    this.mouseEvent('mousemove', 'body');
                                    this.mouseEvent('mousemove', 'body');
                                    this.mouseEvent('mousemove', 'body');
                              }
                              this.wait(getRandomInt(3, 6) * 1000, function () { });
                        });
            }
      }
}