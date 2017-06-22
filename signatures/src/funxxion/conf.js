/*
 * NB: for images, if you pass in a relative path ('assets/logo.png'), they will be automatically embedded (base64). If you pass in a URL, it will stay as it is.
 */

const defaults = {
  welcome: 'Hi there,',
  introParagraph: 'Thanks for writing up this email.<br/> We are delighted to reply with a responsive template.',
  contactSecondary: 'Level 3, 155 Queen St, Brisbane QLD 4000, Australia',
  logoUrl: 'https://a.whack.wtf/funxxion/logo/logo.png',
  logoAlt: 'Funxxion',
  website: 'http://www.funxxion.com/'
}

module.exports = [
  Object.assign({}, {
    id: 'will', // Will be appended to the built templates.
    name: 'Will Hackett',
    position: 'Director',
    contactMain: '<a href="tel:+61400456777"><span>+61 400 456 777</span></a>', // Wrap phone numbers like this to prevent iOS mail from making them blue.
    contactMail: 'will@funxxion.com',
  }, defaults),
  Object.assign({}, {
    id: 'matt', // Will be appended to the built templates.
    name: 'Matt McDougall',
    position: 'Director',
    contactMain: '<a href="tel:+61420620403"><span>+61 420 620 403</span></a>', // Wrap phone numbers like this to prevent iOS mail from making them blue.
    contactMail: 'matt@funxxion.com',
  }, defaults),
]
