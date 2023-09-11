function compile() {
    var html = document.getElementById("htmlCode");
    var css = document.getElementById("cssCode");
    var js = document.getElementById("jsCode");
    var code = document.getElementById("code").contentWindow.document;
  
    document.body.onkeyup = function() {
      code.open();
      code.writeln(
        html.value +
          "<style>" +
          css.value +
          "</style>" +
          "<script>" +
          js.value +
          "</script>"
      );
      code.close();
    };
  }
  
  compile();
  