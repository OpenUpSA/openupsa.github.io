if (document.location.hostname == "localhost") {
    var baseurl = "/js/traffic-fines/";
} else {
    var baseurl = "https://openup.org.za/js/traffic-fines/";
}

document.write('<script type="text/javascript" src="' + baseurl + 'pym.js"></script>')

elements = ["n1", "n2", "n3", "n1h", "n2h"];
document.write("<script>");
for (idx in elements) {
    var el = elements[idx];
    if (document.getElementById(el))
        document.write('var pymParent = new pym.Parent("' + el + '", "' + baseurl + 'route.html?route=' + el + '", {});')
}
document.write("</script>");
