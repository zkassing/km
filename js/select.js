;(function(win,doc){
    function Select(id){
        this.obj = document.getElementById(id);
        this.init();
    }   
    Select.prototype = {
        init:function(){
            console.log(this.obj)
            this.obj.addEventListener('touchend',function(e){   
                var e = e||window.event;
                switch(e.target.className){
                    case "minus":
                        var count = e.target.nextElementSibling;
                        if(count.innerText == 1){
                            //ajax代码
                            e.target.parentNode.className = "buy";
                            count.innerText = --count.innerText;
                        }else{
                            count.innerText = --count.innerText;
                        }
                        break;
                    case "add":
                        var count = e.target.previousElementSibling;
                        if(count.innerText==0){
                            e.target.parentNode.className = "buy active";
                            count.innerText = ++count.innerText;
                        }else{
                            count.innerText = ++count.innerText;
                        }
                        break;
                    case "del":
                        //ajax代码

                        //ajax成功后执行代码
                        e.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode.parentNode.parentNode)
                        break;
                }
            })
        }
    }

    win.Select = Select;

}(window,document))