Package.describe({
  name: 'necraidan:atomicpull-grid',
  version: '0.1.2',
  // Brief, one-line summary of the package.
  summary: 'An amazing grid system for your HTML !',
  // URL to the Git repository containing the source code for this package.
  git: 'git@github.com:necraidan/meteor-AtomicPull.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('vendor/dist/atomicpool-grid.css', 'client');
});
