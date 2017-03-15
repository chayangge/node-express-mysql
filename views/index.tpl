<html>
    <head>
        <style>

           table,td{
            border: 1px solid #ccc;
           }
           tr{
            border: 1px solid #ccc;
            /*border: none;*/
           }
           .input-box{
            display: none;
           }

        </style>
    </head>
    <body>
    <div id="app">
        <h1>增删改查demo：</h1>
        <div class="input-box">
            姓名：<input class="name" type="text">
            年龄：<input class="age" type="text">
            <button class="changeBtn">更改</button> 
            <button class="insertBtn">确认插入</button>
        </div>
        <table border="1">
            <tr>
                <td>id</td>
                <td>name</td>
                <td>age</td>
                <td>改</td>
                <td>删</td>
            </tr>
            {% for item in result %}
            <tr>
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.age}}</td>
                <td data-id="{{item.id}}" class="change">编辑</td>
                <td data-id="{{item.id}}" class="delete">删除</td>
            </tr>
            {% endfor %}
        </table>
        <button class="insert">插入</button>

        </div>
    </body>
    <script src="./jquery.js"></script>
    <script>


    $(function(){
        var inputBox = $(".input-box");
        var name = $(".name");
        var age = $(".age"); 
        var changeBtn = $(".changeBtn");  
        var insertBtn = $(".insertBtn");
        $(".change").on("click",function(){
            var _this = $(this);
            inputBox.show();
            changeBtn.show();
            insertBtn.hide();
            changeBtn.on("click",function(){
                $.ajax({
                    url:"/update",
                    data:{
                        id:_this.data("id"),
                        name:name.val(),
                        age:age.val()
                    },
                    type:"post",
                    success:function(result){
                        window.location.reload();
                    }
                });
            })
        });
        $(".delete").on("click",function(){
            var _this = $(this);
            $.ajax({
                url:"/delete",
                data:{
                    id:_this.data("id")
                },
                type:"post",
                success:function(result){
                    window.location.reload();
                }
            });
        });

        $(".insert").on("click",function(){
                var _this = $(this);
                inputBox.show();
                changeBtn.hide();
                insertBtn.show();
                insertBtn.on("click",function(){
                    $.ajax({
                        url:"/insert",
                        data:{
                            id:_this.data("id"),
                            name:name.val(),
                            age:age.val()
                        },
                        type:"post",
                        success:function(result){
                            window.location.reload();
                        }
                    });
                })
            });
    })
    </script>
</html>