/*
 * NB: for images, if you pass in a relative path ('assets/logo.png'), they will be automatically embedded (base64). If you pass in a URL, it will stay as it is.
 */

const defaults = {
  welcome: 'Hi there,',
  introParagraph: 'Thanks for writing up this email.<br/> We are delighted to reply with a responsive template.',
  contactSecondary: 'Level 3, 155 Queen St, Brisbane QLD 4000, Australia',
  logoUrl: 'https://a.whack.wtf/openclub/logo/logo.png',
  logoAlt: 'OpenClub logo',
  website: 'http://www.openclub.co'
}

module.exports = [
  Object.assign({}, {
    id: 'will', // Will be appended to the built templates.
    name: 'Will Hackett',
    position: 'Co-Founder',
    contactMain: '<a href="tel:+61400456777"><span>+61 400 456 777</span></a>', // Wrap phone numbers like this to prevent iOS mail from making them blue.
    contactMail: 'will@openclub.co',
  }, defaults),
  Object.assign({}, {
    id: 'ben', // Will be appended to the built templates.
    name: 'Ben O\'Connor',
    position: 'Business Development Manager',
    contactMain: '<a href="tel:+61435844115"><span>+61 435 844 115</span></a>', // Wrap phone numbers like this to prevent iOS mail from making them blue.
    contactMail: 'ben@openclub.co',
  }, defaults),
  Object.assign({}, {
    id: 'tom', // Will be appended to the built templates.
    name: 'Tom Hackett',
    position: 'Co-Founder',
    contactMain: '<a href="tel:+61438926330"><span>+61 438 926 330</span></a>', // Wrap phone numbers like this to prevent iOS mail from making them blue.
    contactMail: 'tom@openclub.co',
  }, defaults),
  Object.assign({}, {
    id: 'daragh', // Will be appended to the built templates.
    name: 'Daragh McGrath',
    position: 'Advisor',
    contactMain: '<a href="tel:+61450298897"><span>+61 450 298 897</span></a>', // Wrap phone numbers like this to prevent iOS mail from making them blue.
    contactMail: 'daragh@openclub.co',
  }, defaults)
]
