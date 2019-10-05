function ajax({ method, path }) {
  const xhr = new XMLHttpRequest();

  xhr.open(method, path);

  xhr.withCredentials = true;

  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  xhr.setRequestHeader('X-Requested-With', 'xhr');

  xhr.onload = event => {
    console.log('success');
  };

  xhr.onerror = event => {
    console.log('failure');
  };

  xhr.send('somedatahere=asefase');
}

export default ajax;