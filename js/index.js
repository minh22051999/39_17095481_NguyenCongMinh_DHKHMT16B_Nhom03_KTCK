$(document).ready(function(){
    var i=1;
    $("#btn2").click(function(){
        $("#myModal").modal();
    });

    function kiemtraTen(){
        var i =1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        if($("#Name").val()==""){
            $("#tbName").html("Không được để trống");
            return false;
        }
        if(!mauKT.test($("#Name").val())){
            $("#tbName").html("Mỗi kí tự đầu viết hoa và không được dùng số");
            return false;
        }
        $("#tbName").html("*");
        return true;
    }
    $("#Name").blur(kiemtraTen);

    function kiemtraSoAo(){
        var mauKT=/^\d*$/;
        if($("#AO").val()==""){
            $("#tbAo").html("Không được để trống");
            return false;
        }
        if(!mauKT.test($("#Ao").val())){
            $("#tbAo").html("Dùng số từ 1 đến 100");
            return false;
        }else{
            var soAo = $("#Ao").val();
            if(soAo < 1 || soAo >100){
                $("#tbAo").html("Từ 1 đến 100");
            }else{
                $("#tbAo").html("*");
                return true;
            }
        }
    }
    $("#Ao").blur(kiemtraSoAo);

    function kiemtraCLB(){
        var i =1;
        let mauKT = /([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+)(\s{1}[1-9]))$/;
        if($("#CLB").val()==""){
            $("#tbCLB").html("Không được để trống");
            return false;
        }
        if(!mauKT.test($("#CLB").val())){
            $("#tbCLB").html("Mỗi kí tự đầu viết hoa");
            return false;
        }
        $("#tbCLB").html("*");
        return true;
    }
    $("#CLB").blur(kiemtraCLB);

    function kiemtraNTT(){
        if($("#NTT").val()==""){
            $("#tbNTT").html("Không được để trống");
            return false;
        }
        var today = new Date();
        var ntt = new Date($("#NTT").val());
        today = today.setDate(today.getDate() + 7);
        if(today > ntt){
            $("#tbNTT").html("Phải sau ngày hiện tại 7 ngày");
            return false;
        }
        $("#tbNTT").html("*");
        return true;
    }
    $("#NTT").blur(kiemtraNTT);

    function kiemtraSDT(){
        var mauKT=/^0\d{3}-\d{3}-\d{3}$/;
        if($("#SDT").val()==""){
            $("#tbSDT").html("Không được để trống");
            return false;
        }
        if(!mauKT.test($("#SDT").val())){
            $("#tbSDT").html("Theo dạng 0XXX-XXX-XXX trong đó X  là số");
            return false;
        }
        $("#tbSDT").html("*");
        return true;
    }
    $("#SDT").blur(kiemtraSDT);

    $("#Save").click(function (){
        if(kiemtraTen() == true && kiemtraSoAo() == true && kiemtraCLB() == true && kiemtraNTT() == true && kiemtraSDT() == true ){
            row="<tr>";
            row += "<th>" + (i++) + "</th>";
            row += "<th>" + $("#Name").val() + "</th>";
            row+="<th>" + $("#Ao").val() + "</th>";
            row+="<th>" + $("#CLB").val() + "</th>";
            row+="<th>" + $("#NTT").val() + "</th>";
            row+="<th>" + $("#SDT").val() + "</th>";
            row+="<th>" + $("#ADD").val() + "</th>";
            $("#danhSach").append(row);
            $("#myModal").modal("hide");
        } 
    });
});