        var button=document.getElementsByTagName('button')[2];
		var Reset=document.getElementsByClassName('Reset')[0];
		var tim=0;
		var test={
			idInput: document.getElementsByClassName('idInput')[0],
			nameInput: document.getElementsByClassName('nameInput')[0],
			sexInput: document.getElementsByClassName('sexInput')[0],
			collegeInput: document.getElementsByClassName('collegeInput')[0],
			subjectInput: document.getElementsByClassName('subjectInput')[0],
			classInput: document.getElementsByClassName('classInput')[0],
			typeInput: document.getElementsByClassName('typeInput')[0],
			phoneInput: document.getElementsByClassName('phoneInput')[0],
			idSpan: document.getElementsByClassName('idSpan')[0],
			nameSpan: document.getElementsByClassName('nameSpan')[0],
			sexSpan: document.getElementsByClassName('sexSpan')[0],
			collegeSpan: document.getElementsByClassName('collegeSpan')[0],
			subjectSpan: document.getElementsByClassName('subjectSpan')[0],
			classSpan: document.getElementsByClassName('classSpan')[0],
			typeSpan: document.getElementsByClassName('typeSpan')[0],
			phoneSpan: document.getElementsByClassName('phoneSpan')[0],
			input: document.getElementsByTagName('input'),
			span: document.getElementsByTagName('span'),
			popWindows: document.getElementsByClassName('popWindows')[0],
			message: document.getElementsByClassName('message')[0],
			menu: document.getElementsByClassName('menu')[0],
			popWindows: document.getElementsByClassName('popWindows')[0],
			div1: document.getElementsByClassName('mess')[0],
			div2: document.getElementsByClassName('mess')[1],
			div3: document.getElementsByClassName('mess')[2],
			div4: document.getElementsByClassName('mess')[3],
			div5: document.getElementsByClassName('mess')[4],
			div7: document.getElementsByClassName('mess')[5],
			div6: document.getElementsByClassName('mess')[6],
			div8: document.getElementsByClassName('mess')[7],
			submitSpan: document.getElementsByClassName('submitSpan')[0],
			idTest: function(){
				var that=this;
				that.idInput.onblur=function(){
							  if(!(that.idInput.value.length==8&&(/[0-9]{8}/g.test(that.idInput.value)))){
									  that.idSpan.innerText="*";
									  that.idSpan.style.color='#f40';
							  }
							  else{
								  that.idSpan.innerText="√";
								  that.idSpan.style.color='green';
							  }
							  if(that.idInput.value==""){
							  	that.idInput.value="请输入学号";
							  }
				}
				that.idInput.onfocus=function(){
					if(that.idInput.value=="请输入学号"){
						that.idInput.value="";
					}
				}
			},
			nameTest :function(){
				var that=this;
				that.nameInput.onblur=function(){
					if(that.nameInput.value==""){
						that.nameSpan.innerText="*";
						that.nameSpan.style.color='#f40';
					}
					else{
						that.nameSpan.innerText="√";
						that.nameSpan.style.color='green';
					}
					if(that.nameInput.value==""){
						that.nameInput.value="请输入姓名";
					}
					
				}
				that.nameInput.onfocus=function(){
					if(that.nameInput.value=="请输入姓名"){
						that.nameInput.value="";
					}
				}
			},
			sexTest: function(){
				var that=this;
				that.sexInput.onblur=function(){
					if(that.sexInput.value!="男"&&that.sexInput.value!="女"){
							that.sexSpan.innerText="*";
							that.sexSpan.style.color='#f40';
					}
					else{
						that.sexSpan.innerText="√";
						that.sexSpan.style.color='green';
					}
					if(that.sexInput.value==""){
						that.sexInput.value="请输入性别";
					}
				}
				that.sexInput.onfocus=function(){
					if(that.sexInput.value=="请输入性别"){
						that.sexInput.value="";
					}
				}
			},
			collegeTest:function(){
				var that=this;
				that.collegeInput.onblur=function(){
					if(that.collegeInput.value==""){
						that.collegeSpan.innerText="*";
						that.collegeSpan.style.color='#f40';
					}
					else{
						that.collegeSpan.innerText="√";
						that.collegeSpan.style.color='green';
					}
					if(that.collegeInput.value==""){
						that.collegeInput.value="请输入学院";
					}
				}
				that.collegeInput.onfocus=function(){
					if(that.collegeInput.value=="请输入学院"){
						that.collegeInput.value="";
					}
				}
			},
			subjectTest:function(){
				var that=this;
				that.subjectInput.onblur=function(){
					if(that.subjectInput.value==""){
						that.subjectSpan.innerText="*";
						that.subjectSpan.style.color='#f40';
					}
					else{
						that.subjectSpan.innerText="√";
						that.subjectSpan.style.color='green';
					}
					if(that.subjectInput.value==""){
						that.subjectInput.value="请输入专业";
					}
				}
				that.subjectInput.onfocus=function(){
					if(that.subjectInput.value=="请输入专业"){
						that.subjectInput.value="";
					}
				}
			},
			classTest :function(){
				var that=this;
				that.classInput.onblur=function(){
					if(that.classInput.value==""){
						that.classSpan.innerText="*";
						that.classSpan.style.color='#f40';
					}
					else{
						that.classSpan.innerText="√";
						that.classSpan.style.color='green';
					}
					if(that.classInput.value==""){
						that.classInput.value="请输入班级";
					}
				}
				that.classInput.onfocus=function(){
					if(that.classInput.value=="请输入班级"){
						that.classInput.value="";
					}
				}
			},
			typeTest: function(){
				var that=this;
				that.typeInput.onblur=function(){
					if(that.typeInput.value!="1"&&that.typeInput.value!="0"){
							that.typeSpan.innerText="*";
							that.typeSpan.style.color='#f40';
					}
					else{
						that.typeSpan.innerText="√";
						that.typeSpan.style.color='green';
					}
					if(that.typeInput.value==""){
						that.typeInput.value="请输入面试类型";
					}
				}
				that.typeInput.onfocus=function(){
					if(that.typeInput.value=="请输入面试类型"){
						that.typeInput.value="";
					}
				}
			},
			phoneTest: function(){
				var that=this;
				that.phoneInput.onblur=function(){
					if(!(that.phoneInput.value.length==11&&(/[0-9]{11}/g.test(that.phoneInput.value)))){
							that.phoneSpan.innerText="*";
							that.phoneSpan.style.color='#f40';
					}
					else{
						that.phoneSpan.innerText="√";
						that.phoneSpan.style.color='green';
					}
					if(that.phoneInput.value==""){
						that.phoneInput.value="请输入手机号";
					}
				}
				that.phoneInput.onfocus=function(){
					if(that.phoneInput.value=="请输入手机号"){
						that.phoneInput.value="";
					}
				}
			},
			response: function(){
				if(this.idSpan.innerText=="√"&&this.nameSpan.innerText=="√"&&this.sexSpan.innerText=="√"&&this.collegeSpan.innerText=="√"&&this.subjectSpan.innerText=="√"&&this.classSpan.innerText=="√"&&this.phoneSpan.innerText=="√"&&this.typeSpan.innerText=="√"){
					return 1;
				}
				return 0;
			},
			resetIt: function(){
				var that=this;
				Reset.onclick=function(){
					for(var i=1;i<=8;++i){
						that.span[i].innerText="*";
						that.span[i].style.color="#f40";
					}
					
					that.idInput.value="请输入学号";
					that.nameInput.value="请输入姓名";
					that.sexInput.value="请输入性别";
					that.collegeInput.value="请输入学院";
					that.subjectInput.value="请输入专业";
					that.classInput.value="请输入班级";
					that.typeInput.value="请输入面试类型";
					that.phoneInput.value="请输入手机号";
				}
			},
			sumbitText: function(){
				var that=this;
				that.div1.innerText="学号:"+that.idInput.value;
				that.div2.innerText="姓名:"+that.nameInput.value;
				that.div3.innerText="性别:"+that.sexInput.value;
				that.div4.innerText="学院:"+that.collegeInput.value;
				that.div5.innerText="专业:"+that.subjectInput.value;
				that.div6.innerText="班级:"+that.classInput.value;
				that.div7.innerText="面试类型:"+that.typeInput.value;
				that.div8.innerText="手机号:"+that.phoneInput.value;
			},
			timeFunction: function(){
				var oldDate=Date.now();
				var self=this;
				var timer=setInterval(function(){
					var newDate=Date.now();
					if(newDate-oldDate>=3000){
						self.submitSpan.innerText="";
						clearInterval(timer);
						self.popWindows.style.opacity=0;
					    self.menu.style.opacity=1;
						self.popWindows.style.zIndex="2";
						self.menu.style.zIndex="3";
					    Reset.onclick();
					}
					else{
						self.submitSpan.innerText='您已报名成功!!!';
					}
				},300);
			},
			sumbitFunction: function(){
				var button1=document.getElementsByClassName('but')[1];
				var button2=document.getElementsByClassName('but')[0];
				var that=this;
				button1.onclick= function(){
					str="id="+that.idInput.value+"&name="+that.nameInput.value+"&sex="+that.sexInput.value+"&college="+that.collegeInput.value+"&subject="+that.subjectInput.value+"&class="+that.classInput.value+"&type="+that.typeInput.value+"&phone="+that.phoneInput.value;
					var xhr=new XMLHttpRequest();
					xhr.onreadystatechange=function(){
						if(xhr.readyState==4&&xhr.status==200){
							console.log(xhr.responseText);
						}
					}
					xhr.open('post','https://www.konghouy.cn/job/managerTest',true);
					xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
					xhr.setRequestHeader('Authorization','278137410907FE3BCFD44FA16EBEC87E');
					xhr.send(str);
					button2.disabled='disabled';
					button2.style.backgroundColor='gray';
					button2.style.cursor=' not-allowed';
					tim=1;
					that.timeFunction();
				}
				button2.onclick= function(){
					that.popWindows.style.opacity=0;
					that.menu.style.opacity=1;
					that.popWindows.style.zIndex="2";
					that.menu.style.zIndex="3";
				}
			},
			send: function(){
				var that=this;
				var str="";
				var button2=document.getElementsByClassName('but')[0];
				button.onclick=function(){
					var flag=that.response();
					if(flag==1){
						that.popWindows.style.zIndex="3";
						that.menu.style.zIndex="2";
						that.popWindows.style.opacity=0.5;
						that.menu.style.opacity=0;
						that.sumbitText();
						button2.removeAttribute('disabled');
						button2.style.backgroundColor='skyblue';
						button2.style.cursor='pointer';
					}
				}
			}
		}
		function main(){
			test.idTest();
			test.nameTest();
			test.sexTest();
			test.collegeTest();
			test.subjectTest();
			test.classTest();
			test.phoneTest();
			test.typeTest();
			test.sumbitFunction();
			test.send();
			test.resetIt();
		}
		main();