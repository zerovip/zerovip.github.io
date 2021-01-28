function ChangeClassLeft(){document.getElementById("left").classList.toggle("left_show");}
function ChangeClassTOC(){document.getElementById("toc").classList.toggle("toc_show");}
function ChangeClassBlackBlock(wait_to_change){wait_to_change.classList.toggle("black_block_show");}
function read_cookie(key){var result;return(result=new RegExp('(?:^|; )'+encodeURIComponent(key)+'=([^;]*)').exec(document.cookie))?(result[1]):null;}
function ut_change_to_light_mode(){try{const message={type:'set-theme',theme:'github-light'};var utterances=document.querySelector('iframe');utterances.contentWindow.postMessage(message,'https://utteranc.es');}
catch(err){}}
function ut_change_to_dark_mode(){try{const message={type:'set-theme',theme:'github-dark'};var utterances=document.querySelector('iframe');utterances.contentWindow.postMessage(message,'https://utteranc.es');}
catch(err){}}
const checkbox=document.querySelector(".theme-switcher");const themeContainer=document.querySelector(".theme-container");var ctheme=read_cookie("ctheme");if(ctheme=="dark"){themeContainer.classList.add("dark");checkbox.checked=false;ut_change_to_dark_mode();}else if(ctheme=="light"){themeContainer.classList.remove("dark");checkbox.checked=true;ut_change_to_light_mode();}else{if(checkbox.checked){themeContainer.classList.remove("dark");document.cookie="ctheme=light; path=/";ut_change_to_light_mode();}else{themeContainer.classList.add("dark");document.cookie="ctheme=dark; path=/";ut_change_to_dark_mode();}}
checkbox.addEventListener("change",function(){if(themeContainer&&this.checked){themeContainer.classList.remove("dark");document.cookie="ctheme=light; path=/";ut_change_to_light_mode();}else{themeContainer.classList.add("dark");document.cookie="ctheme=dark; path=/";ut_change_to_dark_mode();}});