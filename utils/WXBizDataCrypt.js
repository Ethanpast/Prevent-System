var crypto = require('crypto')

// var Crypto = (require ('cryptojs')).Crypto


function WXBizDataCrypt(appId, sessionKey) {
  this.appId = appId
  this.sessionKey = sessionKey
}

WXBizDataCrypt.prototype.decryptData = function (encryptedData, iv) {
	  // base64 decode
	  var sessionKey = new Buffer(this.sessionKey, 'base64')
	  encryptedData = new Buffer(encryptedData, 'base64')
	  iv = new Buffer(iv, 'base64')
	  try {
		 // 解密
		var decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv)
		// 设置自动 padding 为 true，删除填充补位
		decipher.setAutoPadding(true)
		var decoded = decipher.update(encryptedData, 'binary', 'utf8')
		decoded += decipher.final('utf8')
		decoded = JSON.parse(decoded)
	  } catch (err) {
		throw new Error('Illegal Buffer')
	  }
  
  
 //    var encryptedData = Crypto.util.base64ToBytes(encryptedData)
 //    var key = Crypto.util.base64ToBytes(this.sessionKey);
 //    var iv = Crypto.util.base64ToBytes(iv);
  
 //    // 对称解密使用的算法为 AES-128-CBC，数据采用PKCS#7填充
 //    var mode = new Crypto.mode.CBC(Crypto.pad.pkcs7);
    
 //    try {
 //      // 解密
 //      var bytes = Crypto.AES.decrypt(encryptedData, key, {
 //          asBpytes:true,
 //          iv: iv,
 //          mode: mode
 //      });
 //      var decoded = JSON.parse(bytes);
	// } catch (err) {
	//   console.log(err)
	// }

  if (decoded.watermark.appid !== this.appId) {
    throw new Error('Illegal Buffer')
  }
  return decoded
}

module.exports = WXBizDataCrypt
