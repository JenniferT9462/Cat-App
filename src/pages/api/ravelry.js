const username = process.env.RAVELRY_USERNAME;
const password = process.env.RAVELRY_PASSWORD;

const headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(username + ':' + password));