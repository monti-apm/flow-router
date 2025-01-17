Package.describe({
  name: 'montiapm:flow-router',
  summary: 'Drop in replacement for flow router with support for Meteor 1.4 - 2.4+',
  version: '2.13.1',
  git: 'https://github.com/kadirahq/flow-router.git'
});

Npm.depends({
  // In order to support IE9, we had to fork pagejs and apply
  // this PR: https://github.com/visionmedia/page.js/pull/288
  'page':'https://github.com/kadirahq/page.js/archive/34ddf45ea8e4c37269ce3df456b44fc0efc595c6.tar.gz',
  'qs':'5.2.0'
 });

Package.onUse(function(api) {
  configure(api);
  api.export('FlowRouter');
});

Package.onTest(function(api) {
  configure(api);
  api.use('tinytest');
  api.use('check');
  api.use('mongo');
  api.use('http');
  api.use('random');
  api.use('tmeasday:html5-history-api');
  // api.use('communitypackages:fast-render');
  // api.use('communitypackages:inject-data');


  // api.addFiles('test/common/fast_render_route.js', ['client', 'server']);

  api.addFiles('test/client/_helpers.js', 'client');
  api.addFiles('test/server/_helpers.js', 'server');

  api.addFiles('test/client/loader.spec.js', 'client');
  api.addFiles('test/client/route.reactivity.spec.js', 'client');
  api.addFiles('test/client/router.core.spec.js', 'client');
  api.addFiles('test/client/router.subs_ready.spec.js', 'client');
  api.addFiles('test/client/router.reactivity.spec.js', 'client');
  api.addFiles('test/client/group.spec.js', 'client');
  api.addFiles('test/client/trigger.spec.js', 'client');
  api.addFiles('test/client/triggers.js', 'client');

  // api.addFiles('test/server/plugins/fast_render.js', 'server');

  api.addFiles('test/common/router.path.spec.js', ['client', 'server']);
  api.addFiles('test/common/router.url.spec.js', ['client', 'server']);
  api.addFiles('test/common/router.addons.spec.js', ['client', 'server']);
  api.addFiles('test/common/route.spec.js', ['client', 'server']);
  api.addFiles('test/common/group.spec.js', ['client', 'server']);
});

function configure(api) {
  api.versionsFrom(['METEOR@1.3-rc.1', 'METEOR@2.3']);

  api.use('underscore');
  api.use('tracker');
  api.use('reactive-dict');
  api.use('reactive-var');
  api.use('ejson');
  api.use('ecmascript');
  api.use('zodern:types@1.0.1');

  api.use('communitypackages:fast-render@4.0.6', ['client', 'server'], {weak: true});

  api.addFiles('client/modules.js', 'client');
  api.addFiles('client/triggers.js', 'client');
  api.addFiles('client/router.js', 'client');
  api.addFiles('client/group.js', 'client');
  api.addFiles('client/route.js', 'client');
  api.addFiles('client/_init.js', 'client');

  api.addFiles('server/router.js', 'server');
  api.addFiles('server/group.js', 'server');
  api.addFiles('server/route.js', 'server');
  api.addFiles('server/_init.js', 'server');

  api.addFiles('server/plugins/fast_render.js', 'server');

  api.addFiles('lib/router.js', ['client', 'server']);
}
