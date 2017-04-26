/*
 * NB: for images, if you pass in a relative path ('assets/logo.png'), they will be automatically embedded (base64). If you pass in a URL, it will stay as it is.
 */

const defaults = {
  welcome: 'Hi there,',
  introParagraph: 'Thanks for writing up this email.<br/> We are delighted to reply with a responsive template.',
  contactSecondary: 'Level 3, 155 Queen St, Brisbane QLD 4000, Australia',
  logoUrl: 'https://a.whack.wtf/whack/logo/logo.png',
  logoAlt: 'WHACK',
  website: 'http://www.whack.wtf/'
}

module.exports = [
  Object.assign({}, {
    id: 'will', // Will be appended to the built templates.
    name: 'Will Hackett',
    position: 'Director',
    contactMain: '<a href="tel:+61400456777"><span>+61 400 456 777</span></a>', // Wrap phone numbers like this to prevent iOS mail from making them blue.
    contactMail: 'will@whack.wtf',
  }, defaults),
]
