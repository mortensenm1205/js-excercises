 var ran;
 var someNum;

someNum = Math.floor(Math.random() * 100) + 1;
ran = someNum;

function lessThan(num) {
  if(num < 50) {
    return true;
  } else {
    return false;
  }
};

function greaterThan(num) {
  if(num >= 50) {
    return true;
  } else {
    return false;
  }
}

lessThan(ran);
greaterThan(ran);
