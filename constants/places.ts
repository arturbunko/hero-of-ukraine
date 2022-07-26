export const Places = [
  {
    path: 'kinburn-spit',
    props: {
      images: {
        war: 'https://strapi.myplantin.com/kinburn_war_401d03e2a2.webp',
        peace: 'https://strapi.myplantin.com/kinburn_peace_034969d11a.webp',
      },
      heading: 'Kinburn Spit',
      description: '',
      path: 'kinburn-spit',
      next: 'zalissya',
      prev: 'yelanets-steppe',
    },
  },
  {
    path: 'zalissya',
    props: {
      images: {
        war: 'https://strapi.myplantin.com/zalissya_war_afb1cb2296.webp',
        peace: 'https://strapi.myplantin.com/zalissya_peace_4a2903209a.webp',
      },
      path: 'zalissya',
      heading: 'Zalissya',
      description: '',
      next: 'mezinsky-park',
      prev: 'kinburn-spit',
    },
  },
  {
    path: 'mezinsky-park',
    props: {
      images: {
        war: 'https://strapi.myplantin.com/mezinsky_war_1fba9615d6.webp',
        peace: 'https://strapi.myplantin.com/mezinsky_peace_403bf832a1.webp',
      },
      path: 'mezinsky-park',
      heading: 'Mezinsky park',
      description: '',
      next: 'chornobyl-forest',
      prev: 'zalissya',
    },
  },
  {
    path: 'chornobyl-forest',
    props: {
      images: {
        war: 'https://strapi.myplantin.com/chornobyl_war_87c888a519.webp',
        peace: 'https://strapi.myplantin.com/chornobyl_peace_6d56f32d31.webp',
      },
      path: 'chornobyl-forest',
      heading: 'Chornobyl Forest',
      description: '',
      next: 'gene-bank',
      prev: 'mezinsky-park',
    },
  },
  {
    path: 'gene-bank',
    props: {
      images: {
        war: 'https://strapi.myplantin.com/gene_war_80446cc57e.webp',
        peace: 'https://strapi.myplantin.com/gene_peace_830ed4daa1.webp',
      },
      path: 'gene-bank',
      heading: 'National Gene Bank',
      description: '',
      next: 'hetman-park',
      prev: 'chornobyl-forest',
    },
  },
  {
    path: 'hetman-park',
    props: {
      images: {
        war: 'https://strapi.myplantin.com/hetman_war_eec9f8a604.webp',
        peace: 'https://strapi.myplantin.com/hetman_peace_9c48f46ef1.webp',
      },
      path: 'hetman-park',
      heading: 'Hetman National Park',
      description: '',
      next: 'askania-nova',
      prev: 'gene-bank',
    },
  },
  {
    path: 'askania-nova',
    props: {
      images: {
        war: 'https://strapi.myplantin.com/askania_war_18ab5fee07.webp',
        peace: 'https://strapi.myplantin.com/askania_peace_1c408141a1.webp',
      },
      path: 'askania-nova',

      heading: 'Askania-nova',
      description: '',
      next: 'yelanets-steppe',
      prev: 'hetman-park',
    },
  },
  {
    path: 'yelanets-steppe',
    props: {
      images: {
        war: 'https://strapi.myplantin.com/kinburn3_16_dcb0d37577.webp',
        peace: 'https://strapi.myplantin.com/kinburn3_17_6dcf1eb986.webp',
      },
      path: 'yelanets-steppe',
      heading: 'Yelanets Steppe.',
      description: '',
      next: 'kinburn-spit',
      prev: 'askania-nova',
    },
  },
];
