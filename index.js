function child(){
  setTimeout(function(){ console.log('I am uncle') },100);
  console.log('I am a child');
}

function mother(){
  setTimeout(function(){ console.log('I am father') },1000);
  setTimeout(function(){ console.log('I am uncle') },100);
  child();
  console.log('I am mother');
}

function grandmother(){
  mother();
  console.log('I am grandma');

}

grandmother();