//计算周长面积
/*
function Rectangle(width, height) {
  var w = Number(width),
      h = Number(height);
  this.area = function() {
    return roundFractional(w * h, 2);          
  };
  this.perimeter = function() {
    return roundFractional(2 * (w + h), 2);        
  };
  function roundFractional(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);         
  }
}*/

//数据合法性校验
function validate(data) {
  //console.log(data)
  var result = {
    isOK: false,
    reason: ''             
  };
  if(data === '') {
    result.reason = '不能为空！';
    return result;          
  }
  if(!/^-?(0|[1-9]\d*)(\.\d*)?([eE][+-]?\d+)?$/.test(data)) {
    result.reason = '必须是数值';
    return result;           
  }
  if(Number(data) < 0) {
    result.reason = '必须大于零';
    return result;         
  }
  result.isOK = true;
  return result;
}
/**
 * 检查按键是否合法
 * @param key 键盘按键
 * @param content 文本框中已有的内容（字符串）
 * @param pos 文本框中光标位置
 * @returns {bool} 按键是否合法，true 合法，false 非法
 */

function isLegalKey(key, content, pos) {
  //过滤非法字符
  if(/[abcdf-zABCDF-Z`~!@#$%^&*()=_+[\]{}|;:'",<>/?\\]/.test(key)) {
    return false;
  }
  //小数点
  if(key === '.') {
    if(pos === 0 || content.indexOf('.') !== -1) return false;
    if(pos > 0 && /[-eE]/.test(content.slice(0, pos))) return false;
  }
  //负号
  if(key === '-') {
    if(pos === 0) return false;
    if(pos > 0 && /[0-9.]/.test(content.slice(pos -1, pos))) return false;
    if(pos > 0 && content.indexOf('-') !== -1) return false;
  }
  //e和E
  if(key === 'e' || key === 'E') {
    if(pos === 0) return false;
    if(content.indexOf('e') !== -1 || content.indexOf('E') !== -1) return false;
    if(content.slice(pos, content.length).indexOf('.') !== -1) return false;
    if(pos > 0 && /[-.]/.test(content.slice(pos - 1, pos))) return false;
  }
  return true;
}
