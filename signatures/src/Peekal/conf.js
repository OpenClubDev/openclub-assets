/*
 * NB: for images, if you pass in a relative path ('assets/logo.png'), they will be automatically embedded (base64). If you pass in a URL, it will stay as it is.
 */

 const defaults = {
   contactSecondary: 'L3, 155 Queen St, Brisbane QLD 4000',
   logoUrl: 'https://a.whack.wtf/peekal/logo/logo.png',
   logoAlt: 'Peekal',
   website: 'http://www.peekal.com',
   welcome: 'Hi there,',
   introParagraph: 'Thanks for writing up this email.<br/> We are delighted to reply with a responsive template.',
 }

module.exports = [
  Object.assign({}, {
    id: 'ben', // Will be appended to the built templates.
    name: 'Ben O\'Connor',
    position: 'Founder',
    contactMain: '<a href="tel:+61435844115"><span>+61 435 844 115</span></a>', // Wrap phone numbers like this to prevent iOS mail from making them blue.
    contactMail: 'ben@peekal.com',
  }, defaults),
  Object.assign({}, {
    id: 'will', // Will be appended to the built templates.
    name: 'Will Hackett',
    position: 'Keyboard Warrior',
    contactMain: '<a href="tel:+61435844115"><span>+61 400 456 777</span></a>', // Wrap phone numbers like this to prevent iOS mail from making them blue.
    contactMail: 'will@peekal.com',
  }, defaults),

]
