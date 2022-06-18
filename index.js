var obj = JSON.parse('[\
    {\
      "day": "mon",\
      "amount": 17.45\
    },\
    {\
      "day": "tue",\
      "amount": 34.91\
    },\
    {\
      "day": "wed",\
      "amount": 52.36\
    },\
    {\
      "day": "thu",\
      "amount": 31.07\
    },\
    {\
      "day": "fri",\
      "amount": 23.39\
    },\
    {\
      "day": "sat",\
      "amount": 43.28\
    },\
    {\
      "day": "sun",\
      "amount": 25.48\
    }\
  ]');

  for($i=0;$i<7;$i++){
    const ele=document.getElementById(obj[$i].day);
    ele.style.width="30px";
    ele.style.height=obj[$i].amount*2+"px";
    ele.style.borderRadius="3px";
    ele.style.display="inline-block";    

    if(obj[$i].day!='wed')
    ele.style.backgroundColor="hsl(10, 79%, 65%)";
    else
    ele.style.backgroundColor="hsl(186, 34%, 60%)";

    const para = document.createElement("span");
    const node = document.createTextNode(obj[$i].day);
    para.appendChild(node);
    para.style.position="absolute";
    para.style.bottom="140px";
    para.style.fontSize="10px";
    para.style.width="30px";
    para.style.display="inline-block";
    para.style.marginLeft="1px";
    para.style.textAlign="center";

    const element = document.getElementById("day");
    element.insertBefore(para,ele);
  }

  function fun(id){
    if(id.id!="wed")
    id.style.backgroundColor="hsl(10, 79%, 80%)";
    else
    id.style.backgroundColor="hsl(186, 34%, 80%)";
    id1=id.id;
    var index = obj.map(function(e) { return e.day; }).indexOf(id1);
    id.childNodes[0].innerHTML=obj[index].amount;
  }

  function fun1(id){
    if(id.id!="wed")
    id.style.backgroundColor="hsl(10, 79%, 60%)";
    else
    id.style.backgroundColor="hsl(186, 34%, 60%)";
  }
