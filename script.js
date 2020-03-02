function refresh(){
    let textContent = document.getElementById('edit-id').value;
    document.getElementById('view-frame').srcdoc = textContent;
}