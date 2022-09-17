const ApplyTemplateValues = (template, data) => {
    if(!data) return;

    var pattern = /(?<={{)\w+(?=}})/g;

    var html = template;
    var matches = html.match(pattern);    

    matches.forEach(name => {        
                html = html.replace(`{{${name}}}`, data[name]);   
        });

    return html;
}

$.fn.applyTemplateValues = function(data) {        
        var html = ApplyTemplateValues($(this).html(), data);
        $(this).html(html); 
    };
