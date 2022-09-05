javascript:(() => {
    var $focused = $(':focus');
    var txt = $focused.val();
    
    if($focused.prop('selectionStart') == undefined || $focused.prop('selectionEnd') == undefined) return;

    var oldValue = txt.substring($focused.prop('selectionStart'), $focused.prop('selectionEnd'));
    
    if(oldValue == null || oldValue == undefined || oldValue =="") return;

    let newValue = prompt(`Replace '${oldValue}' with:`); 

    if(newValue == null || newValue == undefined || newValue =="")
        if(!confirm(`This will replace '${oldValue}' with empty string, confirm?`)) return;

    $('input').each(function () {         
        if($(this).val().indexOf(oldValue)>-1) {
            var value = $(this).val().replace(oldValue , newValue);
            $(this).val(value);
        } 
    });
})();
