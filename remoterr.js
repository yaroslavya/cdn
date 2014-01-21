function throWee(){
  var namedFuncErr = new Error('github named function error');
  throw namedFuncErr;
}

function refError(){
  var a = b;
}
