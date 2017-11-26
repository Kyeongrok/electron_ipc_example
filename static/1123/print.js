$(function() {
    var jsonData;
    // 파일 입력 엘리먼트 가져오기 
    var fileInput = document.getElementById('fileInput');

    // 파일 입력 엘리먼트를 감지하여 변경이 되면 콜백 함수 수행
    fileInput.addEventListener('change', function(e) {
        $("#loading").show();
        handleDrop(e);
    });

    function handleDrop(e) {
        //     e.stopPropagation();
        //       e.preventDefault();
        // 파일 객체 가져오기 
        var files = fileInput.files;
        var i, f;
        for (i = 0; i != files.length; ++i) {
            f = files[i];
            var reader = new FileReader();
            var name = f.name;
            reader.onload = function(e) {
                var data = e.target.result;

                // xls  read 처리 
                // 바이너리 모드로 읽었기 떄문에 type 을 바이너리로 설정한다.
                var workbook = XLSX.read(data, {
                    type: 'binary'
                });

                console.log(workbook);
                var sheet_name_list = workbook.SheetNames;
                // 첫번쨰 시트명을 가져옴
                var sheetName = sheet_name_list[0];
                // 시트명의 데이터를 json으로 반환한다.
                json = to_json(workbook, sheetName);
                jsonData = json[sheetName];
                var li = makeList('');
                setTimeout(function() {
                    $("#loading").hide();
                    $("#labels").html(li);
                }, 1000);

            };

            // 바이너리로 데이터를 읽어드림 
            reader.readAsBinaryString(f);
        }
    }

    $("#printBtn").on('click', function() {
        window.print();
        $(".file_input_form").hide();

    });

    //fileInput.addEventListener('drop', handleDrop, false);

    // 시트 데이터를 json 으로 변환시켜줌
    function to_json(workbook, sheetName) {
        var result = {};
        // workbook.SheetNames.forEach(function(sheetName) {
        var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        if (roa.length > 0) {
            result[sheetName] = roa;
        }
        //   });
        return result;
    }

    $("#dear").on('keyup', function(k){
        $(".dear").text($(this).val());
    });
    

    $("#search").on('keyup', function(){
        var search = $(this).val();
        var li = makeList(search);
        $("#labels").html(li);
    });

    function makeList(search){
      console.log(search);
        var li = "";
        var li1 = "";
        var li2 = "";
        var arr;
        var dear = "";
        var pagebreak = "";
        // list 배열을 순회하면서 data 정보를 가져옴
        var i = 0;

        $.each(jsonData, function(k, item) {
            arr = [];
            for (var prop in item) {
                arr.push(item[prop]);
            }

            if(arr[0].indexOf(search) <= -1){
                return;
            }

            if (i++ == 14) {
                pagebreak = "";
                i = 0;
            } else {
                pagebreak = "";
            }

            if (i == 1) {
                pagebreak = "top";
            }

            var left = "";
            if (i % 2 == 1) {
                left = " left";
            }

            if(!arr[3]){
               arr[3] = "";     
            }


            li += '<div class="label ' + pagebreak + left + '"><div>' +
                "<div class='addr1'>" + arr[2] + "</div>" +
                "<div class='addr2'>" + arr[3] + "</div>" +
                "<div class='name'>" + arr[0] + "<span class='dear'>" + dear + "<span></div>     " +
                "<div class='post'>" + arr[1] + "</div></div></div>";
        });    
        
        
        return li;


    }

});
