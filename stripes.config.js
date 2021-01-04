module.exports = {
  okapi: { 'url':'http://61.97.135.64:9130', 'tenant':'diku' },
  config: {
    logCategories: 'core,path,action,xhr',
    logPrefix: '--',
    showPerms: false
  },
  modules: {
    '@folio/users': {}, 
    '@folio/agreements': {},
    '@folio/developer' : {},
    '@folio/eholdings' : {},
    '@folio/erm-usage': {},
    '@folio/licenses': {},
    '@folio/local-kb-admin': {},
    '@folio/organizations' : {},
    '@folio/search' : {},
    '@folio/plugin-find-agreement': {},
    '@folio/plugin-find-erm-usage-data-provider': {},
    '@folio/plugin-find-license': {},
    '@folio/plugin-find-organization': {},
    '@folio/plugin-find-user' : {},
    '@folio/servicepoints' : {},
    '@folio/stripes-erm-components': {},
    '@folio/tags': {},
    '@folio/tenant-settings' : {},
  },
  branding: {
    logo: {
      src: './tenant-assets/opentown-libraries-logo.png',
      alt: 'Opentown Libraries',
    },
    favicon: {
      src: './tenant-assets/opentown-libraries-favicon.png',
    },
  }
};
