/*
 * NB: for images, if you pass in a relative path ('assets/logo.png'), they will be automatically embedded (base64). If you pass in a URL, it will stay as it is.
 */

module.exports = [
  {
    id: 'will', // Will be appended to the built templates.
    name: 'Will Hackett',
    position: 'Director',
    welcome: 'Hi there,',
    introParagraph: 'Thanks for writing up this email.<br/> We are delighted to reply with a responsive template.',
    contactMain: '<a href="tel:+61400456777"><span>+61 400 456 777</span></a>', // Wrap phone numbers like this to prevent iOS mail from making them blue.
    contactMail: 'will@openclub.co',
    contactSecondary: 'L3, 155 Queen St, Brisbane QLD 4000',
    logoUrl: 'https://openclubdev.github.io/openclub-assets/images/logo/logo-color.png',
    logoAlt: 'OpenClub logo',
    website: 'http://www.openclub.co'
  },
  {
    id: 'ben', // Will be appended to the built templates.
    name: 'Ben O\'Connor',
    position: 'Business Development Manager',
    welcome: 'Hi there,',
    introParagraph: 'Thanks for writing up this email.<br/> We are delighted to reply with a responsive template.',
    contactMain: '<a href="tel:+61435844115"><span>+61 435 844 115</span></a>', // Wrap phone numbers like this to prevent iOS mail from making them blue.
    contactMail: 'ben@openclub.co',
    contactSecondary: 'L3, 155 Queen St, Brisbane QLD 4000',
    logoUrl: 'https://openclubdev.github.io/openclub-assets/images/logo/logo-color.png',
    logoAlt: 'OpenClub logo',
    website: 'http://www.openclub.co'
  }
]
