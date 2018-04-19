// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  origin_host: 'https://timedic.id:8443/',
  //origin_host: 'http://192.168.1.4:8080/',
  //crypt
  passPhrase : 'timedictimedic18',
  iv : 'dc0da04af8fee58593442bf834b30739',
  salt : 'dc0da04af8fee58593442bf834b30739',
  //per page table
  size_item : 5
};
