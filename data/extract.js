 var scroll = setInterval(function(){window.scrollBy(0, 1000)}, 1000);

 window.clearInterval(scroll); console.log(); urls = $$('a'); urls.forEach(function(v,i,a) {if(v.id=="video-title"){console.log('\t'+v.title+'\t'+v.href+"\t")}});
