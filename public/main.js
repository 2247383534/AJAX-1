console.log("你好，我是main.js");

let n = 1;
getPage.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", `/page${n + 1}`);
  request.onreadystatechange = () => {
    if (request.readyState === 4 && request.status === 200) {
      const array = JSON.parse(request.response);
      array.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.id;
        xxx.appendChild(li);
      });
      n += 1;
    }
  };
  request.send();
};

getJSON.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/5.json");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status <= 200 &&
      request.status < 300
    ) {
      //console.log(request.response);
      const object = JSON.parse(request.response); //parse把符合json语法的字符串合成对应的对象或者其他
      myName.textContent = object.name;
      console.log(object);
    }
  };
  request.send();
};

getXml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/4.xml");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status <= 200 &&
      request.status < 300
    ) {
      const dom = request.responseXML;
      const text = dom.getElementsByTagName("warning")[0].textContent;
      console.log(text.trim());
    }
  };
  request.send();
};

getHtml.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/3.html");
  request.onreadystatechange = () => {
    if (
      request.readyState === 4 &&
      request.status >= 200 &&
      request.status < 300
    ) {
      const div = document.createElement("div"); //创建script标签
      div.innerHTML = request.response; //将响应的内容填写到script中
      document.body.appendChild(div);
    }
    //将script插到head中
  };
  request.onerror = () => {};
  request.send();
};

getJs.onclick = () => {
  const request = new XMLHttpRequest();
  request.open("GET", "/2.js");
  request.onload = () => {
    const script = document.createElement("script"); //创建script标签
    script.innerHTML = request.response; //将响应的内容填写到script中
    document.head.appendChild(script); //将script插到head中
  };
  request.onerror = () => {
    console.log("失败");
  };
  request.send();
};

getCss.onclick = () => {
  const request = new XMLHttpRequest(); //新建HttpRequest对象  readyState=0
  request.open("GET", "/style.css"); //readyState= 1
  request.onreadystatechange = () => {
    console.log(request.readyState);
    if (request.readyState === 4) {
      //加载完成但不知道加载是否成功
      if (request.status >= 200 && request.status < 300) {
        const style = document.createElement("style"); //创建style标签
        style.innerHTML = request.response; //将请求的响应填写到style中
        document.head.appendChild(style); //将style插到head中
      } else {
        alert("加载CSS失败"); //提示加载失败用alert
      }
    }
  };
  request.send(); // readyState = 2
};
