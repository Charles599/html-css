let wrap = document.createElement('div');
wrap.id = 'wrap';

wrap.innerHTML = `
username<br>
<input type="text" name="id" id="id" placeholder="아이디"><br>
password<br>
<input type="text" name="pw" id="pw" placeholder="비밀번호"><br>
<button type="submit" id="submit">submit</button>
`

document.body.appendChild(wrap);